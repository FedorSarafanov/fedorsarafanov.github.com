---
layout: post
title: "Политика, история и прочие изыскания"
date: 2017-01-22T22:15:25+03:00
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