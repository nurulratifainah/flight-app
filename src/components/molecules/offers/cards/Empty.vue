<template>
  <base-card>
    <template slot="content">
      <base-text>
        Oops! We don’t have any flights on this date. Try selecting another date. Who
        knows? You might just find a great deal.
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
export default class FlightOfferEmptyCard extends Vue {

}
</script>