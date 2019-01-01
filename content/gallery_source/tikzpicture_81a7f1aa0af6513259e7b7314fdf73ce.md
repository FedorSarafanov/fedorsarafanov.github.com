---
title: "Исходники иллюстрации"
type: "notpost"
---
<a class="imag2" href="/cook/gallery/tikzpicture_81a7f1aa0af6513259e7b7314fdf73ce.tex"><img src="/cook/gallery/tikzpicture_81a7f1aa0af6513259e7b7314fdf73ce.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
<pre><code class="language-latex">\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}[
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
    % \draw[force,double equal sign distance=2pt,->] (c) -- ++(0,-2) node[below] {$\vec{a}_0$};
\matrix[column sep=0cm, row sep=0cm] {
\def\angle{41}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	\draw[thick, interface1] (-1,0) -- (8,0);
	\draw[thick,] (5,0) arc (-90:270:1.5cm);
	\draw[thick] (0,5) coordinate (a) .. controls (3,5) and (2.6,0) .. (5,0);
	\draw[axis,<->] (0,0) -- node[left,black] {$h$} (a);
	\draw[axis,<->] (7,0) -- node[right,black] {$R$} ++(0,1.5);

    \draw[axis] (0,1.5) -- (7,1.5);

    \draw[axis,fill] (5,1.5) -- ++(\angle:1.5) coordinate (m) circle(3pt);

    \draw[fill,axis] (0,5)  circle(3pt);

    \draw[fill=white] (5,3)  circle(2pt) node[above] {$b$};


    \draw[axis] (5,1.5) -- ++(\angle:1.5);
    \path[draw,->] (5,1.5) ++ (0.7,0) arc(0:\angle:0.7);

    \path[] (5,1.5) -- ++ (30:0.5) node[right, xshift=5pt, scale=1] {$\phi$};

   \draw[force,->] (m) -- ++(\angle:0.7) node[below] {$\vec{P}$};
    \draw[force,->] (m) -- ++(\angle:-0.7) node[above, yshift=5pt] {$\vec{N}$};
    \draw[force,->] (m) -- ++(90:-1.4) node[below, xshift=-5pt] {$m\vec{g}$};

\\
};

\end{tikzpicture}\end{document}</code></pre>