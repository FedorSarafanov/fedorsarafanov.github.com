---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_74bcdd4ddb7b853839ee34f3fdd760a4.tex"><img src="/cook/gallery/tikzpicture_74bcdd4ddb7b853839ee34f3fdd760a4.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}[
    force/.style={>=latex,draw=blue,fill=blue},
    % axis/.style={densely dashed,gray,font=\small},
    axis/.style={densely dashed,black!60,font=\small},
    interface/.style={
        pattern = north east lines,
        draw    = none,
        pattern color=gray!60,          
    },
    cargo/.style={
        rectangle,
        fill=magenta!40,
        draw=black!50,
        inner sep=2.5mm,
    },
    spring/.style={
        decoration={
            aspect=0.3, 
            segment length=.8mm, 
            amplitude=2mm,
            coil},
        decorate,
        draw=magenta!70
    }
]

    \begin{scope}[xscale=-1]
        \node[] (b) at (-0.35,0) {};
        \node[] (d) at (7,0) {};
        % \node[above, yshift=1em] at (b) {$m_1$};

        \node[] (c) at (4,0) {};
        \node[above, yshift=1em] at (c) {$M$};
        \node[above, yshift=1em] at (d) {$m$};

        % \draw[interface] (0,2.5) rectangle ++(-0.25,-5);
        \draw[spring, decoration={segment length=1.7mm}] (b) -- node[above, yshift=1em, xshift=-0.25em, black] {$k$} (c); 

        \draw[interface] (-0.25,-0.25) rectangle ++(-0.25,0.7);
        \draw[interface] (-0.5,-0.25) rectangle ++(8,-0.25);
        \draw[thick] (-0.25, -0.25) coordinate (left) -- ++(0,0.7) (left) -- ++(7.75,0);

        \draw[axis, <-] (-0.25,-0.7) node[right] {$+x$} -- ++(7.5,0) ;

        \draw (2.25,-0.8) -- ++ (0,0.2) node [below, yshift=-0.5em] {$x$};

        \draw (4,-0.8) -- ++ (0,0.2) node [below, yshift=-0.5em] {$0$};       
        \draw[force,->] (d.west) -- ++(-1,0) node[right] {$\vec{v}_{m}$};

        \draw[fill=magenta] (c) circle (0.25);
        \draw[fill=magenta] (d) circle (0.25);
    \end{scope}

\end{tikzpicture}\end{document}
```