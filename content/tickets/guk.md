---
<!-- layout: post -->
title:  "Продольные и поперечные деформации. Закон Гука"
date:   2017-01-13 14:35:05 +0300
aliases:
    - /phy/2017/01/13/guk.html
    - /article/guk.html
<!-- categories: phy -->
---
По определению, нормальное напряжение

$$\sigma\_n=\frac{F\_n}{S}$$

При малых деформациях верен закон Гука:

$$\sigma\_n=E\varepsilon$$

<!--more-->  
где $$\varepsilon$$ -- относительная деформация:

$$\varepsilon=\frac{\Delta l}{l}$$

а $$E$$ -- модуль Юнга, имеющий размерность $$[\sigma\_n]$$, характеризующий свойства материала.

Выведем классическое "школьное" представление закона Гука:

$$\frac{F\_n}{S}=E\frac{\Delta l}{l}$$ 

$$F\_n=\frac{ES}{l}\Delta l$$ 

Можно ввести обозначение $$k=\frac{ES}{l}.$$ Тогда получаем известную формулу:

$$F\_\text{упр}=-k\Delta l$$ 


## Поперечная деформация

Из жизненного опыта известно, что при растяжении и сжатии материала изменяется не только его продольные размеры, но и поперечные. Введем поперечную деформацию

$$\varepsilon\_\perp=\frac{\Delta l\_\perp}{l\_\perp}$$

Рассмотрим начальный и конечный объемы прямоугольного бруска.

$$V\_0=S\_0\cdot l\_0=l\_{\perp0}^2\cdot l$$

$$V=S\cdot l=l\_\perp^2\cdot l$$

Из определения относительной деформации можно вывести

$$l=l\_0(1+\varepsilon)$$

$$l\_\perp=l\_{\perp0}(1+\varepsilon\_\perp)$$

Тогда 

$$V=l\_{\perp0}^2l\_0(1+\varepsilon\_\perp)^2(1+\varepsilon)$$

$$V=V\_0(1+\varepsilon\_\perp)^2(1+\varepsilon)$$

Раскроем скобки:

$$V=V\_0(1+2\varepsilon\_\perp+\varepsilon^2\_\perp
+\varepsilon+2\varepsilon\_\perp\varepsilon+\varepsilon^2\_\perp\varepsilon)$$

Так как $$\varepsilon\_\perp,\varepsilon << 1,$$ 

$$V=V\_0(1+2\varepsilon\_\perp
+\varepsilon)$$

Тогда

$$\Delta V = V-V\_0=V\_0\cdot(\varepsilon+2\varepsilon\_\perp)=
V\_0\cdot\varepsilon(1-2\mu)$$

где $$\mu=-\frac{\varepsilon\_\perp}{\varepsilon}$$ -- коэффициент Пуассона. Из формулы видно, что коэффициент имеет смысл при $$0\leq\mu\leq\frac{1}2.$$ 