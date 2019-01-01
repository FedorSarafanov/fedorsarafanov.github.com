#!/usr/bin/bash
mv ../template/files.html ../template/files.html_
touch files.html;
touch {irodov,yakovlev,wrote}.html;
mv  ../_includes/{irodov,yakovlev,wrote}.html ../_includes/old/;

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
    		H="<div class='problem'><a href='/problems/$name.jpg'>$name</a></div>";
		else {
		H="<div class='problem'><span>$name</span><span class='href'>";
			if [ -f $name"-0.jpg" ]; then
	    		href+="<a href='/problems/$name-0.jpg'>1</a>";
	    		H+="<a href='/problems/$name-0.jpg'>1</a>";
			fi;

			if [ -f $name"-1.jpg" ]; then
	    		href+="<a href='/problems/$name-1.jpg'>2</a>";
	    		H+="<a href='/problems/$name-1.jpg'>2</a>";
			fi;

			if [ -f $name"-2.jpg" ]; then
	    		href+="<a href='/problems/$name-2.jpg'>3</a>";
	    		H+="<a href='/problems/$name-2.jpg'>3</a>";
			fi;
		H+="</span></div>";
		}
		fi;

		# echo $H;
		echo $name $author;
		convert -density 300 -alpha remove $name.pdf $name.jpg
		row=`sed "s/{1}/$name/g; s/{0}/$author/g; s/{2}//g; s/{3}//g;" <<<"<tr><td>{0}</td><td>{1}</td><td>{2}</td><td>{3}"`;
		row+=$href;
		row+="</td></tr>";
		echo $row >>files.html;

		if [ "$author" = "Иродов" ]; then
			echo $H >>irodov.html;
		fi;
		if [ "$author" = "Яковлев" ]; then
			echo $H >>yakovlev.html;
		fi;
		if [ "$author" = "Под запись" ]; then
			echo $H >>wrote.html;
		fi;
	} 
done;

# rm -rf ../problems/*.jpg;
mv {irodov,yakovlev,wrote}.html ../_includes;
# cp *.jpg ../problems/;
# mv files.html ../template/;