---
layout: noaside
title: Kavish's Website
author: kavish
category: Kavish's Website
---

### Hi there!

Welcome to my website... You may find some interesting stuff here.

Here are the latest projects I have been working on:

{% for project in site.projects %}
  * [{{ project.title }}]({{ project.url }})
{% endfor %}

School Holidays Homeworks:

{% for homework in site.holidayhw %}
  * [{{ homework.title }}]({{ homework.url }})
{% endfor %}

You can find more about me [here](/about)!