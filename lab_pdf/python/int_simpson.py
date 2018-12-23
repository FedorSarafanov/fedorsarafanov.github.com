import numpy as np
from numpy import cos,sin

def f(t):
	return cos(2*t)

a,b=0,1
eps=0.01

def simpson(f,a,b,eps):
	integ,integ0=10**9,0
	N=1
	while np.abs(integ-integ0)>eps:
		N*=2
		h=(b-a)/N
		n=int(N/2)
		x=np.linspace(a,b,N+1) # сетка
		integ0=integ
		integ=h/3*(f(a)+2*np.sum([f(a+2*j*h) for j in range(1,n)])+4*np.sum([f(a+(2*j-1)*h) for j in range(1,n+1)])+f(b))
	return integ