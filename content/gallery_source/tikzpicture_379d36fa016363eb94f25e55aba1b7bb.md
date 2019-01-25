---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_379d36fa016363eb94f25e55aba1b7bb.tex"><img src="/cook/gallery/tikzpicture_379d36fa016363eb94f25e55aba1b7bb.pdf.jpg" alt=""></a>
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
        fill=black!10,
        draw=black,              
        inner sep=2.88mm,
    }
]
    % \draw[force,double equal sign distance=2pt,->] (c) -- ++(0,-2) node[below] {$\vec{a}_0$};

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    % \begin{scope}[opacity=0.4]
    % \node[cargo] (II) at (4,0) {} node[yshift=-1.3em] {};
    % \draw[draw=black!30,decoration={aspect=0.3, segment length=3.2mm, amplitude=0.91mm,coil},decorate] (0,0) -- node[above, black, pos=0.2, yshift=1em] {} (II); 

    % \draw[force,->] (II.center) -- ++(1,0) node[above, black] {$\vec{F}$};
    % \draw[force,->] (II.center) -- ++(-1,0) node[above, black] {$\vec{f}_e$};
    % \draw[fill=black] (II.center) circle (1pt);
        
    % \end{scope}

    \node[cargo] (b) at (4,0) {} node[above of=b, yshift=-1.3em] {$m$};

    \draw[axis,->] (0,-1) -- ++(5,0) node[right, black] {$x$};
    \draw[] (4,-1.1) -- ++(0,0.2) node[below, yshift=-5pt, black] {$0$};
    % \draw[] (4,-1.1) -- ++(0,0.2) node[below, yshift=-7pt, black] {$x$};


    \draw[draw=black!30,decoration={aspect=0.3, segment length=1.5mm, amplitude=0.91mm,coil},decorate] (1,0) -- node[above, black, pos=0.5, yshift=1em] {$k$} (b); 

    \draw[] (1,0mm) circle (1pt);

    \draw[force,->] (1,0mm) -- ++(1,0) node[above, black] {$\vec{v}$};
    \draw[force,->] (b.center) -- ++(1,0) node[above, black] {$\vec{f}_e$};
% 

   % \draw[interface] (-0.2,-2) rectangle (0,2);
   \draw[interface] (0,-0.3) rectangle (5,-0.5);
        % \draw[thick] (0,-2) -- (0,2);   
        \draw[thick] (0,-0.3) -- (5,-0.3);   



\end{tikzpicture}\end{document}
```