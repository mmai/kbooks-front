# Journal

We start from commit _d5aa7c914da0850508c_ : working installation of vue + typescript + vuetify, unit and e2e tests pass ( essentially following https://habr.com/en/post/438354/ )

## Storybook

```
npx -p @storybook/cli sb init
```

add typescript support : 

edit _.storybook/config.js_ : stories.js => stories.(t|j)s

add vuetify support : 

- edit _.storybook/config.js_ : 
  - add line `import vuetify from '../src/plugins/vuetify';`
  - and add decorator : 
   ```
import { VApp, VContent } from "vuetify/lib";
addDecorator( () => {
  return {
    vuetify,
    components: { VApp, VContent },
    template: `
      <v-app>
          <v-content>
            <story/>
          </v-content>
      </v-app>
    `
  };
});
   ```
- add .storybook/webpack.config.js
- add .storybook/preview-head.html

### add storybook testing :

    yarn add -D @storybook/addon-storyshots jest-vue-preprocessor babel-plugin-require-context-hook

babel.config.js : 
```
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  ...(api.env("test") && { plugins: ["require-context-hook"] })
};
```

jest.config.js : 
```
module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFiles: ["./tests/jest-setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(vuetify/|@storybook/.*\\.vue$))" // don't ignore vuetify and storybook
  ]
};
```
