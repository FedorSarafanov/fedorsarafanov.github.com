* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Конвертирование нескольких jpg/png/pdf в один файл one.pdf
Конвертация набора изображений (или pdf файлов) в один многостраничный pdf файл
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">convert *.pdf -compress jpeg "../out.pdf"
convert *.png "../out.pdf"</code>
</pre> 

<hr>


## Конвертирование многостраничного pdf в несколько jpg/png, 300dpi 
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">convert -density 300 -alpha remove 304.pdf 304.jpg</code>
</pre>
Или более быстрый вариант 
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">gs -o png/lect-%d.png -sDEVICE=png256 \
 -r300 -dPrinted -dUseCropBox -dTextAlphaBits=4\
 -dGraphicsAlphaBits=4lection-a5.pdf</code>
</pre>
<hr>


## Конвертирование *.tif в *.jpg 
Конвертация набора tif в набор jpg
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">for name in ls *.tif; do \
convert $name -compress jpeg $name.jpg;\
done</code>
</pre>
<hr>


## Пакетное сканирование в png

Определение имени устройства
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">scanimage -L</code>
</pre> 
Сканирование
<pre class="command-line" data-user="sfg" data-host="host" data-output="">
<code class="language-bash">scanimage \
-d hpaio:/usb/Deskjet_F2100_series?serial=CN79Q4H5GG04TK \
--format=png --resolution 300 --mode Color\
--progress --batch-prompt --batch=out%d.png</code>
</pre>
<hr>

 

## Минимальный рабочий пример (MWE) tikz-standalone 

<pre>
<code class="language-latex">\documentclass[tikz]{standalone}

\usepackage[english,russian]{babel}
\usepackage[T2A,T1]{fontenc}
\usepackage[utf8]{inputenc}

\usepackage
{
    tikz,
    pgfplots,
    verbatim,
    amssymb,
}
\usepackage[europeanresistors,americaninductors]{circuitikz}
\usetikzlibrary
{
    arrows,
    patterns,
    angles,
    quotes,
    calc, 
    3d,
    backgrounds, 
    positioning
}
\begin{document}
    \begin{tikzpicture}
        \draw (0,0) -- (0,0);
    \end{tikzpicture} 

    \begin{circuitikz}[]
        \draw (0,0) to [short,o-,R=$2R$] (8,0)
            to (8,-2)
            to [C=$2C$] (8,-4)
            to [short,-o](0,-4);

        \draw[thick] (0,-2) pic[red, -latex]{carc=-150:150:0.5cm} node {$J_1$};
    \end{circuitikz}    
\end{document}</code>
</pre>
<hr>