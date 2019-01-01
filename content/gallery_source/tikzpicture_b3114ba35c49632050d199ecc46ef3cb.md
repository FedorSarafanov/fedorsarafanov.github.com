---
title: "Исходники иллюстрации"
type: "notpost"
---
<a class="imag2" href="/cook/gallery/tikzpicture_b3114ba35c49632050d199ecc46ef3cb.tex"><img src="/cook/gallery/tikzpicture_b3114ba35c49632050d199ecc46ef3cb.pdf.jpg" alt=""></a>
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
    % \draw[force,double equal sign distance=2pt,->] (c) -- ++(0,-2) node[below] {$\vec{a}_0$};
\matrix[column sep=0cm, row sep=0cm] {
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	\coordinate (step) at (0,40mm);
	\path (-4,0) coordinate (A) -- ++(step) coordinate (A') -- (4,0) coordinate (B) -- ++(step) coordinate (B');

	\draw[thick] (A) -- (B);
	\draw[thick] (A') -- (B');

	\foreach \i in {2,4,...,20}{
		\pgfmathsetmacro{\I}{42 + \i*\i/30}%
        \draw[force, ->] (40 mm,\i mm) -- (\I mm,\i mm);
    }
	\foreach \i in {2,4,...,20}{
		\pgfmathsetmacro{\I}{42 + \i*\i/30}%
        \draw[force, ->] (40 mm, 40 mm - \i mm) -- (\I mm, 40 mm -\i mm);
    }

	\foreach \i in {2,4,...,40}{
        \draw[axis, blue, opacity=0.2] (-40 mm, \i mm) -- (40 mm, \i mm);
    }

    \node [] at (60mm,20mm) {$\vec{u}$};

   
    \draw [axis, black, <->] (-45mm,0) -- node[left] {$d$} (-45mm, 40mm);

    \draw [axis, black, <->] (0mm,45mm) -- node[above] {$h$} (40mm, 45mm);

    \draw [axis, ->] (0mm,0mm) -- (0mm, 50mm) node[right] {$\perp$};
    \draw [axis, ->] (0,0) -- (55mm, 0mm) node[right] {$+\parallel$};



    \draw[fill] (0,0) circle (2pt) node[below, yshift=-1em] {лодка};
    \draw[force,->] (0,0) -- ++ (0,1) node[above] {$\vec{v}$};

	\draw[ very thick,domain=0:9,samples=200,smooth,variable=\x,red] plot ({\x/4},{\x^(1/3)});  
	\draw[ very thick,rotate=180, samples=200, xshift=-4cm, yshift=-4cm, domain=0:9,smooth,variable=\x,red] plot ({\x/4},{\x^(1/3)});    
\\
};

\end{tikzpicture}\end{document}</code></pre>