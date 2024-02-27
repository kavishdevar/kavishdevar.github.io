---
layout: default
hastoc: true
title: Posts
category: Posts
author: kavish
subtitle: A collection of posts/articles that I have written.
---

{% assign posts = site.posts | sort: 'date' %}
{% for post in posts %}
<md-filled-card class="card">
    <div class="card__header">
        <div class="card__header-text">
            <div class="card__title">
                <a href='{{post.url | relative_url}}'><h2>{{post.title}}</h2></a>
            </div>
            <div class="card__subtitle">{{ post.subtitle }}</div>
        </div>
    </div>
    <div class="card__secondary body-medium">
        <p>{{ post.excerpt | markdownify }}</p>
    </div>
</md-filled-card>
{% endfor %}