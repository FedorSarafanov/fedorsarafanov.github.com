<h1>Продольные и поперечные деформации. Закон Гука</h1>
<!--tags:mechanic-->
<!--d-->   
По определению, нормальное напряжение

$$\sigma_n=\frac{F_n}{S}$$

При малых деформациях верен закон Гука:

$$\sigma_n=E\varepsilon$$
<!--ed-->  
где $$\varepsilon$$ -- относительная деформация:

$$\varepsilon=\frac{\Delta l}{l}$$

а $$E$$ -- модуль Юнга, имеющий размерность $$[\sigma_n]$$, характеризующий свойства материала.

Выведем классическое "школьное" представление закона Гука:

$$\frac{F_n}{S}=E\frac{\Delta l}{l}$$ 

$$F_n=\frac{ES}{l}\Delta l$$ 

Можно ввести обозначение $$k=\frac{ES}{l}.$$ Тогда получаем известную формулу:

$$F_\text{упр}=-k\Delta l$$ 

## Поперечная деформация

Из жизненного опыта известно, что при растяжении и сжатии материала изменяется не только его продольные размеры, но и поперечные. Введем поперечную деформацию

$$\varepsilon_\perp=\frac{\Delta l_\perp}{l_\perp}$$

Рассмотрим начальный и конечный объемы прямоугольного бруска.

$$V_0=S_0\cdot l_0=l_{\perp0}^2\cdot l$$

$$V=S\cdot l=l_\perp^2\cdot l$$

Из определения относительной деформации можно вывести

$$l=l_0(1+\varepsilon)$$

$$l_\perp=l_{\perp0}(1+\varepsilon_\perp)$$

Тогда 

$$V=l_{\perp0}^2l_0(1+\varepsilon_\perp)^2(1+\varepsilon)$$

$$V=V_0(1+\varepsilon_\perp)^2(1+\varepsilon)$$

Раскроем скобки:

$$V=V_0(1+2\varepsilon_\perp+\varepsilon^2_\perp
+\varepsilon+2\varepsilon_\perp\varepsilon+\varepsilon^2_\perp\varepsilon)$$

Так как $$\varepsilon_\perp,\varepsilon << 1,$$ 

$$V=V_0(1+2\varepsilon_\perp
+\varepsilon)$$

Тогда

$$\Delta V = V-V_0=V_0\cdot(\varepsilon+2\varepsilon_\perp)=
V_0\cdot\varepsilon(1-2\mu)$$

где $$\mu=-\frac{\varepsilon_\perp}{\varepsilon}$$ -- коэффициент Пуассона. Из формулы видно, что коэффициент имеет смысл при $$0\leq\mu\leq\frac{1}2.$$ 

$$\usetikzlibrary{scopes}
\usetikzlibrary{decorations.pathreplacing,%
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

