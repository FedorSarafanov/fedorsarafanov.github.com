﻿---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpict_a080d120cb4001731aa3edce487d3ebb.tex"><img src="/cook/gallery/tikzpict_a080d120cb4001731aa3edce487d3ebb.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}
    \contourlength{0.5mm};

	% \draw[very thick] (0,-1.5) -- (0,1.5);
 %    \draw[magenta] (0,0) node[] {\contour{white}{$\bigodot$}} node[right, xshift=.5em] {$O$};

 %    \draw[magenta] (0,1) node[] {\contour{white}{$\times$}};

	% % \draw[interface] (-2,0) rectangle (2,-0.25);
	% % \draw[thick] (-2,0) -- (2,0);

	% % \draw (0,1) circle (1);



 % %    \draw[fill=magenta] (0,0) circle (2pt) node[above, yshift=3pt] {\contour{white}{$B$}};
 %    \lineann[1.5]{90}{1}{$x$}
 % 	\begin{scope}[yshift=-1.5cm] 		
 %    \lineann[1]{90}{3}{$l$}
 % 	\end{scope}

    \draw[fill=magenta] (0,0) circle (5pt) node[above, yshift=0.5em] {$M$};
    % \draw[->] (0,0) -- ++ (-0.5,0) node[left] {$\vec{v}$} ;

    \draw[fill=magenta] (2,0) circle (2pt) node[above, yshift=0.5em] {$m$};
    \draw[->] (2,0) -- ++ (-0.5,0) node[left] {$\vec{v}$} ;

    \draw[axis] (3,-0.5) -- (-1,-0.5) node[left] {$+x$};
    % \draw (-2.5,0) node[blue] {$\bigotimes$} node[right, xshift=.5em] {$\vec{g}$};

\end{tikzpicture}\end{document}
```