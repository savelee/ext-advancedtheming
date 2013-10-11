cp -r ../../general/resources extjs
a2x --no-xmllint -d book -f pdf -D extjs --dblatex-opts="-s custom-asciidoc-dblatex.sty" -v ../ext-pdf.txt
rm -rf extjs/resources

#a2x --no-xmllint -fpdf -dbook --fop ../ext-pdf.txt