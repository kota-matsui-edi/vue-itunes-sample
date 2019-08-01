<template>
  <div class="home">
    <div class="section">
      <drop-down :field="'media'" :options="mediaOptions" :title="'Media'" />
      <search-field/>
    </div>
    <div class="section">
      <div class="buttons" v-if="loading">
        <a class="button is-loading"> Loading </a>
      </div>
      <album-result-box v-else v-for="(item, index) in boxContents" :key="index" :contents="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SearchField from '@/components/field/SearchField.vue'
import DropDown from '@/components/field/DropDown.vue'

import AlbumResultBox from '@/components/box/AlbumResultBox.vue'
import AlbumResultBoxProps from '@/classes/AlibumResultBoxProps'

import AlbumSearchResult from '@/classes/AlbumSearchResult'

import { searchItunesModule } from '@/stores/searchItunes'
@Component({
  components: {
    SearchField,
    DropDown,
    AlbumResultBox
  }
})
export default class Home extends Vue {
  mediaOptions: VueSelectOption[] = [
    { text: '-', value: '' },
    { text: 'movie', value: 'movie' },
    { text: 'podcast', value: 'podcast' },
    { text: 'music', value: 'music' },
    { text: 'musicVideo', value: 'musicVideo' },
    { text: 'audiobook', value: 'audiobook' },
    { text: 'shortFilm', value: 'shortFilm' },
    { text: 'tvShow', value: 'tvShow' },
    { text: 'software', value: 'software' },
    { text: 'ebook', value: 'ebook' },
    { text: 'all', value: 'all' }
  ]
  get boxContents (): AlbumResultBoxProps[] {
    return this.result.map(el => el.albumBoxContents)
  }

  get result () {
    return searchItunesModule.getResult
  }

  get loading () {
    return searchItunesModule.getLoading
  }
}
</script>
