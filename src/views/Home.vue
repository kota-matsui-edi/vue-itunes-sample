<template>
  <div class="home">
    <div class="section">
      <search-field @search="doSearch" :term="searchTerm"/>
    </div>
    <div class="section">
      <album-result-box v-for="(item, index) in boxContents" :key="index" :contents="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SearchField from '@/components/field/SearchField.vue'
import AlbumResultBox, { AlbumResultBoxProps } from '@/components/box/AlbumResultBox.vue'
import axios, { AxiosResponse } from 'axios'
import AlbumSearchResult from '@/classes/AlbumSearchResult'
@Component({
  components: {
    SearchField,
    AlbumResultBox
  }
})
export default class Home extends Vue {
  searchTerm = 'hoge'
  result: AlbumSearchResult[] = []
  get boxContents (): AlbumResultBoxProps[] {
    return this.result.map(el => el.albumBoxContents)
  }
  doSearch (term: string) {
    if (!term) return
    axios.get(`https://itunes.apple.com/search?term=${encodeURI(term)}&entity=album`).then(
      (res: AxiosResponse<{results: APIresults.ItunesSearchAPI[]}>) => {
        console.log(res)
        this.result = res.data.results.map(el => new AlbumSearchResult(el))
      }
    ).catch(err => console.log(err))
  }
}
</script>
