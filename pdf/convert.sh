#!/usr/bin/bash
rm files.html
touch files.html;
for file in *.pdf;  
	# do echo $file ; 
	do {
		name=`basename -s .pdf "$file"`;
		if [[ "$name" =~ ^[0-9][0-9][0-9] || "$name" =~ ^[0-9][0-9] ]] ;then
			author="Яковлев";
		elif [[ "$name" =~ ^[0-9]-[0-9][0-9] || "$name" =~ ^[0-9]-[0-9][0-9][0-9] ]]; then
			author="Иродов";
		else 
			author="Под запись";
		fi	;

		href="";

		if [ -f $name".jpg" ]; then
    		href+="<a href='/problems/$name.jpg'>1</a>";
		else {

			if [ -f $name"-0.jpg" ]; then
	    		href+="<a href='/problems/$name-0.jpg'>1</a>";
			fi;

			if [ -f $name"-1.jpg" ]; then
	    		href+="<a href='/problems/$name-1.jpg'>2</a>";
			fi;

			if [ -f $name"-2.jpg" ]; then
	    		href+="<a href='/problems/$name-2.jpg'>3</a>";
			fi;

		}

		fi;
		# echo $name $author;
		# convert -density 300 -alpha remove $name.pdf $name.jpg
		row=`sed "s/{1}/$name/g; s/{0}/$author/g; s/{2}//g; s/{3}//g;" <<<"<tr><td>{0}</td><td>{1}</td><td>{2}</td><td>{3}"`;
		row+=$href;
		row+="</td></tr>";
		echo $row >>files.html;
	} 
done;

rm -rf ../src/problems/*.jpg;
cp *.jpg ../src/problems/;
rm -rf ../src/template/files.html;
cp files.html ../src/template/;