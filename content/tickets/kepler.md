---
<!-- layout: post -->
title:  "Задача Кеплера"
date:   2017-01-08 14:35:05 +0300
aliases:
    - /phy/2017/01/13/kepler.html
    - /article/kepler.html
<!-- categories: phy -->
---

Задача Кеплера - фундаментальная задача механики, наряду с задачей о простом гармоническом осцилляторе.

В классической механике, задача Кеплера — это частный случай задачи двух тел, в которой два тела взаимодействуют посредством центральной силы F, изменяющейся по величине обратно пропорционально квадрату расстояния r между ними:

$$ \mathbf{F} = \frac{k}{r^{2}} \mathbf{\hat{r}} $$

<!--more-->  
В поле центральной силы постоянна механическая энергия:

$$
W=W\_k+W\_\text{a}
$$

А так как $$\vec{F}\parallel\vec{r}$$, то момент силы равен нулю, и по теореме о изменении момента импульса 

$$\frac{\mathrm{d}\vec{N}}{\mathrm{d}t}=\vec{M},$$

отсюда момент импульса $$\vec{N}=const$$. 
Так как $$\vec{N}=[\vec{r}\times\vec{p}]$$, то траектория лежит в плоскости векторов $$(\vec{r},\vec{v})$$.

Запишем скорость как сумму двух векторов:

$$\vec{v}=\vec{v}\_r+\vec{v}\_\phi,$$

где 

$$v\_r=\frac{\mathrm{d}r}{\mathrm{d}t}, \quad v\_\phi=r\frac{\mathrm{d}\phi}{\mathrm{d}t}$$

тогда квадрат вектора полной скорости $$v$$

$$v^2=v\_r^2+v\_\phi^2$$


а полная механическая энергия запишется как

$$W=W\_\text{п}(\vec{r})+\frac{m\dot{r}^2}{2}+\frac{mr^2\dot{\phi}^2}{2}$$

Распишем момент импульса по определению:

$$\vec{N}=[\vec{r}\times m(\vec{v}\_r+\vec{v}\_\phi)]=
[\vec{r}\times m\vec{v}\_r]+[\vec{r}\times m\vec{v}\_\phi]=
m[\vec{r}\times\vec{v}\_\phi]
$$

Тогда модуль момента импульса

$$N=mr^2\dot\phi \Rightarrow \dot\phi=\frac{N}{mr^2}$$

Можем переписать механическую энергию:

$$W=W\_\text{п}(\vec{r})+\frac{m\dot{r}^2}{2}+\frac{N^2}{2mr^2},$$

где $$\frac{N^2}{2mr^2}$$  — центробежная энергия.

Найдем потенциальную энергию:

$$W\_\text{п}(r)-W\_\text{п}(\infty)=\int\_r^\infty F\_r\ \textrm{d}r=$$

$$=-\int\_r^\infty \frac{GMm}{r'^2} \textrm{d}r'=-\frac{Gmm}{r}=\frac{-k}{r}$$

А так как $$W\_\text{п}(\infty)=0$$ при $$r\to\infty$$, то

$$W\_\text{п}=-\frac{k}{r}$$

$$W\_\text{цб}=\frac{N^2}{2mr^2}$$


Введем эффективную потенциальную энергию:

$$W\_\text{эфф}=W\_\text{цб}+W\_\text{п}=\frac{N^2}{2mr^2}-\frac{k}{r}$$

<img width="100%" src="/img/kepler-energy.svg" alt="">

С одной стороны, можем выразить $$\mathrm{d}t$$ через эффективную энергию:

$$W=W\_\text{эфф}(\vec{r})+\frac{m\dot{r}^2}{2} \Rightarrow
\dot{r}^2=\frac{2}{m}(W-W\_\text{эфф})$$



Тогда 

$$\mathrm{d}t=\pm\frac{\mathrm{d}r}{\sqrt{\frac{2}{m}(W-W\_\text{эфф})}}$$

С другой стороны, можем выразить $$\mathrm{d}t$$ через момент импульса:

$$\dot\phi=\frac{N}{mr^2}\Rightarrow
\mathrm{d}t=\frac{mr^2}{N}\mathrm{d}\phi$$

Тогда

$$\mathrm{d}\phi=\pm\frac{N\mathrm{d}r}{mr^2\sqrt{\frac{2}{m}(W-W\_\text{эфф})}}$$

Два знака говорят о том, что траектория симметрична относительно полярной оси.

В качестве полярной оси возьмем апсиду -- прямую, проходящую через апоцентр и перицентр траектории.

Пусть при $$\varphi=0$$ будет $$r=r\_{min}$$. 

Выберем один знак и запишем интеграл:

$$\varphi(r)=\frac{N}{m}\int\_{r\_{min}}^r\frac{dr}{r^2\sqrt{\frac{2}{m}(W-W\_\text{эфф})}}$$

$$W-W\_\text{эфф}=W-(\frac{N^2}{2mr^2}-\frac{k}{r})$$


$$\varphi(r)=-\int\_{r\_{min}}^r\frac
{d\left(\frac{N}{r}\right)}
{\sqrt{2m(W-W\_\text{эфф})}}$$


$$\varphi(r)=-\int\_{r\_{min}}^r\frac
{d\left(\frac{N}{r}\right)}
{\sqrt{2mW-\left(\frac{N^2}{r^2}-\frac{2mk}{r}\right)}}$$


$$\frac{N^2}{r^2}-\frac{2mk}{r}=\left(\frac{N}{r}-\frac{mk}{N}\right)^2-\left(\frac{mk}{N}\right)^2$$

$$\varphi(r)=-\int\_{r\_{min}}^r\frac
{d\left(\frac{N}{r}-\frac{mk}{N}\right)}
{\sqrt{\left(2mW+\left(\frac{mk}{N}\right)^2\right)-\left(\frac{N}{r}-\frac{mk}{N}\right)^2}}$$

$$\beta^2=2mW+\left(\frac{mk}{N}\right)^2$$

$$\alpha^2=\left(\frac{N}{r}-\frac{mk}{N}\right)^2$$

$$
\varphi(r)=-\int\_{r\_{min}}^r\frac
{d\alpha}
{\sqrt{\beta^2-\alpha^2}}$$

Так как согласно выбору полярной оси $$\varphi=0$$ при $$r=r\_{min},$$ то 

$$
\varphi(r)=-(-\arccos\frac\alpha\beta)\bigg|\_{r\_{min}}^r=\arccos\frac\alpha\beta$$


$$
\varphi(r)=\arccos\frac
{\frac{N}{r}-\frac{mk}{N}}
{\sqrt{2mW+\frac{m^2k^2}{N^2}}}=
\arccos\frac
{\frac{N^2}{mkr}-1}
{\sqrt{1+\frac{2WN^2}{mk^2}}}$$

Сделаем замены переменной. 

$$p$$ -- параметр:

$$p=\frac{N^2}{mk}$$

$$e$$ -- эксцентриситет:

$$e=\sqrt{1+\frac{2WN^2}{mk^2}}$$

$$\cos\varphi=\frac{\frac{p}{r}-1}{e}$$

$$\frac{p}{r}=1+e\cos\varphi$$

$$r=\frac{p}{1+e\cos\varphi}$$

Полученное уравнение известно как уравнение конических сечений.