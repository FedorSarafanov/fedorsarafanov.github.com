﻿---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_01ac14d940c4cf18d44265c36b2f97ef.tex"><img src="/cook/gallery/tikzpicture_01ac14d940c4cf18d44265c36b2f97ef.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}[
    force/.style={>=latex,draw=blue,fill=blue},
    % axis/.style={densely dashed,gray,font=\small},
    axis/.style={densely dashed,black!60,font=\small},
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
	\draw [axis, ->] (0,0) -- (0,3) node[left] {$y$};
	\draw [force, ->] (0,0) -- (0,2) node[left] {$\vec{v}_y=2\beta{t}\vec{j}$};

	\draw [axis, ->] (0,0) -- (3,0) node[above] {$x$};
	\draw [force, ->] (0,0) -- (2,0) node[below] {$\vec{v}_x=\alpha\vec{i}$};

	\draw [force, ->] (0,0) -- (2,2) node[anchor=west] {$\vec{v}$};

	\draw [axis] (2,0) --(2,2);
	\draw [axis] (0,2) --(2,2);

	\draw[->] (0,0) ++(45:1) arc (45:90:1);
	\draw (0,0) ++(75:1.18) node[anchor=west] {$\phi$};


\end{tikzpicture}\end{document}
```