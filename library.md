---
title: Books
layout: default
nav_order: 2
permalink: /books/
description: "Books by Victor Konara, including A Sorcerer's Tail and the Imperial Archive series."
# Hidden from the sidebar for now — with a single series and a single
# book, this page shows exactly what Claws and Effect already shows,
# so it's redundant rather than useful. The page itself is untouched
# and still live at /books/, just not linked from the nav. Delete this
# line once there's a second series with books of its own, so this
# becomes the "everything, across every series" shelf it's meant to be.
nav_exclude: true
---

# Books

<div class="book-list">
{% assign books = site.books | sort: "date" | reverse %}
{% for book in books %}
  {% include components/book-entry.html book=book %}
{% endfor %}
</div>
