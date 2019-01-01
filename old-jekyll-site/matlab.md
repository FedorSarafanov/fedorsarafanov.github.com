---
layout: default
title: "Полезное - matlab"
permalink: /matlab/
--- 

{% for post in site.posts %}
	{% if post.categories contains 'matlab' %}
<header>
    <time class="datetime">{{ post.date | date: "%b %e, %Y" }}</time>
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
</header>
 
<article>
{{ post.excerpt }}
{% include readmore.md %} 
</article> 
	{% endif %}
{% endfor %}