import scipy.integrate as spint
from numpy import cos,sin
import numpy as np
from matplotlib import pyplot as plt
# подинтегральная функция
def f(i,t):
    return cos(1+2*t)/(1+i*t**2)

def coef(i):
	if (i==1)|(i==n):
		return 1
	else:
		return -(4+sin(2*i)/(10+i))

# Исключительно для примера. В реальности надо заменить своей функцией подсчета определенного интеграла
def simpson(f,a,b,eps):
	# встроенный квадратурный решатель симпсона
	return spint.quad(f,a,b)[0]

def B(i):
	inteps=0.01
	# подинтегральная функция для конкретного i
	def F(t):
		return f(i,t)
	return -1+simpson(F,0,1,inteps)

n=1000
# Заполняем матрицы уравнения Ax=b
A=np.zeros([n,n])
for j in range(0,n):
	A[j][j]=coef(j+1)
for j in range(1,n-1):
	A[j][j-1]=A[j][j+1]=1
# ################################
b=np.ones(n)
for j in range(1,n-1):
	b[j]=B(j+1)
print(A)
# Начальное приближение
x=b
eps=0.001
xold=b+10*eps
E=np.identity(n)

# Итерационный процесс
N=0
while np.linalg.norm(x-xold)/np.linalg.norm(xold)>eps:
	N+=1
	r=A@x-b
	tau=((A@r)@r)/((A@r)@(A@r))
	xold=x
	x=(E-tau*A)@x+(tau*E)@b
plt.plot(x)
plt.show()
# Сравним норму нашего решения и решения встроенной функцией
print(np.linalg.norm(x),N)
print(x)
print(np.linalg.norm(np.linalg.solve(A,b)))

plt.plot(np.linalg.solve(A,b))
plt.show()