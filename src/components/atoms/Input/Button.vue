<template>
  <v-btn
    :block="block"
    :color="color"
    elevation="2"
    @click="onClick"
  >
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
// import { PropType, defineComponent } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ default: true }) private block!: boolean;
  @Prop() private color!: string;

  onClick(){
    this.$emit("click");
  }
}
</script>


