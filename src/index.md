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

{{ card(title = "Celer", description = "The true toolbox for Windows", actions = [
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
