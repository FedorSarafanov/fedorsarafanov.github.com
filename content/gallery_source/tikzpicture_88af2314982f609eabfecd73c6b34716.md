---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_88af2314982f609eabfecd73c6b34716.tex"><img src="/cook/gallery/tikzpicture_88af2314982f609eabfecd73c6b34716.pdf.jpg" alt=""></a>
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
	\draw (0,2) coordinate (o) circle (2); 
	\draw (o) circle (0.5); 
	\draw[interface] (-4,-0.25) rectangle (4,0);
	\draw[thick] (-4,0) --(4,0);

	\draw (0,1.5) -- ++(3,0);
	\draw[force,->] (0,1.5) ++(3,0) -- ++ (1,0) 
					node[right] {$\vec{u}$};

	\draw (o) -- ++ (45:0.5)
		node[right, yshift=3pt] {$r$};

	\draw (o) -- node[left, xshift=-2pt] {$R$} ++ (135:2);

	\draw[fill] (0,4) coordinate (A) circle (2pt) node[above] {$A$};

	\draw[fill] (0,0) coordinate (0) circle (2pt) node[below, yshift=-6pt] {МЦС};


	\draw[force,->] (o) -- ++(1,0)
					node[right] {$\vec{v}_0$};

	\draw[force,->] (A) -- ++(2,0)
					node[right] {$\vec{v}_A$};

	\draw[axis] (0,0) -- (2,4);


\end{tikzpicture}\end{document}
```