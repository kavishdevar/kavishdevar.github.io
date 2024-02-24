---
layout: default
hastoc: true
title: Tools
category: Tools
author: kavish
subtitle: A collection of tools I have worked on.
---

{% assign tools = site.tools | sort: 'title' %}

{% for tool in tools %}
<md-filled-card class="card">
    <div class="card__header">
        <div class="card__header-text">
            <div class="card__title">
                <h2><a onclick='changeView("{{tool.permalink}}")'> {{ tool.title }}</a> </h2>
            </div>
            <div class="card__subtitle">{{ tool.subtitle }}</div>
        </div>
    </div>
    <div class="card__secondary body-medium">
        <p>{{ tool.excerpt | markdownify }}</p>
    </div>
</md-filled-card>
{% endfor %}