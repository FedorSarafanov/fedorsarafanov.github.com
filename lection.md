---
layout: default
title: Лекции по физике
permalink: /lections/
---

{% for post in site.posts %}
	{% if post.categories contains 'lection' %}
<header>
    <time class="datetime">{{ post.date | date: "%b %e, %Y" }}</time>
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
</header>
 
<article>
{{ post.excerpt }}
<div class="readmore"><a href="{{ post.url }}">Читать далее</a></div>
</article> 
	{% endif %}
{% endfor %}