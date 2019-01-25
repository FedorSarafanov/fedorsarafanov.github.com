---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_19a31db1cc47b0ccf09e943da85b684f.tex"><img src="/cook/gallery/tikzpicture_19a31db1cc47b0ccf09e943da85b684f.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}
		\draw[black!50] (0,0) circle (2cm);
		\draw[black,fill=black] (0,0) circle (1pt);

		\draw[magenta!70, dashed] (0,0) (180:2.5) -- (0:2.5);
		\draw[magenta!70, dashed] (0,0) (90:2.5) -- (-90:2.5);
		\draw[blue, ->, >=latex] (0,0) (90:2.5) -- node[left] {$\vec\omega$} (90:3);
		 \contourlength{1.5mm};
		\draw[magenta!70, dashed] (-90:1) node[rotate=90] {\contour{white}{Ось $z$}};
		\draw[->, >=latex] (0,0) -- node[midway,fill=white!20, opacity=0.9] {$\vec{r}$} (45:2) coordinate (A);
		\draw[->, >=latex] (0,1.414) -- node[midway,fill=white!20, opacity=0.9] {$\vec{r}_\perp$} (A);
		\draw[->, >=latex] (0,0) -- node[midway,fill=white!20, opacity=0.9] {$\vec{r}_\parallel$} (0,1.414);

		\draw[magenta,->, >=latex] (A) -- ++(45:0.7) node[right, above] {$\vec{e}_r$};
		\draw[magenta,->, >=latex] (A) -- ++(135:0.7) node[right, above] {$\vec{e}_\tau$};
	
\end{tikzpicture}\end{document}
```