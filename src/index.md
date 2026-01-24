---
hero:
  title: "The SurfScape Project"
  description: "A collective focused on developing ethical software and services with user choice and privacy in mind."
  backdrop: "/public/homepage_hero_banner.png"
  actions:
    - label: Discover
      link: "#main-content"
      icon: lucide:corner-right-down
    - label: Support Us
      link: about/support
      type: minimal
      icon: lucide:heart-handshake
key: Home
---

## Welcome to SurfScape!

We are an umbrella focused on creating software and services that respect user freedom, privacy, and promote ethical development practices.

## Latest News

{% for post in collections.news %}
{% if loop.first %}

{% postCard post %}

{% endif %}
{% endfor %}

## Projects

<div class="auto-grid">

{{ linkCard(title="Celer", description="The advanced toolbox for Windows", url ="/celer",title_image={src:"/public/celer.png"} ) }}

{{ linkCard(title="Nuage", description="The weather app for minimalists", url ="/projects/nuage" ) }}

</div>

## Links & Friends

<div style="display: flex; gap:0.5em;">

{% for item in buttons %}
<a href="{{item.url}}" aria-label="{{item.name}}" title="{{item.name}}" class="old-button"><img src="/public/buttons/{{item.img}}" alt="" aria-hidden="true" eleventy:ignore ></a>
{% endfor %}

</div>
