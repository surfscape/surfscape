---
title: Projects
description: Explore SurfScape projects, services, and other initiatives.
collection: main
order: 0
---

<div class="auto-grid">

{% for project in projects.active %}
{{ linkCard(title=project.title, description=project.description, url=project.url,title_image=project.image ) }}
{% endfor %}

</div>

## Archived

<div class="auto-grid">

{% for project in projects.inactive %}
{{ card(title=project.title, description=project.description, actions=project.actions) }}
{% endfor %}

</div>
