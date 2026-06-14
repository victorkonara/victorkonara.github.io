/*!
 * cheshire.js — one orange cat silhouette per page, beside a heading.
 *
 * On each load:
 *   1. Pick a random pose from eight images, avoiding the last one seen
 *      (tracked in sessionStorage so consecutive pages differ).
 *   2. Flip it horizontally with 50% probability.
 *   3. Pick a preferred side (right/left per pose).
 *   4. Use the Range API to measure actual heading text width.
 *      If the cat body would overlap the text by more than a small
 *      tolerance, try the other side. If neither fits, skip silently.
 *   5. Align the cat's feet to the heading baseline and its body edge
 *      to the heading edge using bounding-box maths.
 *   6. Render the output canvas at devicePixelRatio for crisp HiDPI output.
 *
 * Pure canvas pixel manipulation — black→orange ink wash, white→transparent.
 */
(function () {
  'use strict';

  // ── Ink colour (site saffron family) ─────────────────────────
  const INK         = { r: 210, g: 108, b: 16 };
  const WHITE_FLOOR = 215;   // luminance threshold: above = background
  const PROC_CAP    = 650;   // max px on longest side during processing

  // ── Pose catalogue ────────────────────────────────────────────
  // height       — display height in px; width auto-scales to image aspect ratio
  // preferredSide — tried first; other side attempted if preferred doesn't fit
  // flip is NOT here — it's randomised fresh each page load (see below)
  const POSES = [
    { src: '/assets/images/cats/1.png', height: 88,  preferredSide: 'right' },
    { src: '/assets/images/cats/2.png', height: 112, preferredSide: 'right' },
    { src: '/assets/images/cats/3.png', height: 58,  preferredSide: 'right' },
    { src: '/assets/images/cats/4.png', height: 84,  preferredSide: 'right' },
    { src: '/assets/images/cats/5.png', height: 96,  preferredSide: 'right' },
    { src: '/assets/images/cats/6.png', height: 100, preferredSide: 'right' },
    { src: '/assets/images/cats/7.png', height: 120, preferredSide: 'right' },
    { src: '/assets/images/cats/8.png', height: 90,  preferredSide: 'right' },
  ];

  // ── Pick a heading ────────────────────────────────────────────
  // Prefer h2/h3 — shorter headings leave more whitespace beside the cat.
  function pickHeading() {
    const pool = [
      ...document.querySelectorAll('.main-content h2, .main-content h3'),
    ];
    if (pool.length) return pool[Math.floor(Math.random() * pool.length)];
    return (
      document.querySelector('.main-content h1') ||
      document.querySelector('.home-hero h1')    ||
      null
    );
  }

  const heading = pickHeading();
  if (!heading) return;

  // ── Per-load randomisation — avoid repeating the previous pose ─
  const LAST_KEY = 'cheshire-last-pose';
  const lastIdx  = parseInt(sessionStorage.getItem(LAST_KEY) ?? '-1', 10);
  const available = POSES.map((_, i) => i).filter(i => i !== lastIdx);
  const poseIdx  = available[Math.floor(Math.random() * available.length)];
  const pose     = POSES[poseIdx];
  try { sessionStorage.setItem(LAST_KEY, String(poseIdx)); } catch (_) {}

  const flip = Math.random() < 0.5;   // 50-50 horizontal mirror

  // ── Load and process image ────────────────────────────────────
  const img = new Image();

  img.onload = function () {

    // Downscale to PROC_CAP for fast pixel work.
    const s     = Math.min(1, PROC_CAP / Math.max(img.width, img.height));
    const procW = Math.round(img.width  * s);
    const procH = Math.round(img.height * s);

    const proc  = document.createElement('canvas');
    proc.width  = procW;
    proc.height = procH;
    const pctx  = proc.getContext('2d');
    pctx.drawImage(img, 0, 0, procW, procH);

    const id = pctx.getImageData(0, 0, procW, procH);
    const d  = id.data;

    // One pass: erase background, colourize silhouette, detect bounds.
    let minX = procW, minY = procH, maxX = 0, maxY = 0;

    for (let i = 0; i < d.length; i += 4) {
      const lum = d[i] * 0.2126 + d[i+1] * 0.7152 + d[i+2] * 0.0722;

      if (lum >= WHITE_FLOOR || d[i+3] < 12) {
        d[i+3] = 0;   // transparent
      } else {
        const t = lum / WHITE_FLOOR;   // 0 = black → full orange; 1 = threshold → fades
        d[i]   = Math.round(INK.r * (1 - t * 0.45));
        d[i+1] = Math.round(INK.g * (1 - t * 0.55));
        d[i+2] = Math.round(INK.b * (1 - t * 0.40));
        d[i+3] = Math.round((1 - t) * 245);

        const px = (i >> 2) % procW;
        const py = (i >> 2) / procW | 0;
        if (px < minX) minX = px;
        if (px > maxX) maxX = px;
        if (py < minY) minY = py;
        if (py > maxY) maxY = py;
      }
    }

    if (maxX === 0 && maxY === 0) return;   // no cat pixels found

    pctx.putImageData(id, 0, 0);

    // ── Display dimensions ────────────────────────────────────────
    const dispH = pose.height;
    const dispW = Math.round(dispH * (img.width / img.height));

    // ── Bounding-box offsets in display units ─────────────────────
    //
    // bottomPad: whitespace below the cat's feet in the image.
    //   bottom = -bottomPad → feet land exactly on the heading's baseline.
    //
    // rightPad / leftPad: whitespace on each side of the cat's body.
    //   right = -rightPad  → cat body's right edge is flush with heading right edge.
    //   left  = -leftPad   → cat body's left  edge is flush with heading left  edge.
    //
    const toDisp = (procPx, procTotal, dispTotal) =>
      Math.round(procPx / procTotal * dispTotal);

    const bottomPad  = toDisp(procH - 1 - maxY, procH, dispH);
    const rightPad   = toDisp(procW - 1 - maxX, procW, dispW);
    const leftPad    = toDisp(minX,              procW, dispW);
    const catBodyW   = toDisp(maxX - minX,       procW, dispW);
    const catBodyH   = toDisp(maxY - minY,       procH, dispH);

    // ── Fit check ─────────────────────────────────────────────────
    //
    // Measures the heading's actual text width using the Range API.
    // If the cat body would overlap the text by more than MAX_OVERLAP px,
    // that side is rejected.
    //
    const MAX_OVERLAP = 18;   // px of cat-over-text we'll tolerate

    function canFit(side) {
      // Very narrow viewports: skip entirely.
      if (window.innerWidth < 420) return false;

      const hr = heading.getBoundingClientRect();

      // Measure actual text extent (Range wraps all child content).
      let textLeft = hr.left, textRight = hr.right;
      try {
        const range = document.createRange();
        range.selectNodeContents(heading);
        const tb = range.getBoundingClientRect();
        if (tb.width > 0) { textLeft = tb.left; textRight = tb.right; }
      } catch (_) { /* fall back to heading rect */ }

      if (side === 'right') {
        // Cat body occupies [hr.right − catBodyW … hr.right] in the viewport.
        const catLeft = hr.right - catBodyW;
        // Overlap = how far the cat's left edge intrudes past the text's right edge.
        const overlap = Math.max(0, textRight - catLeft);
        // Also bail if the cat would be mostly off-screen to the right.
        if (hr.right + rightPad > window.innerWidth + catBodyW * 0.5) return false;
        return overlap <= MAX_OVERLAP;

      } else {   // 'left'
        // Cat body occupies [hr.left … hr.left + catBodyW] in the viewport.
        const catRight = hr.left + catBodyW;
        const overlap  = Math.max(0, catRight - textLeft);
        if (hr.left - leftPad < -catBodyW * 0.5) return false;
        return overlap <= MAX_OVERLAP;
      }
    }

    // Try preferred side, fall back to the other, give up if neither works.
    const other       = pose.preferredSide === 'right' ? 'left' : 'right';
    const chosenSide  =
      canFit(pose.preferredSide) ? pose.preferredSide :
      canFit(other)              ? other               :
      null;

    if (!chosenSide) return;   // no valid placement — skip silently

    // ── Build display canvas (HiDPI-aware) ───────────────────────
    const dpr  = window.devicePixelRatio || 1;
    const out  = document.createElement('canvas');
    out.width  = Math.round(dispW * dpr);
    out.height = Math.round(dispH * dpr);
    out.style.width   = dispW + 'px';
    out.style.height  = dispH + 'px';
    out.style.display = 'block';
    if (flip) out.style.transform = 'scaleX(-1)';
    const octx = out.getContext('2d');
    octx.scale(dpr, dpr);
    octx.drawImage(proc, 0, 0, dispW, dispH);

    // ── Attach ────────────────────────────────────────────────────
    const prevPos = getComputedStyle(heading).position;
    if (prevPos === 'static') heading.style.position = 'relative';
    heading.style.overflow = 'visible';

    const wrap = document.createElement('span');
    wrap.style.cssText = [
      'position:absolute',
      'pointer-events:none',
      'z-index:200',
      'line-height:0',
      'display:block',
      `bottom:-${bottomPad}px`,
      chosenSide === 'right'
        ? `right:-${rightPad}px`
        : `left:-${leftPad}px`,
    ].join(';');

    wrap.appendChild(out);
    heading.appendChild(wrap);
  };

  img.onerror = function () { /* fail silently */ };
  img.src = pose.src;

}());
