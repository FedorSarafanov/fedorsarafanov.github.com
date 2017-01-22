---
layout: post
title: "Лабораторные"
date: 2017-01-22T22:16:12+03:00
permalink: /lab/
---

Здесь размещены сданные лабораторные работы с 1 курса ННГУ, радиофизического факультета. 

* 
{:toc}

Большинство файлов оформлено в формате LaTeX и скомпиливано в PDF.

Для компиляции файлов .tex необходимо наличие установленного дистрибутива LaTeX: TeXLive, tetex или miktex, к примеру. 

{% for lab in site.lab %}
<!-- <header>
    <h1>
        <a style="color: #222" href="{{ lab.url }}">{{ lab.title }}</a>
    </h1>
</header> -->
<div markdown="1">
## [{{ lab.title }}]({{ lab.url }})
</div>
<!-- <h2><a href="{{ lab.url }}">{{ lab.title }}</a></h2> -->
{{ lab.content | split:'<!--ed-->' | first }}
{% endfor %}