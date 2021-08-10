<template>
  <v-input
    v-model="value"
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    class="a-input"
  />
</template>

<script lang="ts">
// import { PropType, defineComponent } from "vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() private id!: string;
  @Prop() private name!: string;
  @Prop() private placeholder!: string;
  @Prop() private type!: string;

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


