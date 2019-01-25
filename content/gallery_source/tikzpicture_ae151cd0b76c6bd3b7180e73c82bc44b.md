---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_ae151cd0b76c6bd3b7180e73c82bc44b.tex"><img src="/cook/gallery/tikzpicture_ae151cd0b76c6bd3b7180e73c82bc44b.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}
	\def\angle{50}
	% \draw (0,2) coordinate (o) circle (2); 
	% \draw (o) circle (0.5); 
	% \draw (0,0) -- (5,6);
	\draw[interface] (-6,6.25) rectangle (6,6);
	\draw[thick] (-6,6) --(6,6);

	\coordinate (cc) at (-6,0);
	\draw[fill=white] (cc) circle (2pt);
	\draw[axis, ->] (cc) -- ++ (\angle:7) node[above,black] {$+n$};

	\draw[axis, ->] (0,0) -- + (0,7) node[above,black] {$+x$};
	\draw[black, dotted] (0,0) coordinate (0) arc (0:90:6);

	\draw[fill,black] (0) ++ (0,4) coordinate (m1) circle (3pt);
	\draw[fill,gray] (0) circle (3pt);



	\draw[fill,black] (cc) ++ (\angle:6) coordinate (m2) circle (3pt);

	\draw[force,->] (m1) -- ++ (0,1) node[right] {$\vec{v}$};
	\draw[force,->] (m1) -- ++ (0,-1) node[right] {$\vec{f}_R$};

	\draw[force,->] (m2) -- ++ (90+\angle:1) node[above] {$\vec{v}$};
	\draw[force,->] (m2) -- ++ (180+\angle:1) node[below] {$\vec{f}_R$};

	\draw[axis, ->] (m2) -- ++ (\angle+90:3.5) node[above,black] {$+\tau$};
	\draw (-5,5) node[scale=1.5] {II};
	\draw (5,5) node[scale=1.5] {I};

	\draw[axis, <->] (4,0) -- node[right, black] {$R$} (4,6);
	\draw[axis] (-6,0) --(6,0);



\end{tikzpicture}\end{document}
```