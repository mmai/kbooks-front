<template>
  <v-btn color="red">
    <v-icon>mdi-heart</v-icon>
    oo : {{ love }}
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import { VBtn, VIcon } from "vuetify/lib";

export default Vue.extend({
  components: { VBtn, VIcon },
  props: ["love"]
});
</script>
