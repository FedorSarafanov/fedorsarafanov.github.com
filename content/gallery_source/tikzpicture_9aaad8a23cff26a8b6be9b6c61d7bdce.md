﻿---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_9aaad8a23cff26a8b6be9b6c61d7bdce.tex"><img src="/cook/gallery/tikzpicture_9aaad8a23cff26a8b6be9b6c61d7bdce.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}

\draw (0.2,0.2) -- ++(3,0) -- ++(0,3) -- ++ (-3,0) --cycle;
\draw[fill=white] (0,0) -- ++(3,0) -- ++(0,3) -- ++ (-3,0) --cycle;
\draw[fill=white] (0,3) -- ++(0.2,0.2) -- ++(3,0) -- ++ (-0.2,-0.2) --cycle;
\draw[fill=white] (3,0) -- ++(0.2,0.2) -- ++(0,3) -- ++ (-0.2,-0.2) --cycle;
\draw[force,->] (1.5,1.5)  -- ++(0,0.7) node[above] {$\vec{F}_\text{L}$};% {$\vec{F}_\text{л}$};
\draw[force,->] (1.5,1.5)  -- ++(0,-0.7) node[below] {$\vec{F}_\text{K}$};% {$\vec{F}_\text{л}$};
\draw[force,->] (1.5,1.5) node[black,scale=1.5, fill=white] {$\oplus$} -- ++(0.7,0) node[right] {$\vec{v}$};
\foreach \i in {0.2,0.5,...,3.4} {
	\node[above, yshift=3pt] at (\i,3) {$+$};
}
\foreach \i in {0.2,0.5,...,3} {
	\node[below, yshift=-0pt] at (\i,0) {$-$};
}
%
\draw[angular, <-] (3.5,1) -- node[right,magenta] {$\vec{E}_\perp$} ++ (0,1);
\draw[angular, ->] (0,4) -- node[above,magenta] {$\vec{E}$} ++ (3.2,0);
%
\lineann[1]{90}{3}{$b$};
%
\draw[angular, ->] (0.2,1.5) -- node[above,magenta] {$\vec{j}$} ++(0.7,0) ;
%
\draw (0.5,0.5) node {$\bigotimes$};
\draw (0.6,0.55) node[right] {$\vec{B}$};

\begin{scope}[xshift=5cm]
\draw (0.2,0.2) -- ++(3,0) -- ++(0,3) -- ++ (-3,0) --cycle;
\draw[fill=white] (0,0) -- ++(3,0) -- ++(0,3) -- ++ (-3,0) --cycle;
\draw[fill=white] (0,3) -- ++(0.2,0.2) -- ++(3,0) -- ++ (-0.2,-0.2) --cycle;
\draw[fill=white] (3,0) -- ++(0.2,0.2) -- ++(0,3) -- ++ (-0.2,-0.2) --cycle;
\draw[force,->] (1.5,1.5)  -- ++(0,0.7) node[above] {$\vec{F}_\text{L}$};% {$\vec{F}_\text{л}$};
\draw[force,->] (1.5,1.5)  -- ++(0,-0.7) node[below] {$\vec{F}_\text{K}$};% {$\vec{F}_\text{л}$};
\draw[force,->] (1.5,1.5) node[black,scale=1.5, fill=white] {$\circleddash$} -- ++(-0.7,0) node[left] {$\vec{v}$};
\foreach \i in {0.2,0.5,...,3.4} {
	\node[above, yshift=3pt] at (\i,3) {$-$};
}
\foreach \i in {0.2,0.5,...,3} {
	\node[below, yshift=-0pt] at (\i,0) {$+$};
}
%
\draw[angular, ->] (3.5,1) --  ++ (0,1) node[pos=0.5, right,magenta] {$\vec{E}_\perp$};
\draw[angular, ->] (0,4) -- node[above,magenta] {$\vec{E}$} ++ (3.2,0);
%
% \lineann[1]{90}{3}{$b$};
%
\draw[angular, ->] (2.2,1.5) -- node[above,magenta] {$\vec{j}$} ++(0.7,0) ;
%
\draw (0.5,0.5) node {$\bigotimes$};
\draw (0.6,0.55) node[right] {$\vec{B}$};	
\end{scope}

\end{tikzpicture}\end{document}
```