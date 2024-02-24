---
layout: default
hastoc: true
title: Holiday Homeworks
category: Holiday Homeworks
author: kavish
permalink: /holiday-homeworks
redirect_from:
  - /holidayhw
  - /hhw
  - /holidayhw.html
  - /holidayhw.md
---

{% for hhw in site.holiday-homeworks %}
  <h2><a href='{{hhw.permalink}}'>{{hhw.title}}</a></h2>
  <p>{{ hhw.excerpt  | replace: "h2", "h3"}}</p>
{% endfor %}