p = 7000
d = 2000


for n in range(0,31): # from 1 to 30

	print('Год: ',n)	

	action=p

	for actions in range(1,n+1):
		action=action+d

	for banks in range(n,31):
		action=action+action/10

	print('--',action)
	pass