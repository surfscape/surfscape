---
title: Team
description: The people running SurfScape
parent: About
---

<div class="steel-grid">

{%- for person in team -%}
  {{ card(
    title = person.name,
    title_image = person.title_image,
    list = person.list,
    description = person.description,
    labels = person.roles,
    actions = person.actions
  ) }}
{%- endfor -%}

</div>