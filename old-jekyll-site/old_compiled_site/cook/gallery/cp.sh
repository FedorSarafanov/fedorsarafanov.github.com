for name in `ls *.jpg`; do \
	fil=`basename $name .pdf.jpg`
	cp ../out/$fil.tex $fil.tex
done
