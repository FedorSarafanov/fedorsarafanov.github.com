---
title: "Исходники иллюстрации"
type: "notpost"
---
<a class="imag2" href="/cook/gallery/tikzpicture_9e2045409fc7306003a5fa5aeb9d2eee.tex"><img src="/cook/gallery/tikzpicture_9e2045409fc7306003a5fa5aeb9d2eee.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
<pre><code class="language-latex">\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}[
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

        \draw[force,->] (0,0) coordinate (a) -- 
            node[midway,fill=white!20, opacity=0.9]  
                {$(m_1+m_2)\vec{v}_c$} 
            (4,0);

        \draw[force,->] (0,0)  -- 
            node[midway,fill=white!20, opacity=0.9]  
                {$\pIn$} 
            (2,2) coordinate (b);

        \draw[force,->] (b)  -- 
            node[midway,fill=white!20, opacity=0.9]  
                {$\pIIn$} 
            (4,0) coordinate (c);       

        \draw pic["$\Phi$",draw=magenta,->,angle eccentricity=1.5,angle radius=0.5cm] {angle=a--b--c};                 


\end{tikzpicture}\end{document}</code></pre>