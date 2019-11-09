import { configure, addDecorator } from '@storybook/vue';

import vuetify from "../src/plugins/vuetify";
import { VApp, VContent } from "vuetify/lib";

const vuetifyDecorator = () => {
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
};

addDecorator(vuetifyDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(t|j)s$/), module);


