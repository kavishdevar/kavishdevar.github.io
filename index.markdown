---
layout: noaside
title: Home
author: kavish
category: Home
---

Hi there!

Welcome to my website... You may find some interesting stuff here. I love to code, and tinkering with technology.


Here are the latest projects I have been working on:

{% for project in site.projects %}
  * [{{ project.title }}]({{ project.url }})
{% endfor %}