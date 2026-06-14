---
title: Books
layout: default
nav_order: 2
permalink: /books/
description: "Books by Victor Konara, including A Sorcerer's Tail and the Imperial Archive series."
---

# Books

<div class="book-list">
{% assign books = site.books | sort: "date" | reverse %}
{% for book in books %}
  <div class="book-entry">
    <div class="book-entry-cover">
      {% if book.cover and book.cover != "" %}
      <img src="{{ book.cover | relative_url }}" alt="Cover of {{ book.title }}" loading="lazy">
      {% else %}
      <div class="book-entry-cover-placeholder">Cover forthcoming</div>
      {% endif %}
    </div>
    <div class="book-entry-content">
      <div class="book-entry-title">{{ book.title }}</div>
      <p class="book-entry-subtitle">{{ book.subtitle }}</p>
      {% if book.date %}<p class="book-entry-date">{{ book.date | date: "%B %Y" }}</p>{% endif %}
      <div class="book-entry-blurb">{{ book.blurb | markdownify }}</div>
      {% include components/book-buy-links.html links=book.links %}
    </div>
  </div>
{% endfor %}
</div>
