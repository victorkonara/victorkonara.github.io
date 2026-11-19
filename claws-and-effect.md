---
title: Claws and Effect
short_title: Books
layout: default
nav_order: 3
permalink: /claws-and-effect/
description: "Claws and Effect, the fantasy series by Victor Konara starring Art the cat and Gary the paladin."
---

# Claws and Effect

Claws and Effect follows Art, a former world-class sorcerer now stuck in the body of a cat, and Gary the Paladin, a master swordsman with zero street smarts and a heart of gold. Together they hustle bandits, endure exorcisms and outrun iron-fisted landlords. Book One, *A Sorcerer's Tail*, is out in May 2027.

<div class="book-list">
{% assign series_books = site.books | where: "series", "Claws and Effect" | sort: "date" | reverse %}
{% for book in series_books %}
  {% include components/book-entry.html book=book %}
{% endfor %}
</div>
