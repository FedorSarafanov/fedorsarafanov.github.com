#!/usr/bin/python

import re
import sys
import random

with open("list", "r") as ins:
	for line in ins:
		line=line.rstrip()
		fil=line.replace('.tex','')
		with open('index_.html', 'r') as myfile:
			template=myfile.read()	

		with open(line, 'r') as myfile:
			code=myfile.read()

			template=template.replace('{name}',fil)
			template=template.replace('{code}',code)
			with open(fil+".html", "w+") as text_file:
				text_file.write(template)