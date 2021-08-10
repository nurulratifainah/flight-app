<template>
  <base-select
    v-model="value"
    :label="label"
    :items="airports"
    :item-text="'text'"
    :item-value="'value'"
  >
  </base-select>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import BaseSelect from "@/components/atoms/Input/Select.vue"
import { Airport } from "@/store/modules/airport/state";

@Component({
  components: {
    BaseSelect
  }
})
export default class CitySelect extends Vue {

  @Prop() private label!: string;
  @Prop({default: () => []}) private excluded!: string[];
  newValue = ""

  mounted(){
    this.$store.dispatch("airports/getAirports");
  }

  get airports(){
    return this.$store.state.airports.airports
        .filter((airport: Airport) => {
          return !this.excluded.includes(airport.iata_code)
        })
        .map((airport: Airport) => {
          return {
            city: airport.city,
            value: airport.iata_code,
            text: `${airport.city} - ${airport.iata_code}`
          }
        })
        .sort((a: Airport, b:Airport) => {
           return a.city.localeCompare(b.city)
        })
  }

  get value(){
    return this.newValue
  }

  set value(value){
    this.newValue = value
    this.$emit('input', value)
  }


  @Watch('newValue')
  onUpdateValue(value: string) {
    this.newValue = value;
  }


}
</script>


