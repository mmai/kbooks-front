# kbooks-front

Front-end vuejs application for kbooks

## Project dependencies

You can create a developpement environment on nix enabled system by executing `nix-shell`

This installs: 

* gettext
* cypress (for tests)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

Configure the backend service development address in _vue.config.js_ file :
```
module.exports = {
  ...,
  devServer: {
     proxy: "http://localhost:8000"
  }
};
```
Then start with:
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run storybook
```
yarn storybook
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize Vuejs configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
