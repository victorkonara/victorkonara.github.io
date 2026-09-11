---
title: Maps
layout: default
nav_order: 6
permalink: /maps/
description: "Maps of Singhapura, Daub, and the wider world of A Sorcerer's Tail."
maps:
  - title: "The Known World"
    image: /assets/images/maps/known-world.jpg
    caption: |
       A map of the known world, with Singhapura at the center (of course).  You can see that the map loses detail the further out from Singhapura and its more sophisticated trading partners  - almost nothing is known about the Obsidian Empire, for instance.
       

  - title: "The North"
    image: /assets/images/maps/the-north.jpg
    alt: "A closeup map of Wattle and Daub, the two provinces Singhapura calls 'the North,' with the Great Northern Waste running between them and Ealdorfold."
    caption: |
      The region that Singhapura thinks of as "The North" (although you'll find plenty of people who say that Ealdorfold is the true North). Readers who've come across Diana Wynne Jones' a Tough Guide to Fantasyland might recognize quite a few things here . . . the biggest powers here - nominally - are the Kingdom of Wattle, currently run by King Allant, the Duchy of Daub, currently defined as "the city and whatever else Maud can hang on to", and the various tendrils of Singhapura, especially the Haugris Church. A large chunk of it is the Great Northern Waste. 

  - title: "Ealdorfold"
    image: /assets/images/maps/ealdorfold.jpg
    alt: "A closeup map of Ealdorfold, the northern kingdom across the Mistigsund from Wattle, showing Aethelburh, Weligadael, and the mining city of Staanbyrig."
    caption: |
      A very old kingdom whose previous civilization ended by the Tungolsweorc, when the sky itself is said to have fallen on it. What's left is ruled by the Leohtgield, a council that elects a monarch - currently Ursule, Queen Under Heaven. Inspired to some degree by a strange mishmash of 19th century novels (especially the Brontë sisters), Anglo-Saxon mythology (especially the Arthurian corpus), Scandanavian runestone lore, Irish filids, and The Golden Bough: A Study in Magic and Religion by James George Frazier. 

  - title: "Singhapura"
    image: /assets/images/maps/singhapura.jpg
    alt: "A closeup map of the Singhapura Empire, stretching from the Diamond River Delta and the Balalpura Plains to the Raavanskandha Mountains and the vassal islands of Tangowan."
    caption: |
      The Empire proper - the largest continuous economic and military power in the known world, run at the top by the Adhiraj, the Haugris Church, the Taprobane University, and the Guilds. Its heart-city, also called Singhapura, sits at the foot of the Raavanskandha mountains. Inspired by Sri Lankan history and mythology (especially the hydraulic civilizations of Anuradhapura and Polonnaruwa era) and by Kautilya's Arthashastra, which I highly recommend if you ever set out to run something like the Maurya Empire - it's got everything from fort-building to taxation to surveys to court systems to markets and trade setup. 

  - title: "The Rosantic League"
    image: /assets/images/maps/rosantic-league.jpg
    alt: "A closeup map of the Rosantic League, a coalition of forty-three polities along the river Valder, showing Valdermach, Brennmark, and Orvaine."
    caption: |
      Forty-three polities bound by charter, and one of the pre-eminent conglomerate powers of the world, backed up by powerful magic. Loosely inspired by the Holy Roman Empire at its peak - especially the constitutional patchwork and the French-German mishmash (Alsace, Lorraine, and so on).

  - title: "Lusia"
    image: /assets/images/maps/lusia.jpg
    alt: "A closeup map of Lusia, seventeen city-states south of the Taprobane Desert, showing the four great republics of Septimura, Marezzia, Altomente, and Ferrocinto."
    caption: |
      Seventeen city-states held together by language and old rivalry, inspired broadly by the Renaissance Italy of Machiavelli's time - especially Florence, Rome, Venice, Sforza-run Milan, and the banking houses.  
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
