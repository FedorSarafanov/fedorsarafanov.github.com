---
<!-- layout: post -->
title:  "Продольные и поперечные деформации. Закон Гука"
date:   2017-01-13 14:35:05 +0300
aliases:
    - /phy/2017/01/13/guk.html
<!-- categories: phy -->
---
По определению, нормальное напряжение

$$\sigma_n=\frac{F_n}{S}$$

При малых деформациях верен закон Гука:

$$\sigma_n=E\varepsilon$$

<!--more-->  
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