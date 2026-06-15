---
title: Products
collection: Main
description: Explore our projects and initiatives
subnav: false
order: 0
---

<div class="auto-grid" style="--breakpoint:400px">
{% for item in collections.projects %}

<a href="{{item.url}}" class="card" >
<div class="img-container">
<img src="/public/{{item.data.title | slugify}}_pr.png" alt="">
</div>
<div class="card-content">
<h3>{{item.data.title}}</h3>
<p>{{item.data.description}}</p>
</div>
</a>
{% endfor %}
</div>
