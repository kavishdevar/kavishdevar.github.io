---
layout: default
hastoc: false
title: Kavish's Website
author: kavish
category: Kavish's Website
---

### Hi there!

Welcome to my website... You may find some interesting stuff here.

Here are the latest projects I have been working on:

{% for project in site.projects %}
  * <a onclick="changeView('{{ project.url }}')">{{ project.title }}</a>
{% endfor %}

School Holidays Homeworks:

{% for homework in site.holidayhw %}
  * <a onclick="changeView('{{ homework.url }}')">{{ homework.title }}</a>
{% endfor %}

You can find more about me <a onclick="changeView('/about')">here</a>.