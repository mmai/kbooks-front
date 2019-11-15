# Translations

Cf.  https://github.com/Polyconseil/vue-gettext

## Workflow

* Annotate strings
  * `<translate>My string</translate>` or `<span v-translate>My string</span>`
  * `<translate>Hello %{ name }</translate>` 
  * `this.$gettext("My string")`
* extract with `make initTranslations`
* translate in *.po files
* compile translations with `make buildTranslations`
