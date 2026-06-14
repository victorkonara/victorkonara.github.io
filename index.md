---
title: Home
layout: home
nav_order: 1
description: "Victor Konara - author of A Sorcerer's Tail."
permalink: /
---

{% assign home_colors = site.design.home %}

<div class="home-hero">

<p class="home-penname" style="color: {{ home_colors.penname_color }};">Victor Konara</p>

{% assign books = site.books | sort: "date" | reverse %}
{% assign book = books.first %}

{% if book.cover and book.cover != "" %}
<img class="home-cover" src="{{ book.cover | relative_url }}" alt="Cover of {{ book.title }}">
{% endif %}

<h1 class="home-book-title" style="color: {{ home_colors.title_color }};">{{ book.title }}</h1>

<p class="home-book-subtitle" style="color: {{ home_colors.subtitle_color }};">{{ book.subtitle }}</p>

<div class="home-divider" style="border-top-color: {{ home_colors.divider_color }};"></div>

<div class="home-blurb" style="color: {{ home_colors.blurb_color }};">{{ book.blurb | markdownify }}</div>

{% include components/book-buy-links.html links=book.links class="home-buy-links" %}

<div class="home-archive-cta">
  <p style="color: {{ home_colors.cta_text_color }};">Being a treatise written for the Duchess of Daub</p>
  <a href="/docs/" style="color: {{ home_colors.cta_link_color }};">Read about the World →</a>
</div>

</div>
