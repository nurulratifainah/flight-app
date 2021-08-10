<template>
  <base-card>
    <template slot="content">
      <form>
        <v-row data-testid="airpots-row">
          <v-col cols="12" sm="6">
            <city-select data-testid="origin"
              :label="'Departure Airport'"
               :excluded="excludedOriginCity"
              v-model="origin"
            ></city-select>
          </v-col>
          <v-col>
            <city-select data-testid="destination"
              :label="'Destination Airport'"
              v-model="destination"
               :excluded="excludedDestinationCity"
            ></city-select>
          </v-col>
        </v-row>
        <v-row data-testid="date-row">
          <v-col cols="12" sm="6">
            <base-date-picker
                v-model="returnDate" :label="'Departure date'"></base-date-picker>
          </v-col>
          <v-col>
            <base-date-picker v-model="returnDate" :label="'Return date'"></base-date-picker>
          </v-col>
        </v-row>
        <v-row align="left" no-gutters>
          <base-button :color="'primary'" @click="onClickSearch" :block="false" data-testid="submit"
            >Search Flight</base-button
          >
        </v-row>
        <search-snackbar :snackbar="isDirty" @onClose="onClose" data-testid="snackbar"/>
      </form>
    </template>
  </base-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseCard from "@/components/atoms/Card.vue";
import BaseButton from "@/components/atoms/Input/Button.vue"; // @ is an alias to /src
import BaseSelect from "@/components/atoms/Input/Select.vue"; // @ is an alias to /src
import BaseDatePicker from "@/components/atoms/Input/DatePicker.vue";
import CitySelect from "@/components/molecules/AirportSelectField.vue";
import SearchSnackbar from "@/components/molecules/offers/Snackbar.vue";

@Component({
  components: {
    BaseCard,
    BaseButton,
    BaseSelect,
    BaseDatePicker,
    CitySelect,
    SearchSnackbar
  },
})
export default class SearchForm extends Vue {
  isDirty = false;

  get origin() {
    return this.$store.state.offers.search.origin;
  }

  set origin(value) {
    this.$store.commit("offers/setOrigin", value);
  }

  get excludedOriginCity(){
    return  [this.destination]
  }

  get destination() {
    return this.$store.state.offers.search.destination;
  }

  set destination(value) {
    this.$store.commit("offers/setDestination", value);
  }

  get excludedDestinationCity(){
    return  [this.origin]
  }

  get departureDate() {
    return this.$store.state.offers.search.departureDate;
  }

  set departureDate(value) {
    this.$store.commit("offers/setDepartureDate", value);
  }

  get returnDate() {
    return this.$store.state.offers.search.returnDate;
  }

  set returnDate(value) {
    this.$store.commit("offers/setReturnDate", value);
  }

  onClickSearch() {
    if(!this.$store.getters["offers/isSearch"]){
      this.isDirty = true
      return false
    }
    this.$store.dispatch("offers/getFlightOffers");
  }

  onClose(){
    this.isDirty = false
  }
}
</script>
