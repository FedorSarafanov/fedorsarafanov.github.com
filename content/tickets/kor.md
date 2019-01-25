---
<!-- layout: post -->
title:  "Вывод ускорения Кориолиса"
date:   2017-01-14 14:35:05 +0300
aliases:
    - /phy/2017/01/14/kor.html
    - /article/kor.html
<!-- categories: phy  -->
tags: 
    - физика
    - вывод кориолиса
    - гироскопическая сила
    - сила инерции
desc: >-
    Рассмотрим вывод связи ускорений в покоящейся системе отсчета и движущейся.
    В частности, выведем силу Кориолиса.
---
 
**Лемма**:

$$\frac{d\vec{R}}{dt}=[\omega\times\vec{R}]$$

Примем, что

$$\vec{r}=x\vec{i}+y\vec{j}+z\vec{k}$$

$$\vec{r\,}^{\prime}=x^{\prime}\vec{i^{\prime}}+y^{\prime}\vec{j^{\prime}}+z^{\prime}\vec{k^{\prime}}$$

<!--more-->

Далее

$$\vec{v^{\prime}}=\frac{d\vec{r^{\prime}}}{dt}=
\frac{dx^{\prime}}{dt}\vec{i^{\prime}}+\frac{dy^{\prime}}{dt}\vec{j^{\prime}}+\frac{dz^{\prime}}{dt}\vec{k^{\prime}} \text{ (относительная)}$$

$$\vec{a^{\prime}}=\frac{d^2\vec{r^{\prime}}}{dt^2}=
\frac{d^2x^{\prime}}{dt^2}\vec{i^{\prime}}+\frac{d^2y^{\prime}}{dt^2}\vec{j^{\prime}}+\frac{d^2z^{\prime}}{dt^2}\vec{k^{\prime}} \text{ (относительное)}$$

Так как $$\vec{i^{\prime}}, \vec{j^{\prime}},\vec{k^{\prime}}$$ -- не инвариантны относительно неподвижной системы, то дифференцируя и их, получим полную скорость:

$$\vec{v}=\frac{d\vec{r^{\prime}}}{dt}=%\frac{d\vec{r}}{dt}=$$

$$=\left[\frac{dx^{\prime}}{dt}\vec{i^{\prime}}+\frac{dy^{\prime}}{dt}\vec{j^{\prime}}+\frac{dz^{\prime}}{dt}\vec{k^{\prime}}\right]+
\left[x^{\prime}\frac{d\vec{i^{\prime}}}{dt}+y^{\prime}\frac{d\vec{j^{\prime}}}{dt}+z^{\prime}\frac{d\vec{k^{\prime}}}{dt}\right]=$$

$$=\vec{v^{\prime}}+
\left[x^{\prime}[\omega\times\vec{i^{\prime}}]+y^{\prime}[\omega\times\vec{j^{\prime}}]+z^{\prime}[\omega\times\vec{k^{\prime}}]\right]\Rightarrow$$

$$\vec{v}=\vec{v^{\prime}}+\left[\omega\times\vec{r^{\prime}}\right]$$

Аналогично

$$\frac{d\vec{v^{\prime}}}{dt}=%[\omega\times\vec{v^{\prime}}]=
\left[
\frac{d^2x^{\prime}}{dt^2}\vec{i^{\prime}}+
\frac{d^2y^{\prime}}{dt^2}\vec{j^{\prime}}+
\frac{d^2z^{\prime}}{dt^2}\vec{k^{\prime}} 
\right]+
\left[
v^{\prime}\_x\frac{d\vec{i^{\prime}}}{dt}+
v^{\prime}\_y\frac{d\vec{j^{\prime}}}{dt}+
v^{\prime}\_z\frac{d\vec{k^{\prime}}}{dt} 
\right]=$$

$$=\vec{a^{\prime}}+
\left[v\_x^{\prime}[\omega\times\vec{i^{\prime}}]+v\_y^{\prime}[\omega\times\vec{j^{\prime}}]+v\_z^{\prime}[\omega\times\vec{k^{\prime}}]\right]\Rightarrow$$

$$\vec{a}=\vec{a^{\prime}}+\left[\omega\times\vec{v^{\prime}}\right]+
\frac{d[\omega\times\vec{r^{\prime}}]}{dt}=$$

$$=\vec{a^{\prime}}+\left[\omega\times\vec{v^{\prime}}\right]+
\left[\vec{\beta}\times\vec{r^{\prime}}\right]+
\left[\omega\times\frac{d\vec{r^{\prime}}}{dt}\right]
$$

Причем 

$$\left[\omega\times\frac{d\vec{r^{\prime}}}{dt}\right]=
\left[\omega\times\left(\vec{v^{\prime}}+\left[\omega\times\vec{r^{\prime}}\right]\right)\right]=$$

$$=\left[\omega\times\vec{v^{\prime}}\right]+
\left[\omega\times\left[\omega\times\vec{r^{\prime}}\right]\right]$$

Заметим, что

$$\left[\omega\times\vec{r^{\prime}}\right]=\left[\omega\times\vec{r^{\prime}}\_{\perp\omega}\right],$$

где 

$$\vec{v^{\prime}}=\vec{v^{\prime}}\_{\perp\omega}+\vec{v^{\prime}}\_{\parallel\omega}$$

Тогда по формуле $$[a[bc]]=b(ac)-c(ab):$$

$$\left[\omega\times\frac{d\vec{r^{\prime}}}{dt}\right]=\left[\omega\times\vec{v^{\prime}}\right]+
\omega(\omega,\vec{r^{\prime}}\_{\perp\omega})-
\omega^2\vec{r^{\prime}}\_\perp=$$

$$=\left[\omega\times\vec{v^{\prime}}\right]-
\omega^2\vec{r^{\prime}}\_\perp.$$

Тогда

$$\vec{a}=\vec{a^{\prime}}+2\left[\omega\times\vec{v^{\prime}}\right]+
\left[\vec{\beta}\times\vec{r^{\prime}}\right]-
\omega^2\vec{r^{\prime}}\_\perp
$$

Перепишем в виде

$$m\vec{a^{\prime}}=-m\vec{a\_0}+
2m\left[\vec{v^{\prime}}\times\omega\right]-
\left[\vec{\beta}\times\vec{r^{\prime}}\right]+
\omega^2\vec{r^{\prime}}\_\perp
$$

Где можно выделить поступательную, центробежную и переносную силы инерции.