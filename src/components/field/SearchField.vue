<template>
  <div class="field has-addons">
    <p class="control">
      <input class="input" type="text" placeholder="search term" v-model="searchTerm">
    </p>
    <p class="control">
      <a class="button is-info" @click="doSearch">Search</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { searchItunesModule } from '@/stores/searchItunes'

@Component
export default class SearchField extends Vue {
  set searchTerm (value:string) {
    searchItunesModule.updateQuery({ term: value })
  }

  get searchTerm (): string {
    return searchItunesModule.getQuery.term
  }
  doSearch () {
    searchItunesModule.doSearch()
  }
}
</script>
