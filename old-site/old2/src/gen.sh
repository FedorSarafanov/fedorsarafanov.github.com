#!/usr/bin/bash
rm template/articles.html;
touch template/articles.html;

text="";

pre="
<header>
	<time datetime='2017-01-02' class='datetime'>JANUARY 2, 2017</time>
	<h1>";
sred="</h1>
</header><article>
";
post="</article>";

for file in `find article/* -type f -iname "*.html"`
	do {
		name=`basename -s .html "$file"`;
		title=`cat $file | grep -Eoi '<h1>.*</h1>' | head -1`;
		title=`sed "s/<h1>//g; s/<\/h1>//g;" <<< $title`;
		href="<a href='/article/$name.html'>$title</a>"
		# echo $row >> template/articles.html;
		text+=$pre;
		text+=$href;
		text+=$sred;
		desc=`cat $file | sed -n "/<\!--d/,/ed-->/ p;"`;
		# desc=`sed -e :a -e 's/<[^>]*>//g;/</N;//ba' <<< $desc`;
		# desc=`tr -s '\r\n' ' ' <<< $desc`;
		text+=$desc;
		text+=$post;
	} 
done;

echo $text >> template/articles.html;

gulp article:build;
