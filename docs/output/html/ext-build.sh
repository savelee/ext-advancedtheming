#!/bin/sh

#asciidoc -b html5 -f html5.conf Documentation.txt
#a2x --no-xmllint -f chunked -v Documentation.txt

ASCIIDOC="sudo asciidoc -b html5 -f html5.conf \
    -a linkcss \
    -a stylesdir=style \
    -a source-highlighter= \
    -a stylesheet=custom.css \
    -a max-width=1024px"

function process_asciidoc {

    for INPUT in $@ ; do
        # If a file ending in ".asciidoc" then process with AsciiDoc.
        if [ -f $INPUT ] && [ `echo $INPUT | grep -c ".asciidoc$"` == 1 ] ; then
            echo "Processing $INPUT"
            OUTPUT=`basename $INPUT .asciidoc`

			CHAPTERTEMP=(${INPUT//ch/ })
			CHAPTER=(${CHAPTERTEMP[1]//// })
			FILENAME=(${OUTPUT//_/ })

			if [ ${#CHAPTER[@]} = 0 ]; then
			    NEWFILENAME="extjs/0-${FILENAME[0]}"
			else
			    NEWFILENAME="extjs/${CHAPTER[0]}-${FILENAME[0]}"
			fi

            $ASCIIDOC --out-file $NEWFILENAME.html $INPUT;

        # Else if a directory, process its contents.
        elif [ -d $INPUT ] ; then
            echo "Processing directory $INPUT"
            process_asciidoc `ls $INPUT/*`
        fi
    done
}

process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch2"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch3"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch4"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch5"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch6"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch7"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch8"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch9"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch10"

$ASCIIDOC --out-file extjs/index.html ../ext-html.txt;

cp -r ../../general/resources extjs/resources 
