import time
start_time = time.time()

from numpy import pi,cos,sin,abs,sqrt,exp,array,prod,sum
from numpy.random import uniform

t1=time.time() - start_time

n=6
def f(x):
    x=array(x).T
    return -exp(sum([-x[i]**2 for i in range(0,n)]))
    # cos(x[0])*sin(x[1])*sin(x[2])*sin(x[3])*sin(x[4])

x=uniform(-1, 1,n)

d=0.01
eps1=0.0001

i=0
while d>eps1:
    i+=1
    if i>10**5:
        print('Exception: iteration overflow!')
        break
    xo = x
    psi,psi[0],psi[1]=uniform(0, pi,n),0,uniform(0, 2*pi)
    h=d*array([cos(psi[i-1])*prod([sin(psi[k]) for k in range(i,n)]) for i in range(1,n+1)])
    # А.Ф. Никифоров, С.К.Суслов, В.Б.Уваров. Классические ортогональные полиномы дискретной переменной. 
    # М.:Наука, 1985, 161-я страница.

    x=x+h
    if f(x)>f(xo):
        d=d-0.01*d
        x=xo 
    if f(x)<f(xo):
        d=d+0.01*d   
 
t2=time.time() - start_time
print('Iteration count: ',i, ', final point: ',x,', function at final point: ',f(x))
print("Время импорта %s с, время работы %s с, суммарное время %s с" % (t1,t2,t1+t2))