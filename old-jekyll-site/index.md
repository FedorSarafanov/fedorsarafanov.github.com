---
layout: default
---

{% for post in site.posts %} 
{% unless post.ex %}
<header>
	<time class="datetime">{{ post.date | date: "%b %e, %Y" }}</time>
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
</header>

<article>
{{ post.excerpt }}
{% include readmore.md %}
</article> 
{% endunless %}
{% endfor %}