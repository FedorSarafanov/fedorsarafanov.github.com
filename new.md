---
layout: def2
title: Заметки про Linux
permalink: /new/
---

{% for post in site.posts %}
	{% if post.categories contains 'linux' %}
	{% endif %}
<header>
	<time class="datetime">{{ post.date | date: "%b %e, %Y" }}</time>
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
</header>

<article>{{ post.excerpt }}</article> 
{% endfor %}