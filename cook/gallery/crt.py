#!/usr/bin/python

import re
import sys
import random
from io import open

with open("list", "r", encoding="utf_8_sig") as ins:
	for line in ins:
		line=line.rstrip()
		fil=line.replace('.tex','')
		print(line) 
		with open('index_.html', 'r', encoding="utf_8_sig") as myfile:
			template=myfile.read()	
		with open(line, 'r',encoding='utf-8') as myfile:
			code=myfile.read()

			template=template.replace('{name}',fil)
			template=template.replace('{code}',code)
			with open(fil+".html", "w+", encoding="utf_8_sig") as text_file:
				text_file.write(template)