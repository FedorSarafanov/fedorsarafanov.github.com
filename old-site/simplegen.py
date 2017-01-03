#/usr/bin/python

from subprocess import Popen, PIPE
from datetime import datetime
import re, json

rootdir = '/home/osabio/www/';
# rootdir = ''
files = ['article.md']
jsonfile = 'articles.json'

with open(rootdir+jsonfile) as data_file:    
    data = json.load(data_file)

for elem in files:
	if not (elem in data):
		md = open(elem, 'r')
		tags = md.readlines()[2]
		tags = tags.split()
		md.close()

		project = open(rootdir+'project.xml', 'r')
		html = project.read()
		project.close()
		proc = Popen(
		    "markdown "+elem,
		    shell=True,
		    stdout=PIPE, stderr=PIPE
		)
		proc.wait()
		res = proc.communicate()

		rawhtml = res[0].decode('utf-8', 'ignore')	
		title = re.search(r'<h1>(.*?)</h1>', rawhtml).group(1)
		rawhtml = rawhtml.replace('<h1>'+title+'</h1>','')
		now = datetime.now().strftime("%d.%m.%Y %H:%M")	

		html = html.replace('[[title]]', title);
		html = html.replace('[[rawhtml]]', rawhtml);
		html = html.replace('[[now]]', now);

		result = open(elem.replace('.md','')+'.html', 'w+')
		result.write(html)
		result.close()
		data[elem] = {"title": title, "data": now, "tags": tags}
	else:		
		print(data[elem])
		pass

with open(rootdir+jsonfile, 'w') as jsons_file:
    json.dump(data, jsons_file, ensure_ascii=False)		

print('Success!')

