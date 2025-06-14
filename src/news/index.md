---
title: News
description: Announcements, updates, and press releases.
navigation:
  subnav:
    label: Latest News
collection: main
order: 4
---

{% for post in collections.news %}

<section class="stack">
      <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
      <p class="steel-subtitle">{{post.data.description}}</p>
      <div class="steel-flex" style="margin-top: 0.4em;align-items:center;">
      <p><small><time datetime="{{post.date}}">{{post.date | formatPostDate}}</time> </small></p>
       {%- if post.data.tags -%}
        <p class="steel-flex" style="--flex-gap:0.5em;">
          {%- for tag in post.data.tags -%}
            <a class="steel__label" href="tags/{{ tag | slugify }}/">#{{ tag }}</a>
          {%- endfor -%}
        </p>
      {%- endif -%}
      </div>
</section>
{% endfor %}
