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

            #remove ch from foldername to get the number
			CHAPTERTEMP=(${INPUT//ch/ })
            #create chapter prefix
			CHAPTER=(${CHAPTERTEMP[1]//// })
            #create new filename
			FILENAME=(${OUTPUT//_/ })
            FOLDERNAME=(${FILENAME//-/ })

            #when there is no number in the filename, the list as 0
			if [ ${#CHAPTER[@]} = 0 ]; then
			    NEWFILENAME="extjs/0-${FILENAME[0]}"
			else

                mkdir -p "extjs/${CHAPTER[0]}-${FOLDERNAME[0]}";

			    NEWFILENAME="extjs/${CHAPTER[0]}-${FOLDERNAME[0]}/${FILENAME[0]}"
			fi

            #create the new file
            #generate htmls of every asciifile
            $ASCIIDOC --out-file $NEWFILENAME.html $INPUT;

        # Else if a directory, process its contents.
        elif [ -d $INPUT ] ; then
            echo "Processing directory $INPUT"
            process_asciidoc `ls $INPUT/*`
        fi
    done
}

process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/intro"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/buttons"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/containers"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/forms"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/grids"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/images"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/messageboxes"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/panels"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/splitbuttons"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/tabpanels"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/toolbars"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/trees"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch1/windows"

process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch2/intro"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/general/ch2_layouts/hbox"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/general/ch2_layouts/vbox"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/general/ch2_layouts/fit"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/general/ch2_layouts/card"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/general/ch2_layouts/border"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/general/ch2_layouts/anchor"
process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/general/ch2_layouts/column"

#process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch3"
#process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch4"
#process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch5"
#process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch6"
#process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch7"
#process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch8"
#process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch9"
#process_asciidoc "/Applications/XAMPP/htdocs/advancedtheming/docs/extjs/ch10"

$ASCIIDOC --out-file extjs/index.html ../ext-html.txt;

cp -r ../../general/resources extjs/resources 
