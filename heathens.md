---
title: Heathens
layout: default
nav_order: 4
permalink: /heathens/
description: "Heathens, an upcoming web serial by Victor Konara."
# This page (and its nav entry) won't appear on the built site while
# published is false — Jekyll drops unpublished pages from the build
# entirely. When Heathens is ready to go live, delete this line (or
# flip it to `published: true`) and fill in the two TODOs below.
published: false
---

# Heathens

<!-- TODO (Victor): placeholder copy, replace with the real pitch -->
A web serial, currently underway. New chapters post on Royal Road.

<!-- TODO (Victor): real Royal Road URL once the serial is live -->
[Read Heathens on Royal Road →](#)

<!-- Once (if) Heathens chapters get collected into print books, tag
     those _books entries with `series: "Heathens"` and they'll show
     up here automatically, same as Claws and Effect. -->
<div class="book-list">
{% assign series_books = site.books | where: "series", "Heathens" | sort: "date" | reverse %}
{% for book in series_books %}
  {% include components/book-entry.html book=book %}
{% endfor %}
</div>
