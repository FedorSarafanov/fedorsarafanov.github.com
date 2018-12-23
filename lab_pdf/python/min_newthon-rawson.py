from matplotlib import pyplot as plt
import numpy as np
from numpy import sqrt,sum,hstack,ones,zeros,array,fill_diagonal,argsort,sin,cos,exp,dot
from numpy.linalg import inv,norm

def f(x):
	# if x[0]/2>700:
	# 	print('Error! x1 overflow')
	return exp(9/2)*(x[0] + x[1]**2 - 12*x[1] + 45)*exp(x[0]/2)
	# return sin(x[1])*cos(x[0])


def grad(x): 
	# return array([-sin(x[0])*sin(x[1]), cos(x[0])*cos(x[1])], dtype=np.float64).T
	return array([exp(9/2)*(x[0] + x[1]**2 - 12*x[1] + 45)*exp(x[0]/2)/2 + exp(9/2)*exp(x[0]/2), exp(9/2)*(2*x[1] - 12)*exp(x[0]/2)],dtype=np.float64)

def gessian(x):
	# return array([[-sin(x[1])*cos(x[0]), -sin(x[0])*cos(x[1])], [-sin(x[0])*cos(x[1]), -sin(x[1])*cos(x[0])]], dtype=np.float64)
	return array([[exp(9/2)*(x[0]/4 + x[1]**2/4 - 3*x[1] + 49/4)*exp(x[0]/2), exp(9/2)*(x[1] - 6)*exp(x[0]/2)], [exp(9/2)*(x[1] - 6)*exp(x[0]/2), 2*exp(9/2)*exp(x[0]/2)]],dtype=np.float64)#.T

def scw(f,h):
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


def minimize(f,eps,a,b): 
    if abs(b - a) < eps: 
        return 0.5 * (a + b)
    else:
        t = (b - a) / phi
        x1, x2 = b - t, a + t
        if f(x1) >= f(x2):
            return minimize(f,eps,x1,b)
        else:
            return minimize(f,eps,a,x2)

Xk=array([-10, -9],dtype=np.float64)
X=zeros(2)

h,eps=0.005,0.001
phi = 0.5 * (1.0 + sqrt(5.0))


N=0
while norm(X-Xk)>1e-3:
    N+=1
    if N>10**3:
        break
    X=Xk
    # pk=-dot(inv(gessian(Xk)),grad(Xk))
    pk=-grad(Xk)
    # print(pk)

    def F(alpha):
        return f(Xk+alpha*pk)
    # A=np.linspace(-0.01,1000,1000)
    # B=[F(a) for a in np.nditer(A)]
    # plt.plot(A,B)
    # plt.show()
    alpha=minimize(F,eps,0,scw(F,h))
    Xk=Xk+alpha*pk.T
    print(Xk)
# print(Xk)