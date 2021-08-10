<template>
  <div
    :class="[`text-${size}`,`font-weight-${weight}`, `text-${align}`, `${color}--text`]"
  >
    <slot></slot>
  </div>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";


@Component({
  components: {  },
})
export default class BaseCard extends Vue {
  @Prop({ default: "" }) private color?: string;
  @Prop({ default: "body-2" }) private size?: string;
  @Prop({ default: "" }) private align?: string;
  @Prop({ default: "regular" }) private weight?: string;

}
</script>