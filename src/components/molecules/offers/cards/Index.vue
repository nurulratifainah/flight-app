<template>
  <base-card v-if="offer" :elevation="2">
    <template slot="content">
      <v-row :align="'center'">
        <v-col>
          <base-text
            >{{ offer.origin }} - {{ offer.destination }}</base-text
          >
          <base-text>Depart: 1 Aug 2020</base-text>
          <base-text>Return: 10 Aug 2020</base-text>
        </v-col>
        <v-col class="hidden-sm-and-down">
          <base-text>{{ offer.seatAvailability }} seat available</base-text>
        </v-col>
        <v-col>
          <base-text :size="'h5'"
            >{{ offer.price.currency }}
            {{ offer.price.amount }}</base-text
          >
        </v-col>
      </v-row>
    </template>

    <template slot="action">
      <v-btn text class="hidden-md-and-up">{{offer.seatAvailability}} seat available</v-btn>
    </template>
  </base-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseCard from "@/components/atoms/Card.vue";
import BaseText from "@/components/atoms/Text.vue";
import { FlightOffer } from "@/store/modules/offers/state";

@Component({
  components: {
    BaseCard,
    BaseText,
  },
})
export default class FlightOfferCard extends Vue {

  @Prop({ required: true }) private offer!: FlightOffer;
}
</script>
