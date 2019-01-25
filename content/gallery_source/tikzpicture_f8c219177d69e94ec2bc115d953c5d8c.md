---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_f8c219177d69e94ec2bc115d953c5d8c.tex"><img src="/cook/gallery/tikzpicture_f8c219177d69e94ec2bc115d953c5d8c.pdf.jpg" alt=""></a>
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
        draw=magenta!25
    }
]

    \begin{scope}[yshift=0cm]
        \node[cargo] (b) at (0,0) {};
        \node[above, yshift=1em] at (b) {$m_1$};

        \node[cargo] (c) at (2.25,0) {};
        \node[above, yshift=1em] at (c) {$m_2$};

        % \draw[interface] (0,2.5) rectangle ++(-0.25,-5);
        \draw[spring, decoration={segment length=1mm}] (b) -- node[above, yshift=1em, xshift=-0.25em, black] {$\varkappa$} (c); 

        \draw[interface] (-0.25,-0.25) rectangle ++(-0.25,0.7);
        \draw[interface] (-0.5,-0.25) rectangle ++(5,-0.25);
        \draw[thick] (-0.25, -0.25) coordinate (left) -- ++(0,0.7) (left) -- ++(4.75,0);

        % \draw[axis,->] (-0.25,-0.7) -- ++(5,0) node[right] {$+x$};
        \draw[axis, <-] (-0.25,-0.7) node[left] {$+x$} -- ++(5,0) ;

        \draw (2.25,-0.8) -- ++ (0,0.2) node [below, yshift=-0.5em] {$x$};

        \draw (4,-0.8) -- ++ (0,0.2) node [below, yshift=-0.5em] {$0$};

        \draw[force,->] (b.west)++(0,-0.05) -- ++ (0.75,0) node[right, yshift=0.1em, xshift=-3pt] {$\vec{N}$};
        \draw[force,->] (b.east) -- ++(-0.75,0) node[left] {$\vec{f}'_e$};
        \draw[force,->] (c.west) -- ++(0.75,0) node[right] {$\vec{f}_e$};
    \end{scope}

    \begin{scope}[yshift=-2.25cm]
         \node[cargo] (b) at (0,0) {};
        \node[above, yshift=1em] at (b) {$m_1$};

        \node[cargo] (c) at (4,0) {};
        \node[above, yshift=1em] at (c) {$m_2$};

        % \draw[interface] (0,2.5) rectangle ++(-0.25,-5);
        \draw[spring, decoration={segment length=1.7mm}] (b) -- node[above, yshift=1em, xshift=-0.25em, black] {$\varkappa$} (c); 

        \draw[interface] (-0.25,-0.25) rectangle ++(-0.25,0.7);
        \draw[interface] (-0.5,-0.25) rectangle ++(5,-0.25);
        \draw[thick] (-0.25, -0.25) coordinate (left) -- ++(0,0.7) (left) -- ++(4.75,0);

        \draw[axis, <-] (-0.25,-0.7) node[left] {$+x$} -- ++(5,0) ;

        \draw (2.25,-0.8) -- ++ (0,0.2) node [below, yshift=-0.5em] {$x$};

        \draw (4,-0.8) -- ++ (0,0.2) node [below, yshift=-0.5em] {$0$};       
        \draw[force,->] (c.east) -- ++(0.75,0) node[right] {$\vec{v}_{20}$};

    \end{scope}

\end{tikzpicture}\end{document}
```