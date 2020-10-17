---
layout: page
title: Projects
permalink: /projects/
---

<link rel="stylesheet" href="/style/credit.css"/>
<link rel="stylesheet" href="/style/project.css"/>
{% for p in site.projects %}
{% include project.html project = p %}
{% endfor %}
