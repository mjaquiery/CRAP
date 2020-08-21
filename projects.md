---
layout: page
title: Projects
permalink: /projects/
---

{% for p in site.projects %}
## {{p.name}}  
{{p.content}}
{% endfor %} 