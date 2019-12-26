import numpy as np
from scipy.integrate import odeint,solve_ivp
import scipy
from numpy import sqrt, exp
import matplotlib.pyplot as plt

def model(t,z):
	# print(z)
	y1=z[0]
	y2=z[1]
	return [y2,-y2+4*y1+t*exp(-t)]

# initial condition
z0 = np.array([1,0])

solve = solve_ivp(model,[0, 2],z0,method='LSODA',min_step=0.01,max_step=0.01)

Time=solve.t
z=solve.y
# print(z)

Y1=z[0]
Y2=z[1]

plt.subplot(221)
plt.plot(Time,Y1)
# plt.show()
plt.subplot(222)
plt.plot(Time,Y2)
# plt.show()
plt.subplot(223)
plt.plot(Y1,Y2)
plt.show()