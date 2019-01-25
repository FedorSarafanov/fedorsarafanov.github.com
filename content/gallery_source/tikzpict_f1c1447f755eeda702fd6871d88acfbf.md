---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpict_f1c1447f755eeda702fd6871d88acfbf.tex"><img src="/cook/gallery/tikzpict_f1c1447f755eeda702fd6871d88acfbf.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}
	\draw[interface] (-1,0) rectangle ++(4,-0.25);
	\draw[thick] (-1,0) -- ++(4,0);

	\fill[magenta!10, draw=none] (0,0) rectangle ++(2,2.75);
	\draw (0,3.2)--(0,0)--(2,0)--(2,3.2);

	\draw[white] (2,0.5) -- ++(0,0.4);
	\draw[white] (0,1.5) -- ++(0,0.4);

% Draw line annotation
% Input:
%   #1 Line offset (optional)
%   #2 Line angle
%   #3 Line length
%   #5 Line label
% Example:
\begin{scope}[yshift=0.7cm]
	\lineann[-2]{90}{1}{$\Delta h$}
\end{scope}

	\fill[magenta!10] (-0.4,1.5) rectangle ++(-0.4,0.4);
	\fill[magenta!10] (2.8,0.5) rectangle ++(-0.4,0.4);


	\draw[force,->] (-0.6,1.7) -- ++ (-1,0) node[left] {$\vec{v}_1$};
	\draw[force,->] (2.6,0.7) -- ++ (1,0) node[right] {$\vec{v}_2$};

	\draw[force,->] (0,1.7) -- ++ (1,0) node[right, above] {$\vec{F}_{r1}$};
	\draw[force,->] (2,0.7) -- ++ (-1,0) node[left, below] {$\vec{F}_{r2}$};

	\draw[axis] (-1,-0.5) -- ++(4,0) node[right] {$+x$};

\end{tikzpicture}\end{document}
```