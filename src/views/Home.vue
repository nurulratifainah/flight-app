<template>
  <div class="home">
    <v-container class="white lighten-5 px-5 py-5">
      <search-form />
      <div class="mt-10">
        <search-result />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchForm from "@/components/organism/offers/SearchForm.vue";
import SearchResult from "@/components/organism/offers/SearchResult.vue";

@Component({
  components: {
    SearchForm,
    SearchResult,
  },
})
export default class Home extends Vue {}
</script>
