import scipy.integrate as spint
from numpy import cos,sin,exp, log as ln
import numpy as np
from numpy.linalg import inv,norm,cond,solve

# подинтегральная функция
def f(i,t):
    return exp(-i**2*t**2)/(1+i*t*cos(t)**2+t**2)

def Int(m):
	a=0
	b=1

	def F(t):
		return f(m,t)

	def f38(a,b):
		return (b-a)/8*(
				F(a)+
				3*F((2*a+b)/3)+
				3*F((a+2*b)/3)+
				F(b)
			)

	eps=0.01
	Iold=np.inf
	I=f38(a,b)
	N=2
	k=0

	while abs(I-Iold)/abs(I)>eps:
		k+=1
		N=N*2
		S=np.linspace(a,b,N) # эквидистантное разбиение
		h=S[1]-S[0] # шаг разбиения

		Iold=I
		I=np.sum([f38(ai,ai+h) for ai in S[:-1]])
		
	return [I,k]

n=1000

# Заполнение матрицы A
A=np.zeros([n,n], dtype=np.float64)
for j in range(1,n-1):
	A[j][j]=-(3+sin(j+1)**2*cos(j+1)**5/(j+1+1))
for j in range(1,n-1):
	A[j][j-1]=1
	A[j][j+1]=(1+cos(j+1)**2)
A[0][0]=1
A[n-1][n-1]=1
A[n-1][n-2]=-0.9

# Заполнение матрицы b
b=np.zeros(n, dtype=np.float64)
for j in range(1,n-1):
	def F(t): 
		return f(j+1,t) 
	# print(j)
	if n<=10:
		b[j]=-Int(j+1)[0]
	else:
		b[j]=-spint.quad(F,0,1)[0] 
b[n-1]=1
print('Fill matrix finished')

# Добавляем лишние элементы в массив, чтобы 
# нумерация  элементов совпадала с методичкой

b=np.hstack([0,b])
d=np.hstack([0,np.diag(A,k=0)])
c=np.hstack([0,np.diag(A,k=1)])
a=np.hstack([0,0,np.diag(A,k=-1)])


L=np.zeros(n+2)
M=np.zeros(n+2)

L[2]=-c[1]/d[1]
M[2]=b[1]/d[1]

for N in range(3,n+1):
	i=N-1
	L[N]=-c[i]/(a[i]*L[i]+d[i])
	M[N]=(b[i]-M[i]*a[i])/(a[i]*L[i]+d[i])

x=np.zeros(n+1)
x[n]=(b[n]-M[n]*a[n])/(a[n]*L[n]+d[n])

for i in range(n-1,0,-1): # n, n-1, ..., 1
	x[i]=x[i+1]*L[i+1]+M[i+1]

# Обрезаем лишний нолик 
x=x[1:]
b=b[1:]
print(x)
print(solve(A,b))