﻿---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_70edc45308a125aef04abc79f496e53b.tex"><img src="/cook/gallery/tikzpicture_70edc45308a125aef04abc79f496e53b.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}[
    force/.style={>=latex,draw=blue,fill=blue},
    % axis/.style={densely dashed,gray,font=\small},
    axis/.style={dashed,black!60,font=\small},
    M/.style={rectangle,draw,fill=lightgray,minimum size=0.5cm,thin},
    m2/.style={draw=black!30, rectangle,draw,thin, fill=blue!2, minimum width=0.7cm,minimum height=0.7cm},
    m1/.style={draw=black!30, rectangle,draw,thin, fill=blue!2, minimum width=0.7cm,minimum height=0.7cm},
    plane/.style={draw=black!30, very thick, fill=blue!5, line width=1pt},
    % base/.style={draw=black!70, very thick, fill=blue!4, line width=2pt},
    string/.style={draw=black, thick},
    pulley/.style={thick},
    interface1/.style={draw=gray!60,
        % The border decoration is a path replacing decorator. 
        % For the interface style we want to draw the original path.
        % The postaction option is therefore used to ensure that the
        % border decoration is drawn *after* the original path.
        postaction={draw=gray!60,decorate,decoration={border,angle=-135,
                    amplitude=0.3cm,segment length=2mm}}},
    interface/.style={
        pattern = north east lines,
        draw    = none,
        pattern color=gray!60,          
    },
    plank/.style={
        fill=black!60, 
        draw=black,
        minimum width=3cm,
        inner ysep=0.1cm,
        outer sep=0pt,
        yshift=0.75cm,
        pattern = north east lines,
        pattern color=gray!60, 
    },
    cargo/.style={
        rectangle,
        fill=black!70,              
        inner sep=2.5mm,
    }
]
	\draw [axis, ->] (0,-3) -- (0,5) node[left] {$W_{eff}$};

	\draw [axis, ->] (0,0) -- (6,0) node[anchor=north west] {$r$};


	\draw[domain=0.64:5, samples=200,smooth,variable=\x,magenta, opacity=0.3] plot ({\x/1},{-2/\x});% node[anchor=north west] {$\beta>0$};
	\draw[domain=0.47:5, samples=200,smooth,variable=\x,blue, opacity=0.3] plot ({\x/1},{1/(\x*\x)});

	\draw[black, dash pattern={on 1.4pt off 2pt}] (0,-0.6) -- ++ (6,0);

	\draw[black] (0.1,-0.6) node [left, xshift=-0.5em] {\small$W<0$} -- ++ (-.2,0);

	\draw[black, dash pattern={on 1.4pt off 2pt}] (0,2) -- ++ (6,0);

	\draw[black] (0.1,2) node [left, xshift=-0.5em] {\small$W\geq0$} -- ++ (-.2,0);

	% \draw[dashed, thick, domain=-1.4:1.4, samples=200,smooth,variable=\x,black] plot ({\x},{-\x*\x}) node[anchor=north west] {$\beta<0$};

	\coordinate (A) at (0.61,-0.6);
	\coordinate (B) at (2.72,-0.6);
	\coordinate (C) at (0.366,2);

	\draw[domain=0.3:0.61, samples=200,smooth,variable=\x,black] plot ({\x/1},{((-2/\x+1/(\x*\x))/1});% node[anchor=north west] {$\beta>0$};

	\draw[domain=0.61:2.72, samples=200,smooth,variable=\x,magenta, thick] plot ({\x/1},{((-2/\x+1/(\x*\x))/1});% node[anchor=north west] {$\beta>0$};

	\draw[domain=2.72:5, samples=200,smooth,variable=\x,black] plot ({\x/1},{((-2/\x+1/(\x*\x))/1});% node[anchor=north west] {$\beta>0$};

	\draw[dash pattern={on 1.4pt off 2pt}] (A) -- ++ (0,0.6);
	\draw[dash pattern={on 1.4pt off 2pt}] (B) -- ++ (0,0.6);

	\draw[black] (0.61,0.1) node [above, xshift=0em] {\small$r_{min}$} -- ++ (0, -0.2);	

	\draw[black] (2.72,0.1) node [above, xshift=0em] {\small$r_{max}$} -- ++ (0, -0.2);	

	\draw [fill=magenta] (A) circle (1.5pt);
	\draw [fill=magenta] (B) circle (1.5pt);
	\draw [fill=magenta] (C) circle (1.5pt);

	\node[below] at (4,-0.6) {\tiny финитное движение};
	\node[above] at (4,2) {\tiny инфинитное движение};


\end{tikzpicture}\end{document}
```