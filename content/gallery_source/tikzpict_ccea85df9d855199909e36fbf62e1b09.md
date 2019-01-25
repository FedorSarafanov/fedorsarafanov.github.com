---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpict_ccea85df9d855199909e36fbf62e1b09.tex"><img src="/cook/gallery/tikzpict_ccea85df9d855199909e36fbf62e1b09.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}

	\fill[magenta!10, draw=none] (0,0) rectangle ++(2,3);
	\fill[magenta!10, draw=none] (0.8,0) rectangle ++(0.4,-0.5);
	\draw (0,3.2)--(0,0)--(2,0)--(2,3.2);

	\draw[magenta!10] (0.8,0) -- ++(0.4,0);

	\draw[magenta] (1,0.3) circle (2pt) node[above, yshift=0.5em] {$A$};
	\draw[magenta] (1,-0.3) circle (2pt) node[below, yshift=-0.5em] {$B$};

	\draw[magenta,->] (1.4,0.3) -- ++(0,-0.5) node[below] {$\vec{v}$};
	\draw[magenta,->] (0.6,-0.3) -- ++(0,-1) node[below] {$\vec{v}_2$};
% Draw line annotation
% Input:
%   #1 Line offset (optional)
%   #2 Line angle
%   #3 Line length
%   #5 Line label
% Example:
	\lineann[0.5]{90}{3}{$h(t)$}


	\draw[axis,->] (-1,-0.5) -- ++(0,4) node[above] {$+h$};

\end{tikzpicture}\end{document}
```