---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_47aff02a08362232a2531b440aa23ffe.tex"><img src="/cook/gallery/tikzpicture_47aff02a08362232a2531b440aa23ffe.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}
	 \draw plot[domain=0:350, smooth cycle] (\x:2+rnd*0.5); 
	 \fill[magenta] (0,0) circle (2pt)
	 	node [right] {$C(x_c,y_c,z_c)$};

	\fill[blue] (0,1) rectangle ++(0.2,0.2)
		node[above] {$m_i$};

	\draw[->] (0.2,1.1) -- (1,1);

	\fill[magenta] (1,0.9) rectangle ++(0.2,0.2)
		node[above] {$dm$};


\end{tikzpicture}\end{document}
```