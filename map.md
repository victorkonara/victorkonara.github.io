---
title: Maps
layout: default
nav_order: 6
permalink: /maps/
description: "Maps of Singhapura, Daub, and the wider world of A Sorcerer's Tail."
maps:
  - title: "The Known World"
    image: /assets/images/maps/known-world.jpg
    alt: "A map of the known world. Ealdorfold and the North occupy the upper half; the Singhapura Empire, the Rosantic League, Lusia, and the Tangowan archipelago occupy the lower half, divided by the Great Northern Waste and its scattered islands."
    caption: |
       A map of the known world, with Singhapura at the center (of course).  You can see that the map loses detail the further out from Singhapura and its more sophisticated trading partners  - almost nothing is known about the Obsidian Empire, for instance.
       
---

# Maps
{: .no_toc }

I'm not a professional mapmaker, so these maps are drawn using [Wonderdraft](https://www.wonderdraft.net/) and [GIMP](https://www.gimp.org/). Much of the detail, like cities and trees, are from brushes by [KM Alexander](https://kmalexander.com/free-stuff/fantasy-map-brushes/), who extracts details from old maps and turns them into reusable assets under the Creative Commons CC0 license. pecifically, most of the trees, cities, and mountain symbols are from the Popple set (based on Henry Popple's 1746 map of the British Empire in the Americas). Some mountains are from the Walser set (a reconstruction of iconography from a 1763 map created by Gabriel Walser).

The compass rose at the bottom is an amalgam of the [Sandakapahana of the Ridi Viharaya](https://en.wikipedia.org/wiki/Ridi_Viharaya) in Kurunegala, Sri Lanka, which is relatively close to where I live and this [compass rose](https://commons.wikimedia.org/wiki/File:Compass_rose_1595.svg) I found while trawling Wikimedia Commons.

As for inspiration, I was mostly looking at the [Carta Marina](https://en.wikipedia.org/wiki/Carta_marina), created by Swedish ecclesiastic Olaus Magnus and initially published in 1539, which was made with a process somewhat like I imagine Singhapura mapmakers might follow - drawing from older maps, like Ptolemy's work, and mixing in contemporary sources and sailors' descriptions as well as their own observations. We can safely assume that no Singhapura mapmaker has made it past Catherine's Gate yet . . .   

<div class="map-list">
{% for m in page.maps %}
  {% include components/map-entry.html title=m.title image=m.image alt=m.alt caption=m.caption %}
{% endfor %}
</div>
