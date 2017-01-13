<h1>Эффект Холла</h1>
<!--tags:linux-->
<!--d-->   
При помещении проводника с постоянным током в магнитное поле в проводнике возникает поперечная разность потенциалов, называемая "холловским напряжением".

$$\usetikzlibrary{scopes}
\usetikzlibrary{%
     decorations.pathreplacing,%
     decorations.pathmorphing,%
    patterns,%
    calc,%
    scopes,%
    arrows,%
    arrows.meta,%
    arrows.spaced,%
}
\tikzset{force/.style={>=latex,draw=blue,fill=blue}, axis/.style={densely dashed,gray,font=\small}, acceleration/.style={>=open triangle 60,draw=blue,fill=blue}, inforce/.style={force,double equal sign distance=2pt}, interface/.style={pattern = north east lines, draw    = none, pattern color=gray!60, }, cross/.style={cross out, draw=black, minimum size=2*(#1-\pgflinewidth), inner sep=0pt, outer sep=0pt},    cargo/.style={rectangle, fill=black!70, inner sep=2.5mm, },angular/.style={-{Latex[length=3mm, line width=0.4pt,open,magenta, fill=white]}, draw=magenta},}
\begin{tikzpicture}
\draw (0.2,0.2) -- ++(3,0) -- ++(0,3) -- ++ (-3,0) --cycle;
\draw[fill=white] (0,0) -- ++(3,0) -- ++(0,3) -- ++ (-3,0) --cycle;
\draw[fill=white] (0,3) -- ++(0.2,0.2) -- ++(3,0) -- ++ (-0.2,-0.2) --cycle;
\draw[fill=white] (3,0) -- ++(0.2,0.2) -- ++(0,3) -- ++ (-0.2,-0.2) --cycle;
\draw[force, ->] (1.5,1.5) node[black,scale=1.5] {$\oplus$} -- ++(0,0.7) node[above] {$\vec{F}_\text{л}$};
\draw[force, ->] (1.5,1.5) node[black,scale=1.5] {$\oplus$} -- ++(0.7,0) node[right] {$\vec{v}$};
\foreach \i in {0.2,0.5,...,3.4} {
\node[above, yshift=3pt] at (\i,3) {$+$};
}
\foreach \i in {0.2,0.5,...,3} {
\node[below, yshift=-0pt] at (\i,0) {$-$};
}
%
\draw[angular, ->] (3.5,1) -- node[right,magenta] {$\vec{E}_2$} ++ (0,1);
\draw[angular, ->] (0,4) -- node[above,magenta] {$\vec{E}_1$} ++ (3.2,0);
%
\draw[axis, <->] (-0.4,0) -- node[left,black] {$d$} ++ (0,3);
%
\draw[angular, ->] (0.2,1.5) -- node[above,magenta] {$\vec{j}$} ++(0.7,0) ;
%
\draw (0.5,0.5) node {$\bigotimes$};
\draw (0.6,0.55) node[right] {$\vec{B}$};
\end{tikzpicture}$$

<p>&nbsp;</p>
<!--ed-->  

Обозначим плотность тока:

$$j=\frac{I}{S}$$

Распишем ток:

$$I=\frac{dQ}{dt}=\frac{qnvS\,dt}{dt}=qnvS,$$

где $$n$$ - концентрация заряда по объему.

Отсюда

$$v=\frac{I}{qnS}$$

В случае магнитного поля, перпендикулярного проводнику,

$$F_\text{л}=|q[\vec{v}\times\vec{B}]|=qvB$$

Или

$$F_\text{л}=\frac{BI}{qnS}=\frac{jB}{n}$$ 

Отток зарядов прекратится, когда $$F_{E_2}=F_\text{л}$$:

$$\frac{jB}{n}=qE_2=\frac{qU}{d}$$

Отсюда создаваемая разность потенциалов будет

$$U=jBd\frac{1}{qn}.$$

Коэффициент $$R_h=\frac{1}{qn}$$ называют постоянной Холла.
