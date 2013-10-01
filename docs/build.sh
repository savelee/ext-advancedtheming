if [ ! -d pdf ]; then
  mkdir pdf
fi
a2x --no-xmllint --asciidoc-opts="-a docinfo" -d book -f $1 --dblatex-opts="-s custom-asciidoc-dblatex.sty" -D pdf -v Documentation.txt