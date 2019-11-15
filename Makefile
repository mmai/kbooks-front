initTranslations:
	./makeTranslations.sh
buildTranslations:
	make -f MakefileTranslations translations
e2e:
	sudo -E yarn test:e2e
