def f(n):
	return n * n - 20

for k in range(1,64):
	i = 12
	while i > 0 and f(i) > k:
		i = i - 1
	print(i,' ',k) 