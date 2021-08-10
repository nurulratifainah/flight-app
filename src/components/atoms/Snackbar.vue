<template>
  <v-snackbar v-model="value">
    {{ text }}

    <slot name="action"> </slot>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class BaseCard extends Vue {
  @Prop({ default: "" }) private text?: string;
  @Prop({ default: false }) private snackbar?: boolean;

  get value() {
    return this.snackbar;
  }

  set value(value) {
    this.$emit("input", value);
  }
}
</script>
