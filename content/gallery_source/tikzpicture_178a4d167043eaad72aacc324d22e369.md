---
title: "Исходники иллюстрации"
type: "notpost"
---
<a class="imag2" href="/cook/gallery/tikzpicture_178a4d167043eaad72aacc324d22e369.tex"><img src="/cook/gallery/tikzpicture_178a4d167043eaad72aacc324d22e369.pdf.jpg" alt=""></a>
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
    % interface/.style={draw=gray!60,
    %     % The border decoration is a path replacing decorator. 
    %     % For the interface style we want to draw the original path.
    %     % The postaction option is therefore used to ensure that the
    %     % border decoration is drawn *after* the original path.
    %     postaction={draw=gray!60,decorate,decoration={border,angle=-135,
    %                 amplitude=0.3cm,segment length=2mm}}},
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

    \node[cargo] (b) at (0,0) {} node[right of=b, xshift=-0.5cm] {$m$};
    \node[plank, below of=b, anchor=north] (plank) {};

    \draw[axis, ->] (-2,2) -- ++(0,-4) node[below] {$x$};
    \draw[black!60] (-2.2,-0.35) node[left, black] {$0$} -- ++(0.4,0) ;

    \node[below] (c) at (plank.south) {};
    \draw[force,->] (b.center) -- ++(0,-1) node[left] {$m\vec{g}$};
    \draw[force,->] (b.south) ++(0.05,0) -- ++(0,1) node[above] {$\vec{N}$};

    \draw[force,->] (b.south) ++(0.05,0) -- ++(0,-1) node[right] {$\vec{P}$};


\end{tikzpicture}\end{document}</code></pre>