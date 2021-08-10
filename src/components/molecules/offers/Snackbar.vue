<template>
  <base-snackbar :text="'Please  fill up  all fields'" :snackbar="snackbar" @input="onClose">
    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="onClose"
      >
        Close
      </v-btn>
    </template>
  </base-snackbar>
</template>

<script  lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import BaseSnackbar from "@/components/atoms/Snackbar.vue";

@Component({
  components: {
    BaseSnackbar
  },
})
export default class SearchSnackbar extends Vue {

  @Prop({ default: "" }) private snackbar?: boolean;

  onClose(){
    this.$emit('onClose')
  }

}
</script>