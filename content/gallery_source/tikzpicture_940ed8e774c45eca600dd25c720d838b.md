---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_940ed8e774c45eca600dd25c720d838b.tex"><img src="/cook/gallery/tikzpicture_940ed8e774c45eca600dd25c720d838b.pdf.jpg" alt=""></a>
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
\matrix[column sep=2cm] {
    \begin{scope}[rotate=14]    
        \draw[force,->] (0,0) coordinate (a) -- 
            node[midway,fill=white!20, opacity=0.9]  
                {$2\vec{v}_c$} 
            (4,0);

        \draw[force,->] (0,0)  -- 
            node[midway,fill=white!20, opacity=0.9]  
                {$\vec{p}_1$} 
            (1,2) coordinate (b);

        \draw[force,->] (1,2)  -- 
            node[midway,fill=white!20, opacity=0.9]  
                {$\vec{p}_2$} 
            (4,0) coordinate (c);       

        \draw pic["$\Theta_1$",draw=magenta,->,angle eccentricity=1.5,angle radius=0.5cm] {angle=a--b--c};                 
    \end{scope}
    &
    \begin{scope}[rotate=14]    
        \draw[force,->] (0,0) coordinate (a) -- 
            node[midway,fill=white!20, opacity=0.9]  
                {$2\vec{v}_c$} 
            (4,0);

        \draw[force,->] (0,0)  -- 
            node[midway,fill=white!20, opacity=0.9]  
                {$\vec{p}_{1\text{н}}$} 
            (3,2) coordinate (b);

        \draw[force,->] (b)  -- 
            node[midway,fill=white!20, opacity=0.9]  
                {$\vec{p}_{2\text{н}}$} 
            (4,0) coordinate (c);       

        \draw pic["$\Theta_2$",draw=magenta,->,angle eccentricity=1.5,angle radius=0.5cm] {angle=a--b--c};                 
    \end{scope}    
    \\
};

\end{tikzpicture}\end{document}
```