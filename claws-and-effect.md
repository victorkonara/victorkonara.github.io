---
title: Claws and Effect
layout: default
nav_order: 3
permalink: /claws-and-effect/
description: "Claws and Effect, the fantasy series by Victor Konara starring Art the cat and Gary the paladin."
---

# Claws and Effect

<!-- TODO (Victor): placeholder copy, replace with the real series pitch -->
A trilogy following Art, a disbarred sorcerer stuck in the body of a cat, and Gary, a paladin with considerably more sword-arm than sense, as they get dragged across the edges of the Singhapuran Empire trying to fix what can't quite be fixed.

<div class="book-list">
{% assign series_books = site.books | where: "series", "Claws and Effect" | sort: "date" | reverse %}
{% for book in series_books %}
  {% include components/book-entry.html book=book %}
{% endfor %}
</div>
