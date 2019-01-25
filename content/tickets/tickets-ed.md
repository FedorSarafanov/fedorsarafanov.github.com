---
title: Теоретический минимум по электродинамике
date:  2019-01-04T15:56:12+03:00
toc: true
type: notpost
---
<!-- aliases:
   - /tickets/2018/12/27/tickets-quantum-course3sem1.html -->

<div style='display:none'>
$\gdef\rot{\operatorname{rot}} \gdef\div{\operatorname{div}}$
$\gdef\E{\vec{E}}$
$\gdef\D{\vec{D}}$
$\gdef\H{\vec{H}}$
$\gdef\B{\vec{B}}$
$\gdef\j{\vec{j}}$
$\gdef\n{\vec{n}}$
</div>
<!--more-->

## Уравнения Максвелла в дифференциальной и интегральной формах

$$
\begin{cases}
	\rot \vec{E} = - \frac { 1 } { c } \frac { \partial \vec { B } } { \partial t } \cr
	\rot \vec{H}=\frac { 1 } { c } \frac { \partial \vec { D } } { \partial t } + \frac { 4 \pi } { c } \vec { j } \cr
	\div \vec{D} = 4\pi\rho \cr
	\div \vec{B} = 0
\end{cases}
\qquad
\begin{cases}
	\oint \limits_ { L } \vec { E } d \vec { l } = - \frac { 1 } { c } \frac { \partial } { \partial t } \int  \limits_ { S } \vec { B } d \vec { S } \cr
	\oint \limits_ { L } \vec { H } d \vec { l } = \frac { 1 } { c } \frac { \partial } { \partial t } \int \limits_ { S } \vec { D } d \vec { S }+ \frac { 4 \pi } { c } \int \limits_ { S} \vec { j } d \vec {S } \cr
	\oint \limits _ { V } \vec { D } d \vec { S } = 4 \pi \int \limits _ { V } \rho dV \cr
	\oint \limits _ { S } \vec { B } d \vec { S } = 0
\end{cases}
$$

## Граничные условия для тангенциальных и нормальных компонент полей

### Г/у тангенциальных компонент
$$
\begin{cases}
&[\E\_1-\E\_2\,\times \n\_{12}]=0, \cr
&[\H\_1-\H\_2\,\times \n\_{12}]=\frac{4\pi}{c}\j
\end{cases}
$$

### Г/у нормальных компонент
$$
\begin{cases}
&(\D\_1-\D\_2\,\cdot \n\_{12})=-4\pi\rho_\text{своб}, \cr
&(\B\_1-\B\_2\,\cdot \n\_{12})=0
\end{cases}
$$