<template>
  <v-card
    :color="color"
    :dark="dark"
    :elevation="elevation"
    rounded
  >
    <v-card-title class="headline">
      <slot name="title">

      </slot>
    </v-card-title>

    <v-card-subtitle>
      <slot name="subtitle">

      </slot>
    </v-card-subtitle>

    <v-card-text>
      <slot name="content">

      </slot>
    </v-card-text>

    <v-card-actions>
      <slot name="action">

      </slot>
    </v-card-actions>
  </v-card>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";


@Component({
  components: {  },
})
export default class BaseCard extends Vue {
  @Prop({ default: "#FFFFFF" }) private color?: string;
  @Prop({ default: false }) private dark?: string;
  @Prop({ default: "" }) private title?: string;
  @Prop({ default: "" }) private subtitle?: string;
  @Prop({ default: 8 }) private elevation?: number;

}
</script>