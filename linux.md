---
layout: default
title: Заметки про Linux
permalink: /linux/
---

{% for post in site.posts %}
	{% if post.categories contains 'linux' %}
<header>
	<time class="datetime">{{ post.date | date: "%b %e, %Y" }}</time>
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
</header>

<article>{{ post.excerpt }}</article> 
	{% endif %}
{% endfor %}