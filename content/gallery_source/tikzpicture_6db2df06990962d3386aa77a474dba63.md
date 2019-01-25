---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_6db2df06990962d3386aa77a474dba63.tex"><img src="/cook/gallery/tikzpicture_6db2df06990962d3386aa77a474dba63.pdf.jpg" alt=""></a>
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
    },
    interface1/.style={draw=gray!60,
        % The border decoration is a path replacing decorator. 
        % For the interface style we want to draw the original path.
        % The postaction option is therefore used to ensure that the
        % border decoration is drawn *after* the original path.
        postaction={draw=gray!60,decorate,decoration={border,angle=-135,
                    amplitude=0.3cm,segment length=2mm}}},    
    scale=0.75
]
\def\angle{41}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    \draw[force,->] (-3,-3) -- ++(1,0) node[right]{$\vec{v}_0$};
    \contourlength{1mm};

    \draw[thick] (0,0) --  ++(0,-3);
    \draw[thick,->] (0,0) -- node[right] {$\vec{l}$} ++(0,-2.65);

    \draw[thick,->] (0,0) -- node[right, above] {$\vec{r}$} ++(-2.8,-2.69);

    \draw[interface] (-3,0) rectangle ++(6,0.5);
    \draw[line width=0.4mm] (-3,0) -- ++(6,0);
    \draw[fill=magenta] (0,0) circle (3pt) node[above, yshift=3pt] {\contour{white}{$O$}};
    
    \draw[fill=magenta] (0,-3) circle (0.35) node {\contour{white}{$m$}};
    \draw[fill=magenta] (-3,-3) circle (0.35) node {\contour{white}{$m$}};

    \draw[axis,->] (-3,-4) -- ++(6,0) node[right] {$+x$};

    \draw[force,->] (0,0) -- (-1,0) node[left, below]{$\vec{f}$};


\end{tikzpicture}\end{document}
```