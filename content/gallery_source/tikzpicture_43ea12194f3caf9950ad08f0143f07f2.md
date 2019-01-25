---
title: "Исходники иллюстрации"
type: "notpost"
date:  2019-01-01T13:04:49+03:00
---
<a class="imag2" href="/cook/gallery/tikzpicture_43ea12194f3caf9950ad08f0143f07f2.tex"><img src="/cook/gallery/tikzpicture_43ea12194f3caf9950ad08f0143f07f2.pdf.jpg" alt=""></a>
<a href="/cook/gallery/pre">pre.tex</a>
```tex
\documentclass[tikz]{standalone}\input{pre.tex}\begin{document}\begin{tikzpicture}
    \begin{scope}[xscale=1, rotate=-30]
        \draw (0.5,0) circle (0.28);

        \draw[acceleration,->] (1,3) -- node[above] {$\vec{b}$} ++ (1,0);
        \draw[axis,->] (-1,2.7) --  ++ (3,0) node[right] {$+x$}; 
        \draw[axis,<-] (-1,4) node[above] {$+y$} --  ++ (0,-3.55) ; 

        \draw (2.5,0) circle (0.28);
        \draw[fill=white] (0,0) rectangle (3,0.3);
        \draw[line width=2pt] (2.5,0.3) -- ++(0,2) -- ++(-1,0) ++(0,1pt) coordinate (o);

        \draw[fill=black] (o) -- ++(-120:1.5cm) coordinate (b) circle (2pt); 

        \draw[axis] (o) -- ++ (0,-3);

        \draw[interface, pattern = north west lines,] (-1,-0.3) rectangle ++(5,-0.3);
        % \draw[interface, pattern=vertical lines] (-1,-0.3) -- (4,-0.3) --  ++(-150:0.6) -- (-1,-0.6) -- cycle;
        \draw[thick] (-1,-0.3) -- ++(5,0);

        \draw[force,->] (b) -- ++(60:1) node[above] {$\vec{T}$};


    \end{scope}
           \draw[solid,shorten >=0.5pt, ] (o) ++ (-90:1)
                arc(-90:-120:1);
            \node at ($(o) + (-104:1.2)$) {$\phi$};

           \draw[solid,shorten >=0.5pt, ] (o) ++ (-120:0.7)
                arc(-120:-150:0.7);
            \node at ($(o) + (-135:1)$) {$\alpha$};

        \draw[axis] (o) -- ++ (0,-3.6);

        \draw[force,->] (b)  -- node[left, pos=0.4] {$m\vec{g}$} ++(0,-1);
        % \draw[fill=white, draw=white] (-0.7,-0.78) rectangle ++(4.31,-0.3);
        \draw[interface] (-1,-2.27) rectangle ++(4.31,-0.3);
        \draw[thick] (-1,-2.27) -- ++(4.31,0);
        \draw[acceleration,->] (-1,3.55) -- node[left] {$\vec{g}$} ++(0,-1);
    
\end{tikzpicture}\end{document}
```