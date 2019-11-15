#!/usr/bin/env zsh

convertVue () {
  # $1 : vue file to convert from typescript to javascript
  echo $1
  FILE=$( basename $1 )
  cd $(dirname $1)

  # Extract typescript code and convert it to js
  sed '/script lang/,/\/script/!d' $FILE | grep -v "</*script" > temp.ts
  tsc temp.ts

  # Reincorporate js to initial file
  cat <( sed '1,/script lang/!d' $FILE ) temp.js <( sed '/<\/script/,$!d' $FILE ) | sed 's/ lang="ts"//g' > "tmp-$FILE"

  mv $FILE "gettextIni-$FILE"
  mv "tmp-$FILE" $FILE

  # Clean temporary files & go back to working directory
  rm temp.ts temp.js
  cd -
}

restoreIniVue () {
  NEW=$(echo $1 | sed 's/gettextIni-//')
  mv $1 $NEW
}

echo "\n\nConverting Vue files"
find ./src/ -name '*.vue' | while read vuefile; do convertVue "$vuefile"; done

echo "\n\nConverting Typescript files"
tsc ./src/main.ts

echo "\n\nExtracting translations strings"
make -f MakefileTranslations clean
make -f MakefileTranslations makemessages

echo "\n\nCleaning gettext input files"
find ./src -name "*.js" | xargs rm
find ./src -name "gettextIni-*.vue" | while read vuefile; do restoreIniVue "$vuefile"; done

echo "\n\n>>> You can now edit po files in src/locales/ then execute 'make -f MakefileTranslations translations'"
