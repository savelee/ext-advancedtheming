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
			    NEWFILENAME="0-${FILENAME[0]}"
			else
			    NEWFILENAME="${CHAPTER[0]}-${FILENAME[0]}"
			fi

            $ASCIIDOC --out-file $NEWFILENAME.html $INPUT;

        # Else if a directory, process its contents.
        elif [ -d $INPUT ] ; then
            echo "Processing directory $INPUT"
            process_asciidoc `ls $INPUT/*`
        fi
    done
}

#TODO modify output name

process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch1"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch2"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch3"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch4"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch5"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch6"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch7"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch8"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch9"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/ch10"

$ASCIIDOC --out-file index.html Documentation.txt;

