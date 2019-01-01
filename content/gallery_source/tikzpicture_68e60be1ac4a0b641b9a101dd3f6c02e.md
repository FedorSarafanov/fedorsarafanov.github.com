---
title: "Исходники иллюстрации"
type: "notpost"
---
<a class="imag2" href="/cook/gallery/tikzpicture_68e60be1ac4a0b641b9a101dd3f6c02e.tex"><img src="/cook/gallery/tikzpicture_68e60be1ac4a0b641b9a101dd3f6c02e.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
<pre><code class="language-latex">\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}[scale=1.25]

	\draw[black,->, thick] (0,0) -- (1,1) node[above, xshift=1em] {$\vec{E}$};
	\draw[dashed, black!50] (1,0) -- (1,1);
	\draw[dashed, black!50] (0,1) -- (1,1);

	\draw[black,->, thin] (0,0) -- (1.5,0) node [right] {$E_x$};
	\draw[black,->, thin] (0,0) -- (0,1.5) node [above] {$E_y$};

	\draw[black,-,thick] (0,0) -- ++(1,0);
	\draw[black,-,thick] (0,0) -- ++(0,1);

	\draw[black,thick] (1,-.1) node[below] {${E}_1$} -- ++(0,0.2);
	\draw[black, thick] (-.1,1) node[left] {${E}_2$} -- ++(0.2,0);

	\begin{scope}[xshift=2.5cm]
		\draw[->] (0,0) -- (4,0) node[right] {$z$};
		\draw[->] (0,0) -- (0,1.5) node[above] {$E_y$};
		\draw[smooth, thick, variable=\x, samples at={0,0.01,...,3.14}]
		plot (\x, {sin(2*\x r)});


		\draw[blue,->, very thick] (0,0) -- (2,0) node[above] {$\vec{k}$};

		\foreach \x in{0.2,0.4,...,1.4}{
				\draw[-latex] (\x,0) -- (\x, {sin(2.0*\x r)});
			}

		\foreach \x in{1.8,2,...,3.14}{
				\draw[-latex] (\x,0) -- (\x, {sin(2.0*\x r)});
			}

		\path[] (3.14/4,0) -- (3.14/4, {sin(2.0*3.14/4 r)}) node[above] {$\vec{E}$};
		\draw (3,1.2) node[above] {$k=\frac{2\pi}{\lambda}$};
		\draw (3,0.8) node[above] {$\omega=2\pi\nu$};
		\draw (3,0.2) node[above] {$\delta=\varphi_2-\varphi_1$};

		\lineann[-1.5]{0}{3.14}{$\lambda$}
	\end{scope}

\end{tikzpicture}\end{document}</code></pre>