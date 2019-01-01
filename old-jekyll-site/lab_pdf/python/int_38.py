import scipy.integrate as spint
from numpy import cos,sin,exp, log as ln
import numpy as np
from numpy.linalg import inv,norm,cond

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

print(Int(1))