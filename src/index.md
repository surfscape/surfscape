---
key: Home
hero:
  title: "SurfScape Collective"
  description: "Developing ethical software and services with user choice and privacy in mind."
  backdrop: "/public/homepage_hero_banner.png"
  actions:
    - label: Learn More
      link: "#main-content"
      icon: lucide:corner-right-down
    - label: Donate
      link: donate
      type: minimal
      icon: lucide:heart
---

## Products

test

<div class="auto-grid">
{% for item in collections.projects %}
{% if loop.index <= 2 %}
<a href="{{item.url}}" class="card">
<div class="img-container">
<img src="/public/{{item.data.title | slugify}}_pr.png" alt="">
</div>
<div class="card-content">
<h3>{{item.data.title}}</h3>
<p>{{item.data.description}}</p>
</div>
</a>
{% endif %}
{% endfor %}
</div>

<a href="/products" class="button">View more {% lucide "chevron-right" %}</a>

## Latest Posts

{% for post in collections.blog %}

- [{{ post.data.title }}]({{post.url}}) - <time datetime="{{post.date}}">{{post.date | formatPostDate}}</time>

{% endfor %}
