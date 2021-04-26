---
layout: page
title: Resources
permalink: /resources/
---

We provide many different kinds of resources for supporting the work of the _Consortium_ members.

The primary location for our projects is in the [Open Science Framework repository](https://osf.io/). In this repository you can find links to resources we have created such as experimental materials and protcols, datasets, data analysis scripts, and papers.

We maintain [this website](/) and its associated [GitHub repository](https://github.com/{{site.social-media-links.github}}). 

We also have a mailing list, which you can [request to join](mailto:{{site.mailing-list-email}}?Subject=Subscribe) by sending a blank email.

## Outputs

The following is a list of outputs related to the project:

{% assign types = site.outputs | map: "type" %}
{% assign types = types | uniq %}
{% for type in types %}
### {{ type }}

{% assign outputs = site.outputs | where: "type", type %}
{% for output in outputs %}
{{ output.content }}
{% endfor %}
{% endfor %}