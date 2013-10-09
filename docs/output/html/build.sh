#!/bin/sh

#asciidoc -b html5 -f html5.conf Documentation.txt
#a2x --no-xmllint -f chunked -v Documentation.txt

ASCIIDOC="sudo asciidoc -b html5 -f html5.conf \
    -a linkcss \
    -a stylesdir=style \
    -a stylesheet=custom.css \
    -a max-width=1024px"

function process_asciidoc {
	echo "Lets go!"
    for INPUT in  $@ ; do
    	echo basename $INPUT
        # If a file ending in ".asciidoc" then process with AsciiDoc.
        if [ -f $INPUT ] && [ `echo $INPUT | grep -c ".asciidoc$"` == 1 ] ; then
            echo "Processing $INPUT"
            OUTPUT=`basename $INPUT .asciidoc`
            $ASCIIDOC --out-file $OUTPUT.html $INPUT;

        # Else if a directory, process its contents.
        elif [ -d $INPUT ] ; then
            echo "Processing directory $INPUT"
            process_asciidoc `ls $INPUT/*`
        fi
    done
}

process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch1/"
