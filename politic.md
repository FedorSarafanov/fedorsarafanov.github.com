---
layout: post
title: "Политика"
date: "Для интересующихся"
permalink: /politic/
---

* 
{:toc}

Здесь будут приведены некоторые политические, статистические и исторические заметки и выкладки.

{% for politic in site.politic %}

<div markdown="1">
## [{{ politic.title }}]({{ politic.url }})
</div>
<!-- <h2><a href="{{ lab.url }}">{{ lab.title }}</a></h2> -->
 {{ politic.content | split:'<!--ed' | first }}
{% endfor %}