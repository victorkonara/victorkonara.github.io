---
title: Home
layout: home
nav_order: 1
description: "Victor Konara - author of A Sorcerer's Tail."
permalink: /
---
{%- comment -%} Every HTML block below is flush-left with no blank lines inside it, so the markdown processor leaves it alone. {%- endcomment -%}
{%- assign books = site.books | sort: "date" | reverse -%}
{%- assign book = books.first -%}
<div class="sky">
<div class="sun" aria-hidden="true"></div>
<i class="cloud c1" aria-hidden="true"></i><i class="cloud c2" aria-hidden="true"></i><i class="cloud c3" aria-hidden="true"></i>
<div class="wrap hero">
<div class="hero-text">
<span class="pen">Victor Konara presents</span>
<h1 class="hero-title">{{ book.title }}</h1>
<p class="hero-sub">{{ book.subtitle }}</p>
<div class="pitch">{{ book.blurb | markdownify | strip_newlines }}</div>
{%- include components/book-buy-links.html links=book.links class="home-buy-links" -%}
</div>
<div class="hero-book">
{%- if book.cover and book.cover != "" -%}
<div class="vr-book vr-book-art"><span class="tag">Book 1</span><img src="{{ book.cover | relative_url }}" alt="Cover of {{ book.title }}"></div>
{%- else -%}
<div class="vr-book" role="img" aria-label="Cover forthcoming for {{ book.title }}"><span class="tag">Book 1</span><div><div class="vr-cat"></div><b>{{ book.title }}</b><small>VICTOR KONARA</small></div></div>
{%- endif -%}
</div>
</div>
</div>
<div class="wrap">
<div class="window">
<p class="window-cap">Art's been to many places like this. <a href="{{ '/docs/' | relative_url }}">Explore the World →</a></p>
<img src="{{ '/assets/images/home-village.png' | relative_url }}" alt="A small pixel-art village scene: a stone cottage, a watchtower, a knight standing watch, and a villager going about their day." loading="lazy">
</div>
<section class="vr-section" aria-labelledby="roads-title">
<div class="vr-head"><h2 id="roads-title">Choose Your Road</h2></div>
<div class="post">
<a class="arrow left" href="{{ '/claws-and-effect/' | relative_url }}"><span><strong class="arrow-name">The Books</strong><span class="arrow-text">Art the cat, Gary the paladin, and everything going wrong around them.</span><span class="arrow-go">Open the book →</span></span></a>
<a class="arrow right e" href="{{ '/docs/' | relative_url }}"><span><strong class="arrow-name">The World According to Art</strong><span class="arrow-text">Magic, provinces, politics and records, as explained to a duchess.</span><span class="arrow-go">Read the scrolls →</span></span></a>
<a class="arrow left s" href="{{ '/maps/' | relative_url }}"><span><strong class="arrow-name">Maps</strong><span class="arrow-text">Chart the known world, from the frozen North to the Rosantic League.</span><span class="arrow-go">Unroll the maps →</span></span></a>
<a class="arrow right t" href="{{ '/updates/' | relative_url }}"><span><strong class="arrow-name">Updates</strong><span class="arrow-text">News from the road: releases, events, and the odd rumour.</span><span class="arrow-go">Hear the news →</span></span></a>
</div>
</section>
{%- assign world_root = site.html_pages | where: "title", "The World According to Art" | first -%}
{%- assign world_sections = site.html_pages | where: "parent", world_root.title | sort: "nav_order" -%}
<section class="vr-section" aria-labelledby="world-title">
<div class="vr-head"><h2 id="world-title">The World According to Art</h2><p>Written for Her Grace, the Duchess of Daub. Pick a shelf.</p></div>
<div class="board">
{%- for section in world_sections -%}
{%- assign kids = site.html_pages | where: "parent", section.title | sort: "nav_order" -%}
<div class="shelf-card c{{ forloop.index }}">
<h3><a href="{{ section.url | relative_url }}">{{ section.title }}</a></h3>
<ul>
{%- for kid in kids -%}
<li><a href="{{ kid.url | relative_url }}">{{ kid.title }}</a></li>
{%- endfor -%}
</ul>
</div>
{%- endfor -%}
</div>
</section>
{%- assign maps_page = site.pages | where: "permalink", "/maps/" | first -%}
<section class="vr-section" aria-labelledby="maps-title">
<div class="vr-head"><h2 id="maps-title">The Maps</h2><p>Singhapura sits at the center of the known world (of course).</p></div>
<div class="mapcards">
{%- for m in maps_page.maps -%}
<a class="mapcard" href="{{ '/maps/' | relative_url }}#{{ m.title | slugify }}"><img src="{{ m.image | replace: '/maps/', '/maps/thumbs/' | relative_url }}" alt="{{ m.alt | default: m.title }}" loading="lazy"><b>{{ m.title }}</b></a>
{%- endfor -%}
</div>
</section>
{%- assign latest = site.posts | first -%}
<section class="vr-section" aria-label="News and about">
<div class="duo">
{%- if latest -%}
<div class="vr-panel"><span class="chip">News · {{ latest.date | date: "%-d %B %Y" }}</span><h3><a href="{{ latest.url | relative_url }}">{{ latest.title }}</a></h3><div>{{ latest.excerpt | strip_newlines }}</div><a class="btn-book" href="{{ '/updates/' | relative_url }}">All updates</a></div>
{%- endif -%}
<div class="vr-panel"><span class="chip chip-green">About</span><h3>Who is Victor Konara?</h3><a class="btn-book" href="{{ '/about/' | relative_url }}">Meet the author</a></div>
</div>
</section>
</div>
