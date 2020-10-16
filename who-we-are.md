---
layout: page
title: Who we are
permalink: /who-we-are/
---

<link rel="stylesheet" href="/style/person.css"/>
<link rel="stylesheet" href="/style/credit.css"/>
<section class="contributors">
{% for p in site.people %}
    {% include person.html person=p %}
{% endfor %}
</section>

<script type="text/javascript" src="/scripts/person.js"></script>