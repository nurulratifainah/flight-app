<template>
  <div class="home">
    <v-container class="white lighten-5 px-5 py-5">
      <div class="wrapper">
        <div class="headline mb-8">
          <base-text size="h5" align="center">Everyday is a Low Price!</base-text>
        </div>
        <v-spacer />
        <search-form />
        <div class="mt-10">
          <search-result />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseText from "@/components/atoms/Text.vue";
import SearchForm from "@/components/organism/offers/SearchForm.vue";
import SearchResult from "@/components/organism/offers/SearchResult.vue";

@Component({
  components: {
    BaseText,
    SearchForm,
    SearchResult,
  },
})
export default class Home extends Vue {}
</script>
