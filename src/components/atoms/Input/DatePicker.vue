<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="value"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="value"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="value"
      no-title
      scrollable
      :allowed-dates="disablePastDates"
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(value)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>


<script lang="ts">
import { Component, Watch, Vue, Prop } from "vue-property-decorator";

@Component
export default class DatePicker extends Vue {
  @Prop({ default: true }) private disablePastDate!: string;
  @Prop({ default: "Select date" }) private label!: string;
  newValue = ""
  menu = false


  get value(){
    return this.newValue
  }

  set value(value){
    this.newValue = value
    this.$emit('input', value)
  }

  disablePastDates(val: any) {
    return this.disablePastDate ? val >= new Date().toISOString().substr(0, 10) : true
  }

  @Watch('newValue')
  onUpdateValue(value: string) {
    this.newValue = value;
  }
}
</script>