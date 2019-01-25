import scipy.integrate as spint
from numpy import cos,sin,exp,sqrt,sum,abs
from numpy.linalg import inv,norm,cond
import numpy as np

# подинтегральная функция
def f(i,t):
    return exp(-i**2*t)/(1+i*t*sin(t)**2)

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

def getIntegral(f,a,b,eps):
    N=2
    int1=B(1,f,a,b)
    int2=B(2,f,a,b)
    while abs(int2-int1)>eps:
        N+=1
        int1=int2
        int2=B(N,f,a,b)
    return [int2,N]


n=1000

# Матрицы Ax=b
A=np.zeros([n,n],dtype=np.float32)
for j in range(0,n):
	i=j+1
	A[j][j]=(6*i**2+3)
for j in range(1,n-1):
	i=j+1
	A[j][j-1]=(2*i+1)
	A[j][j+1]=(4*i+2)
A[0][0]=A[n-1][n-1]=1
A[0][1]=-0.1
A[n-1][n-2]=-0.5

b=np.zeros(n,dtype=np.float32)
for j in range(1,n-1):
	epsi=0.01
	def rightIntegral(t):
		return f(j+1,t)
	b[j]=getIntegral(rightIntegral,0,1,epsi)[0]

L=np.tril(A, k=-1) #triangular_lower_no_diag matrix from A
R=np.triu(A, k=1) # triangular_upper_no_diag matrix from A
D=np.diag(np.diag(A)) #diag matrix from A


Hk=inv(D+L)
Tk=-Hk@R

#  Приближение x_0=b
x=b+0.001 
eps=0.001
xold=b*100+100

# Итерационный процесс
N=0
while norm(x-xold)/norm(xold)>eps:
	N+=1
	# print('Итерация %s'%(N))
	xold=x
	x=Tk@x+Hk@b

# Сравним норму нашего решения и решения встроенной функцией
print(norm(x),N)
print(norm(np.linalg.solve(A,b)))

# Число обусловленности матрицы
mu=cond(A)
print('Число обусловленности %s'%(mu))
if mu<10**2:
	print('Система хорошо обусловленная')
elif mu<10**4:
	print('Средняя обусловленность')
else:
	print('Система плохо обусловленная')