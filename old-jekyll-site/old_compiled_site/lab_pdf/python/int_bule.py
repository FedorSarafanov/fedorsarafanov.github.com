from numpy import sqrt,sum,abs,log,exp
import numpy as np
from scipy import integrate
from matplotlib import pyplot as plt

def b(i,eps):
	def Boole(f,a,b):
		return (b-a)/90*(\
				7*f(a)+\
				32*f((3*a+b)/4)+\
				12*f((a+b)/2)+\
				32*f((a+3*b)/4)+\
				7*f(b)\
			)
	# 
	def F(x):
		return log(10+i+exp(-i*x))
	# 
	def I(h):
		return np.sum([Boole(F,A,A+h) for A in np.arange(a,b,h)])
	# 
	a=1
	b=5

	# Итерационный алгоритм. Все время сравниваю интеграл с разбиением h и h/2 до достижения точности, уменьшая h.
	N=1
	h=(b-a)/2**N
	Int=I(h)

	II=np.array([Int],dtype=np.float64)
	while abs(Int-I(h/2))/Int>eps:
		N+=1
		h=(b-a)/2**N
		Int=I(h)
		II=np.append(II,Int)

	return [Int,II,N] # [значение интеграла, список значений по итерациям, количество итераций]

print(b(1,1e-20))