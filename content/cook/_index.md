---
layout: single
title: PDF->PNG и обратно
toc: true
date:  2018-12-31T21:29:45+03:00
<!-- permalink: /cook/ -->
---
<!-- 
<header>
    <h1><a href="/cook">PDF->PNG и обратно</a></h1>
</header> -->

<!-- {{.TableOfContents}} -->
<!-- * Will be replaced with the ToC, excluding the "Contents" header -->
<!-- {:toc} -->


## Конвертирование нескольких jpg/png/pdf в один файл one.pdf
Конвертация набора изображений (или pdf файлов) в один многостраничный pdf файл
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">convert *.pdf -compress jpeg "../out.pdf"
convert *.png "../out.pdf"</code></pre> 



## Конвертирование многостраничного pdf в несколько jpg/png, 300dpi 
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">convert -density 300 -alpha remove 304.pdf 304.jpg</code></pre>
Или более быстрый вариант 
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">gs -o png/lect-%d.png -sDEVICE=png256 \
 -r300 -dPrinted -dUseCropBox -dTextAlphaBits=4\
 -dGraphicsAlphaBits=4lection-a5.pdf</code></pre>



## Конвертирование \*.tif в \*.jpg 
Конвертация набора tif в набор jpg
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">for name in ls *.tif; do \
convert $name -compress jpeg $name.jpg;\
done</code></pre>



## Пакетное сканирование в png

Определение имени устройства
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">scanimage -L</code></pre> 
Сканирование
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">scanimage \
-d hpaio:/usb/Deskjet_F2100_series?serial=CN79Q4H5GG04TK \
--format=png --resolution 300 --mode Color\
--progress --batch-prompt --batch=out%d.png</code></pre>


 