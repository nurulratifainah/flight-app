<template>
  <div class="search__wrapper">
    <div v-if="isSearch">
      <div v-if="hasOffer">
        <base-text :size="'h6'">We found best Offer for you!</base-text>
        <v-spacer />
        <flight-offer-card :offer="bestOffer"></flight-offer-card>
      </div>
      <div v-else>
        <flight-offer-empty-card />
      </div>
    </div>
    <div v-else>
      <flight-offer-default-card />
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseCard from "@/components/atoms/Card.vue";
import BaseText from "@/components/atoms/Text.vue";
import FlightOfferCard from "@/components/molecules/offers/cards/Index.vue";
import FlightOfferDefaultCard from "@/components/molecules/offers/cards/Default.vue";
import FlightOfferEmptyCard from "@/components/molecules/offers/cards/Empty.vue";

@Component({
  components: {
    BaseCard,
    BaseText,
    FlightOfferCard,
    FlightOfferDefaultCard,
    FlightOfferEmptyCard
  },
})
export default class Home extends Vue {
  get bestOffer() {
    return this.$store.state.offers.flightOffer;
  }

  get isSearch() {
    return this.$store.state.offers.isSearch
  }

  get hasOffer() {
    return Object.keys(this.bestOffer).length !== 0;
  }
}
</script>
