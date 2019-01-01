---
title: "Исходники иллюстрации"
type: "notpost"
---
<a class="imag2" href="/cook/gallery/tikzpict_aadcbb54750e6fbda6d7878c76dcc685.tex"><img src="/cook/gallery/tikzpict_aadcbb54750e6fbda6d7878c76dcc685.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
<pre><code class="language-latex">\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}
	\draw[fill=black!30] (0,0) rectangle (4,2);
	\draw[fill=white] (0.25,0.25) rectangle (3.75,1.75);
	\draw[pattern=north west lines, pattern color = blue] (1.9,0.25) rectangle ++(0.25,1.5);

	\draw (1,1) node {$1$};
	\draw (3,1) node {$2$};

	\draw[force,->] (2.15,1) -- ++ (0.5,0);

\end{tikzpicture}\end{document}</code></pre>