﻿---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_c17855bbe947135a730a6ad741a5ec11.tex"><img src="/cook/gallery/tikzpicture_c17855bbe947135a730a6ad741a5ec11.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}
    % \begin{scope}[opacity=0.4]
    % \node[cargo] (I) at (2,0) {} node[above of=I, yshift=-1.3em] {};
    % \draw[draw=black!80,decoration={aspect=0.3, segment length=1mm, amplitude=2mm,coil},decorate] (0,0) -- node[above, black, pos=0.5, yshift=1em] {} (I); 
    % \draw[] (4,-1.1) -- ++(0,0.2) node[below, yshift=-5pt, black] {$l$};
        
    % \end{scope}
   \draw[interface,fill=white!40, draw=black] (0,0.1) rectangle ++(5,-0.2);
   \draw[interface,fill=magenta!30, draw=black] (3,0.1) rectangle ++(0.5,-0.2);

    % \node[cargo] (b) at (4,0) {} node[above of=b, yshift=-1.3em] {$m$};
    % \draw[draw=black!80,decoration={aspect=0.3, segment length=1.5mm, amplitude=2mm,coil},decorate] (0,0) -- node[above, black, pos=0.5, yshift=1em] {$k$} (b); 
    \draw[] (0,-1.1) -- ++(0,0.2) node[below, yshift=-5pt, black] {$0$};
    \draw[] (3,-1.1) -- ++(0,0.2) node[below, yshift=-5pt, black] {$x$};
    \draw[] (3.5,-1.1) -- ++(0,0.2) node[below, yshift=-5pt, black] {\tiny$x+dx$};
    \draw[] (5,-1.1) -- ++(0,0.2) node[below, yshift=-5pt, black] {$\frac{l}2$};


    \draw[axis,->] (0,-1) -- ++(6,0) node[right, black] {$x$};
    \draw[fill=black] (0,0) circle (0.1);

    % \draw[force,->] (3,0) -- ++(-0.5,0) node[above, yshift=0.5em, black] {$\vec{f}_e$};
    \draw[force,->] (3.5,0) -- ++(0.5,0) node[above, yshift=0.5em, xshift=1em, black] {$\vec{F}(x+dx)$};
    \draw[force,->] (3,0) -- ++(-0.5,0) node[above, yshift=0.5em, xshift=-1em, black] {$\vec{F}(x)$};

    \node[left] at (-0.4,-0.4) {$\bigotimes\vec\omega$}; 



\end{tikzpicture}\end{document}
```