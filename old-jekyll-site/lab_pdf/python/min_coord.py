import matplotlib
import numpy as np
from numpy import pi,cos,sin,abs,sqrt,exp
import matplotlib.pyplot as plt
from scipy import optimize

# Размерность пространства, в котором ищется максимум
n=2

# Функция f
def f(x):
    x=np.array(x).T
    return -(x[0]**2*x[1]-10*x[0]**2+4*x[0]*x[1]-40*x[0]+x[1]**3-30*x[1]**2+295*x[1]-949)

# Вектор e_j
def e(j):
    ar=np.zeros(n)
    ar[j-1]=1
    return ar


# Определение отрезка, на котором ищется минимум методом скользущего окна из методички
def FindByScrollWindow(f):
    h=0.05 # ширина окна
    x0=0
    N=0
    while not((f(x0-h)>f(x0))&(f(x0)<f(x0+h))):
        N+=1
        if N>10**5:
            break
        if f(x0-h)>f(x0+h):
            x0=x0+h/2
        else:
            x0=x0-h/2
    return x0

phi = 0.5 * (1.0 + sqrt(5.0))

# Поиск минимума функции одной переменной методом золотого сечения из википедии
def FindLocalMinima(f,a,b):
    eps=0.001
    if abs(b - a) < eps: 
        return 0.5 * (a + b)
    else:
        t = (b - a) / phi
        B,A = b - t, a + t
        if f(B) >= f(A):
            return FindLocalMinima(f,B,b)
        else:
            return FindLocalMinima(f,a,A)

xk=np.array([-1,-11])
x0=np.zeros(2)
eps=0.0001

localmax=[-2,10-sqrt(3)]

X, Y = np.meshgrid(np.arange(-20,20,0.1), np.arange(-20,20,0.1))

plt.contour(X,Y,-f(np.array([X,Y]).T),200)

plt.plot(xk[0],xk[1],'bo')
k=0

while np.linalg.norm(x0-xk)>eps:
    pk=e(k-int(k/n)*n+1)
    k+=1
    def Fi(alpha):
        return f(xk+alpha*pk)
    alpha=FindLocalMinima(Fi,0,FindByScrollWindow(Fi))
    x0=xk
    xk=xk+alpha*pk
    plt.plot([x0[0],xk[0]],[x0[1],xk[1]],'-b')

plt.plot(xk[0],xk[1],'ro')
print('Final point: ', xk)
print('Iteration count: ', k)
print('Function at found local maxima', f(xk))
print('Function at I known local maxima', f(localmax))

# Матрица Гессе (Гессиан)
def gessian(x):
    Arr=np.array([[2*(x[1] - 10), 2*(x[0] + 2)], [2*(x[0] + 2), 6*(x[1] - 10)]])
    return Arr 

# Собственные значения матрицы Гессе
P=np.linalg.eig(gessian(xk))[0]

# Коэфф. овражности по определению
k=np.max(P)/np.min(P)
print('Ovrashnostui coeff at found local maxima:',k)
plt.show()