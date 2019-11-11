initTranslations:
	make -f MakefileTranslations makemessages
e2e:
	sudo -E yarn test:e2e
