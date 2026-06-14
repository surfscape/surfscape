---
title: Blog
collection: Main
description: Press releases, development, ideas, and other posts
order: 2
navigation:
  subnav:
    label: Posts
---

<div class="auto-grid">
{% for post in collections.blog -%}

<section class="card post-card">
<h2><a href="{{post.url}}">{{post.data.title}}</a></h2>
<div class="auto-flex">
  {%- if post.data.tags -%}
        <a class="label" href="tagged/{{ post.data.tags | slugify }}/">{{ post.data.tags }}</a>
  {%- endif -%}
<p><small><time datetime="{{post.date}}">{{post.date | formatPostDate}}</time></small></p>
</div>

{% if post.data.description %}

  <p>{{post.data.description}}</p>
{% endif %}
</section>

{%- endfor %}

</div>
