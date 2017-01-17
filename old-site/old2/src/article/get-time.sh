#!/usr/bin/bash

for file in `find * -type f -iname "*.html"`
	do {
		mtime=`cat $file".mtime"`;
		touch -a -m -t $mtime $file;
	} 
done;