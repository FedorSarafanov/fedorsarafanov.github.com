
rootdir = '/home/osabio/www/';
files = ['article.md']

from subprocess import Popen, PIPE
from datetime import datetime
import re

for elem in files:
	f = open(rootdir+'project.html', 'r')
	html = f.read()
	proc = Popen(
    "markdown "+rootdir+elem,
    shell=True,
    stdout=PIPE, stderr=PIPE
	)
	proc.wait()    # дождаться выполнения
	res = proc.communicate()  # получить tuple('stdout res', 'stderr res')
	rawhtml = res[0].decode('utf-8', 'ignore')	
	title = re.search(r'<h1>(.*?)</h1>', rawhtml).group(1)
	rawhtml = rawhtml.replace('<h1>'+title+'</h1>','')
	now = datetime.now().strftime("%d.%m.%Y %H:%M")	
	html = html.replace('[[title]]', title);
	html = html.replace('[[rawhtml]]', rawhtml);
	html = html.replace('[[now]]', now);
	f.close()
	f = open(rootdir+elem.replace('.md','')+'.html', 'w+')
	f.write(html)
	f.close()

print('Success!')

