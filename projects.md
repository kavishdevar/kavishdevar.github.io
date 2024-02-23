---
layout: default
hastoc: true
title: Projects
category: Projects
author: kavish
subtitle: A collection of projects I have worked on.
---

{% assign projects = site.projects | sort: 'title' %}

{% for project in projects %}
<md-filled-card class="card">
    <div class="card__header">
        <div class="card__header-text">
            <div class="card__title">
                <h2><a onclick='changeView("{{project.permalink}}")'> {{ project.title }}</a> </h2>
            </div>
            <div class="card__subtitle">{{ project.subtitle }}</div>
        </div>
    </div>
    <div class="card__secondary body-medium">
        <p>{{ project.excerpt | markdownify }}</p>
    </div>
</md-filled-card>
{% endfor %}