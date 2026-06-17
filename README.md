# victorkonara.com

This is the source for [victorkonara.com](https://victorkonara.com) — home of *A Sorcerer's Tail* and the Imperial Archive.

The site is built with [Jekyll](https://jekyllrb.com) and is a customized version of the [Just the Docs](https://just-the-docs.com) theme (MIT licensed — see [LICENSE.txt](LICENSE.txt)). Just the Docs normally powers documentation sites; here it's been reworked into an author site with a home page, a books shelf, a "World" reference section (built on the theme's docs/navigation system), an updates blog, and an about page.

This README is aimed at the author (or anyone helping out) making day-to-day content changes — adding books, updating the World, posting news, and tweaking the look of the site.

## Previewing the site locally

1. Install [Ruby](https://www.ruby-lang.org/) and [Bundler](https://bundler.io/).
2. From the project root, install dependencies:
   ```shell
   bundle install
   ```
3. Start the local preview server:
   ```shell
   bundle exec jekyll serve
   ```
4. Open `http://localhost:4000` in a browser. The server watches for file changes and rebuilds automatically — refresh the page to see edits.

Always preview locally before pushing to `main` — GitHub Pages can take a few minutes to rebuild and publish.

## Adding a new book

Each book is a single file in [`_books/`](_books/), with no body — just front matter. To add a book, copy an existing file (e.g. [`_books/a-sorcerers-tail.md`](_books/a-sorcerers-tail.md)) and fill in:

```yaml
---
title: "Book Title"
subtitle: "Book Two of the Imperial Archive"
date: 2027-01-01          # publication date — books are sorted newest-first
cover: "/assets/images/books/book-title.png"   # leave blank for a placeholder
blurb: |
  One or more paragraphs of back-cover copy. Each blank line starts a new
  paragraph.
links:
  amazon: "#"
  audible: "#"
  bookshop: "#"
  barnes_noble: "#"
---
```

- Drop the cover image into [`assets/images/books/`](assets/images/books/) and point `cover` at it.
- Leave any `links` entry as `"#"` or blank to hide that buy button.
- The most recent book (by `date`) automatically becomes the home page hero; every book in `_books/` appears on the [Books](library.md) page, newest first.

## Updating "The World"

The World section lives in [`docs/`](docs/) and mirrors the left-hand navigation. Each subfolder (`docs/magic/`, `docs/places/`, `docs/records/`) is a section; each `index.md` is that section's landing page.

**To add a page to an existing section** (e.g. a new place under "Of Provinces"):

1. Copy an existing file in that folder, e.g. [`docs/places/wattle.md`](docs/places/wattle.md).
2. Update the front matter:
   ```yaml
   ---
   title: New Place Name
   parent: Of Provinces
   grand_parent: The World
   nav_order: 9
   layout: default
   ---
   ```
3. Write the page content in Markdown below the front matter.

`nav_order` controls the position in the sidebar (lower numbers first) among siblings under the same `parent`.

**To add a brand-new top-level section** (a sibling of Of Magic, Of Provinces, etc.):

1. Create a new folder under `docs/` with an `index.md`.
2. Give it front matter like:
   ```yaml
   ---
   title: New Section
   parent: The World
   nav_order: 4
   has_children: true
   layout: default
   ---
   ```
3. Add pages inside that folder with `parent: New Section` and `grand_parent: The World`.

### In-world callout boxes

The theme is configured with custom callout styles for this site's voice. In any Markdown page, write:

```markdown
{: .note}
> This passage needs fact-checking before the Duchess sees it.
```

Available styles (configured in [`_config.yml`](_config.yml) under `callouts:`): `.note` ("Art's Note"), `.important` ("Official Record"), `.highlight` ("Work in Progress"), `.warning` ("Warning"), `.new` ("Disputed").

## Posting an update

News items live in [`_posts/`](_posts/) and appear on the [Updates](updates.md) page, newest first.

1. Create a file named `_posts/YYYY-MM-DD-some-title.md` (the date becomes the post date).
2. Add front matter and content:
   ```yaml
   ---
   title: "Post Title"
   excerpt: "A short summary shown in the updates list."
   ---

   The full text of the update, in Markdown.
   ```

No `layout` or `permalink` is needed — both are set automatically for everything in `_posts/` via `_config.yml`.

## Editing the About page

Edit [`about.md`](about.md) directly. The author photo is at [`assets/images/about/photo.jpg`](assets/images/about/photo.jpg) — replace that file to change the picture, or update the `<img src>` to point elsewhere.

## Site-wide settings and look

Most global settings live in [`_config.yml`](_config.yml):

- `title`, `description` — site name and meta description.
- `footer_content` — the text shown in the footer on every page (HTML allowed).
- `design:` — colors and fonts, including the `home:` sub-section which controls the home page's pen name, title, subtitle, blurb, and call-to-action colors.
- `nav_order` on any top-level page (`index.md`, `library.md`, `docs/index.md`, `updates.md`, `about.md`) controls the order of items in the main sidebar.

## Publishing

Push changes to `main`. GitHub Pages rebuilds and redeploys the site automatically — this usually takes a minute or two, occasionally longer.

## Credits

Built on [Just the Docs](https://github.com/just-the-docs/just-the-docs), available under the [MIT License](LICENSE.txt). The `_books` collection, the World docs structure, the home/library layouts, and the color scheme in this repo are customizations on top of that theme for this site specifically.
