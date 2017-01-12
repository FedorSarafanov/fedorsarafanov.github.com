<h1>Задача Кеплера</h1>
<!--tags:linux-->
<!--d-->   
Задача Кеплера - фундаментальная задача механики, наряду с задачей о простом гармоническом осцилляторе.

В классической механике, задача Кеплера — это частный случай задачи двух тел, в которой два тела взаимодействуют посредством центральной силы F, изменяющейся по величине обратно пропорционально квадрату расстояния r между ними:

$$ \mathbf{F} = \frac{k}{r^{2}} \mathbf{\hat{r}} $$
<!--ed-->  
В поле центральной силы постоянны механическая энергия $$W=W_k+W_\text{п}$$.

А так как $$\vec{F}\parallel\vec{r}$$, то момент силы равен нулю, и по теореме о изменении момента импульса 

$$\frac{\mathrm{d}\vec{N}}{\mathrm{d}t}=\vec{M},$$

отсюда момент импульса $$\vec{N}=const$$. 
Так как $$\vec{N}=[\vec{r}\times\vec{p}]$$, то траектория лежит в плоскости векторов $$(\vec{r},\vec{v})$$.

Запишем скорость как сумму двух векторов:

$$\vec{v}=\vec{v}_r+\vec{v}_\phi,$$

где 

$$v_r=\frac{\mathrm{d}r}{\mathrm{d}t}, \quad v_\phi=r\frac{\mathrm{d}\phi}{\mathrm{d}t}$$

тогда квадрат вектора полной скорости $$v$$

$$v^2=v_r^2+v_\phi^2$$

а полная механическая энергия запишется как

$$W=W_\text{п}(\vec{r})+\frac{m\dot{r}^2}{2}+\frac{mr^2\dot{\phi}^2}{2}$$

Распишем момент импульса по определению:

$$\vec{N}=[\vec{r}\times m(\vec{v}_r+\vec{v}_\phi)]=
[\vec{r}\times m\vec{v}_r]+[\vec{r}\times m\vec{v}_\phi]=
m[\vec{r}\times\vec{v}_\phi]
$$

Тогда модуль момента импульса

$$N=mr^2\dot\phi \Rightarrow \dot\phi=\frac{N}{mr^2}$$

Можем переписать механическую энергию:

$$W=W_\text{п}(\vec{r})+\frac{m\dot{r}^2}{2}+\frac{N^2}{2mr^2},$$

где $$\frac{N^2}{2mr^2}$$  — центробежная энергия.

Найдем потенциальную энергию:

$$W_\text{п}(r)-W_\text{п}(\infty)=\int_r^\infty F_r\ \textrm{d}r
=-\int_r^\infty \frac{GMm}{r'^2} \textrm{d}r'=-\frac{Gmm}{r}=\frac{-k}{r}$$

А так как $$W_\text{п}(\infty)=0$$ при $$r\to\infty$$, то

$$W_\text{п}=-\frac{k}{r}$$

$$W_\text{цб}=\frac{N^2}{2mr^2}$$

Введем эффективную потенциальную энергию:

$$W_\text{эфф}=W_\text{цб}+W_\text{п}=\frac{N^2}{2mr^2}-\frac{k}{r}$$

С одной стороны, можем выразить $$\mathrm{d}t$$ через эффективную энергию:

$$W=W_\text{эфф}(\vec{r})+\frac{m\dot{r}^2}{2} \Rightarrow
\dot{r}^2=\frac{2}{m}(W-W_\text{эфф})$$

Тогда 

$$\mathrm{d}t=\pm\frac{\mathrm{d}r}{\sqrt{\frac{2}{m}(W-W_\text{эфф})}}$$

С другой стороны, можем выразить $$\mathrm{d}t$$ через момент импульса:

$$\dot\phi=\frac{N}{mr^2}\Rightarrow
\mathrm{d}t=\frac{mr^2}{N}\mathrm{d}\phi$$

Тогда

$$\mathrm{d}\phi=\frac{N\mathrm{d}r}{\pm{}mr^2\sqrt{\frac{2}{m}(W-W_\text{эфф})}}$$

Выберем один знак и запишем интеграл:

$$\varphi(r)=\frac{N}{m}\int\frac{dr}{r^2\sqrt{\frac{2}{m}(W-W_\text{эфф})}}+C$$

Выберем начало отсчета угла так, чтобы $$C=0$$.

$$W-W_\text{эфф}=W-(\frac{N^2}{2mr^2}-\frac{k}{r})$$


$$\varphi(r)=\int\frac
{d\left(\frac{N}{r}\right)}
{\sqrt{2m(W-W_\text{эфф})}}$$


$$\varphi(r)=\int\frac
{d\left(\frac{N}{r}\right)}
{\sqrt{2mW-\left(\frac{N^2}{r^2}-\frac{2mk}{r}\right)}}$$


$$\frac{N^2}{r^2}-\frac{2mk}{r}=\left(\frac{N}{r}-\frac{mk}{N}\right)^2-\left(\frac{mk}{N}\right)^2$$

$$\varphi(r)=\int\frac
{d\left(\frac{N}{r}-\frac{mk}{N}\right)}
{\sqrt{\left(2mW+\left(\frac{mk}{N}\right)^2\right)-\left(\frac{N}{r}-\frac{mk}{N}\right)^2}}$$

$$\beta^2=2mW+\left(\frac{mk}{N}\right)^2$$

$$\alpha^2=\left(\frac{N}{r}-\frac{mk}{N}\right)^2$$

$$
\varphi(r)=\int\frac
{d\alpha}
{\sqrt{\beta^2-\alpha^2}}$$

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