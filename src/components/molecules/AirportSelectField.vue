<template>
  <base-select
    v-model="value"
    :label="label"
    :items="aiports"
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
  newValue = ""

  mounted(){
    this.$store.dispatch("airports/getAirports");
  }

  get aiports(){
    return this.$store.state.airports.airports.map((airport: Airport) => {
      return {
        value: airport.iata_code,
        text: `${airport.city} - ${airport.iata_code}`
      }
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


