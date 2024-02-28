---
layout: default
hastoc: true
title: Posts
category: Posts
author: kavish
permalink: /posts
subtitle: A collection of posts/articles that I have written.
---

{% assign posts = site.posts | sort: 'date' %}

{% for post in site.posts %}
{% assign currentdate = post.date | date: "%Y" %}
{% if currentdate != date %}
<h2 id="{{currentdate}}">{{ currentdate }}</h2>
{% assign date = currentdate %} 
{% endif %}
<md-filled-card class="card">
    <div class="card__header">
        <div class="card__header-text">
            <div class="card__title">
                <h3>
                <a href='{{post.url | relative_url}}'>
                    {{post.title}}
                </a>
                </h3>
            </div>
            <div class="card__subtitle">{{ post.subtitle }}<br>{{ post.date | date: '%A, %B %d, %Y (%Z)' }}</div>
        </div>
    </div>
    <div class="card__secondary body-medium">
        <p>{{ post.excerpt | markdownify }}</p>
    </div>
</md-filled-card>
{% endfor %}