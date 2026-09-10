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

</div>

<section class="village-scene">
  <img class="village-scene-img" src="{{ '/assets/images/home-village.png' | relative_url }}" alt="A small pixel-art village scene: a stone cottage, a watchtower, a knight standing watch, and a villager going about their day." loading="lazy">
  <p class="village-scene-caption">Art's been to many places like this. <a href="{{ '/docs/' | relative_url }}">Explore the World →</a></p>
</section>
