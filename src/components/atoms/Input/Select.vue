<template>
  <v-select
    v-model="value"
    :items="items"
    menu-props="auto"
    hide-details
    :label="label"
    :item-text="itemText"
    :item-value="itemValue"
    single-line
  ></v-select>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Select extends Vue {
  @Prop() private id!: string;
  @Prop() private name!: string;
  @Prop() private label!: string;
  @Prop() private items!: [];
  @Prop() private itemText!: string;
  @Prop() private itemValue!: string;

  newValue = ""


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


