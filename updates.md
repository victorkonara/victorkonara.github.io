---
title: Updates
layout: default
nav_order: 4
permalink: /updates/
description: "News and updates from Victor Konara on A Sorcerer's Tail and the Imperial Archive series."
---

# Updates
{: .no_toc }

News on *A Sorcerer's Tail*, the Imperial Archive series, and anything else worth telling readers about.

<div class="updates-list">
{% for post in site.posts %}
  <div class="update-entry">
    <p class="update-date">{{ post.date | date: "%B %-d, %Y" }}</p>
    <h2 class="update-title" id="{{ post.title | slugify }}"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <div class="update-excerpt">{{ post.excerpt }}</div>
  </div>
{% else %}
  <p>No updates yet — check back soon.</p>
{% endfor %}
</div>
