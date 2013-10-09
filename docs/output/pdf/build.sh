#a2x --no-xmllint --asciidoc-opts="-a docinfo" -d book -f $1 --fop --dblatex-opts="-s custom-asciidoc-dblatex.sty" -v Documentation.txt
a2x --no-xmllint -d book -f pdf --fop -v Documentation.txt