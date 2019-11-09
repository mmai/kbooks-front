import LoveButton from "../src/components/LoveButton.vue";

export default {
  title: "LoveButton"
};

export const love = () => ({
  components: { LoveButton },
  template: `<love-button love="vue"/>`
});
