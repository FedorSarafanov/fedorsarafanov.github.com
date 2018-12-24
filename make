echo $1
git add . &&
git commit -m $1 &&
git push &&
cp _.git_ _site/.git &&
cd _site && 
git add . &&
git commit -m $1 &&
git push