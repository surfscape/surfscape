---
title: Projects
description: Explore SurfScape projects, services, and other initiatives
hero:
  backdrop: "/public/projects_hero_banner.png"
  actions:
    - label: Projects on Tidepool
      link: "#main-content"
      icon: lucide:shapes
collection: main
order: 1
---

## Active

<div class="steel-grid">

{% for project in projects %}
{{ card(title=project.title, description=project.description, actions=project.actions) }}
{% endfor %}

</div>
