---
layout: base
hero:
  title: "Developing ethical solutions"
  backdrop: "/public/homepage_hero_banner.png"
  actions:
    - label: Let's Go!
      link: "#main-content"
      icon: lucide:corner-right-down
    - label: Support SurfScape
      link: about/support
      type: minimal
      icon: lucide:heart-handshake
key: Home
collection: main
order: 0
---

## Welcome to SurfScape!

We are an umbrella focused on creating software and services that respect user freedom, privacy, and promote ethical development practices.

## Projects

<div class="steel-grid">

{{ card(title = "Celer", description = "The advanced toolbox for Windows", actions = [
    {label: "Learn More", url: "/projects/celer", type: "primary"},
    {label: "Celer on Tidepool", url: "https://surfscape.github.io/tidepool/projects/celer"}
]) }}

{{ card(title = "Nuage", description = "The weather app for minimalists", actions = [
    {label: "Learn More", url: "/projects/nuage", type: "primary"},
    {label: "Nuage on Tidepool", url: "https://surfscape.github.io/tidepool/projects/nuage"}
]) }}

{{ card(title = "Collectio", label = "New", description = "Offline web app to save and organize links with tags and collections", actions = [
    {label: "Collectio on Tidepool", url: "https://surfscape.github.io/tidepool/projects/collectio", type: "primary"}
]) }}

{{ card(stub = true, title = "And more!", actions = [
  {label: "All Projects", url:"/projects/"},
  {label: "Projects on Tidepool", url:"https://surfscape.github.io/tidepool/projects/overview"},
  {label: "Community Showcase", url:"/community/showcase"}
]) }}

</div>

## Links & Friends

<div class="steel-flex" style="--flex-gap:0.5em">

{% for item in buttons %}
<a href="{{item.url}}" aria-label="{{item.name}}" title="{{item.name}}" class="old-button"><img src="/public/buttons/{{item.img}}" alt="" aria-hidden="true" eleventy:ignore ></a>
{% endfor %}

</div>
