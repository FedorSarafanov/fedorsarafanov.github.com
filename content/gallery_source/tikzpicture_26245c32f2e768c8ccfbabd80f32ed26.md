﻿---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_26245c32f2e768c8ccfbabd80f32ed26.tex"><img src="/cook/gallery/tikzpicture_26245c32f2e768c8ccfbabd80f32ed26.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}

		\xdef\R{10cm}

		\path (0,0) coordinate (1)  pic{carc=-30:-150:\R} coordinate (2); 

		\foreach \angle in {-30,-40,...,-90}{

			\pgfmathsetmacro\ANGLE{90+\angle}

			\draw (0,0) ++ (\angle:\R) -- ++ (\angle:0.4)
				node[below, scale=1.75, rotate={\angle+90}] {\pgfmathprintnumber[fixed, precision=0]{\ANGLE}};
		}

		\foreach \angle in {-90,-100,...,-150}{
			\pgfmathsetmacro\ANGLE{-(90+\angle)}

			\draw (0,0) ++ (\angle:\R) -- ++ (\angle:0.4)
				node[below, scale=1.75, rotate={\angle+90}] {\pgfmathprintnumber[fixed, precision=0]{\ANGLE}};
		}		

		\foreach \angle in {-35,-45,...,-145}{
			\draw (0,0) ++ (\angle:\R) -- ++ (\angle:0.2);
		}		


		% \draw[blue] (0,0) circle (1cm);
		% \foreach \angle in {0,10,...,358}{
		% 	\draw (0,0) -- ++ (\angle:1cm);
		% }				

		% \fill[black!50] (0,0) circle (0.5cm);


		% \draw[black!50, line width=0.2cm] (0,0.3cm) -- ++(0,1cm);
		% \draw[black!50, line width=0.2cm] (0,-0.3cm) -- ++(0,-1cm);

		% \draw[black!50, line width=0.2cm] (0,0) circle (1.3cm);

		% \fill[magenta] (0,-1.3cm) -- ++ (0.2cm,-0.3cm) -- ++ (-0.4cm,-0cm) -- cycle;

		% \fill[magenta, rotate=180] (0,-1.3cm) -- ++ (0.2cm,-0.3cm) -- ++ (-0.4cm,-0cm) -- cycle;



		% ВНЕШНЕЕ КОЛЬЦО
		\fill[black!20] (0,0) circle (4cm);

		\draw[black!60,line width=4mm] (-4cm,0) -- (-4.5cm,0);
		\draw[black!60,line width=4mm] (4cm,0) -- (4.5cm,0);		
			\begin{scope}
				\clip (2.5,-1) rectangle (4.1,1);
				\fill[black!40] (0,0) circle (4.1cm);
			\end{scope}
			\begin{scope}
				\clip (-2.5,-1) rectangle (-4.1,1);
				\fill[black!40] (0,0) circle (4.1cm);
			\end{scope}		

			\begin{scope}
				\clip (-0.5,2.5) rectangle (0.5,4.5);
				\fill[black!40] (0,0) circle (4.5cm);
			\end{scope}
			\begin{scope}
				\clip (-0.5,-2.5) rectangle (0.5,-4.5);
				\fill[black!40] (0,0) circle (4.5cm);
			\end{scope}					
		\fill[white] (0,0) circle (3cm);

		%ПОДШИПНИКИ ВНУТРЕННЕГО КОЛЬЦА
		\draw[dash,black!60,line width=4mm] (0,-1.5cm) -- (0,-3cm);
		\draw[dash,black!60,line width=4mm] (0,1.5cm) -- (0,3cm);

		% ВНУТРЕННЕЕ КОЛЬЦО
		\fill[black!20] (0,0) circle (3cm-5mm);
		\fill[black!30] (0,0) circle (2cm-5mm);

		% СТАТОР
		\fill[black!40] (0,0) circle (2cm-1.25cm);

		% ОСЬ Y
		\draw[dash pattern=on 2mm off 1mm,magenta!60,line width=2mm] (0,-3cm) -- (0,3cm);
		\draw[axis,->,dash pattern=on 2mm off 1mm,magenta!60,line width=2mm] (0,4.5cm) -- ++ (0,2) node[above, scale=2.5] {$+y$};

		% ОСь X
		\fill[white] (0,0) circle (0.5cm) node[magenta, scale=2] {$\bigodot$};
 		\contourlength{1mm};

		\node[right, scale=2.5, magenta, xshift=0.5em]  at (0,0) {\contour{white}{$+x$}};		

		% ОСЬ Z
		\draw[dash pattern=on 2mm off 1mm,magenta!60,line width=2mm] (-4.5cm,0) -- (-3cm,0);		
		\draw[dash pattern=on 2mm off 1mm,magenta!60,line width=2mm] (4.5cm,0) -- (3cm,0);

		\draw[axis,->,dash pattern=on 2mm off 1mm,magenta!60,line width=2mm] (-4.5cm,0) -- ++ (-2,0) node[left, scale=2.5] {$+z$};



		% \fill[magenta] (1.7cm,0) -- ++ (0.3cm,0.2cm) -- ++ (-0cm,-0.4cm) -- cycle;

		% \fill[magenta, rotate=180] (1.7cm,0) -- ++ (0.3cm,0.2cm) -- ++ (-0cm,-0.4cm) -- cycle;

		\draw (0,0) pic[->, red, line width=3pt, ]{carc=120:200:2cm};


		\begin{scope}
			\draw[] 	(-4.5,-1.5) 	-- 
						(-4.5,1.5) 		--
					++	(-2.5,0) 		--
					++	(-3.5,-2) 		--
					++	(0,-1)			--
					++	(0.25,0)		--
						(-10.25,-10.5)	--
					++ 	(3,-3)			--
						(0,-13.5)		;
			\draw[]		(-4.5,-1.5)		--
					++	(-1,0)			--
					++	(-3.16,-2)		--
					++	(0,-1.5);
			\draw[]		(-5.5,-1.5)		--
					++	(-5,0);			
		\end{scope}
		\begin{scope}[xscale=-1]
			\draw[] 	(-4.5,-1.5) 	-- 
						(-4.5,1.5) 		--
					++	(-2.5,0) 		--
					++	(-3.5,-2) 		--
					++	(0,-1)			--
					++	(0.25,0)		--
						(-10.25,-10.5)	--
					++ 	(3,-3)			--
						(0,-13.5)		;
			\draw[]		(-4.5,-1.5)		--
					++	(-1,0)			--
					++	(-3.16,-2)		--
					++	(0,-1.5);
			\draw[]		(-5.5,-1.5)		--
					++	(-5,0);			
		\end{scope}

		\draw (-7.25,-14) rectangle ++ (14.5,-1);
		\draw (-7.25,-13.5) rectangle ++ (14.5,-0.5);

		\draw (-7.25,-15) rectangle ++(2,-2);
		\draw[xscale=-1] (-7.25,-15) rectangle ++(2,-2);


\end{tikzpicture}\end{document}
```