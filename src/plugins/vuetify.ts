import Vue from "vue";
import Vuetify, { VFlex, VLayout, VContainer, VImg } from "vuetify/lib";

Vue.use(Vuetify, {
  components: { VFlex, VLayout, VContainer, VImg }
});

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  }
});
