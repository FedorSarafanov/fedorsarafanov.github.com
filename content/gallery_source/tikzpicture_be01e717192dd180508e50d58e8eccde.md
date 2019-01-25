---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_be01e717192dd180508e50d58e8eccde.tex"><img src="/cook/gallery/tikzpicture_be01e717192dd180508e50d58e8eccde.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}
    \xdef\darkness{0}
	\xdef\opa{0.2}

    \xdef\SIZE{6}
	\xdef\setka{0}

    \input{setka}

    \draw[
        domain=0:5*pi,
        smooth,thick,
        variable=\x,
        samples=100,
        black, 
        dashed,
    ] plot ({\x/pi},{sin(\x r)/2}); 

    \draw[
        domain=0:5*pi,
        smooth,thick,
        variable=\x,
        samples=100,
        magenta, 
        % yshift=3cm
    ] plot ({\x/pi},{sin(\x r)}); 

    \begin{scope}[xshift=0.5cm, yshift=1cm]
        \lineann[0.5]{0}{2}{$\lambda$}{white}
    \end{scope}        

\end{tikzpicture}\end{document}
```