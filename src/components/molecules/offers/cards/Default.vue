<template>
  <base-card>
    <template slot="content">
      <base-text :weight="'bold'">
        Enter your destinations and date to see exiting offers!
      </base-text>
    </template>
  </base-card>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseCard from "@/components/atoms/Card.vue";
import BaseText from "@/components/atoms/Text.vue";

@Component({
  components: {
    BaseCard,
    BaseText,
  },
})
export default class FlightOfferDefaultCard extends Vue {

}
</script>