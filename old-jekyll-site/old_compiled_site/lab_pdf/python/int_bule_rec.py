from numpy import sqrt,sum,abs
import numpy as np
from matplotlib import pyplot as plt
def f(x):
    return x**2-x**3

def T(N,f,a,b):
    if N==0:
        return (b-a)/2*(f(a)+f(b))
    else:
        g=2**N
        M=int(g/2)
        h=(b-a)/g
        def xk(k):
            return a+k*h
        return T(N-1,f,a,b)/2+h*sum([f(xk(2*k+1)) for k in range(1,M+1)])

def S(N,f,a,b):
    return (4*T(N,f,a,b)-T(N-1,f,a,b))/3

def B(N,f,a,b):
    return (16*S(N,f,a,b)-T(N-1,f,a,b))/15

def getIntegral(f,a,b,eps,plot=False):
    N=2
    int1=B(1,f,a,b)
    int2=B(2,f,a,b)
    ARR=[]
    ARR.append(int2)
    while abs(int2-int1)/abs(int2)>eps:
        N+=1
        int1=int2
        int2=B(N,f,a,b)
        ARR.append(int2)
    if plot==False:
        return int2 
    else:
        return np.array(ARR)


a=0
b=1
eps=0.01

A=getIntegral(f,a,b,eps/100, plot=True)
plt.plot(A)
plt.show()

print(getIntegral(f,a,b,eps))