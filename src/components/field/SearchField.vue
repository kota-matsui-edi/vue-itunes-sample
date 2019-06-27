<template>
  <div class="field has-addons">
    <p class="control">
      <input class="input" type="text" placeholder="Find a repository" v-model="serchTerm">
    </p>
    <p class="control">
      <a class="button is-info" @click="$emit('search', serchTerm)">Search</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class SearchField extends Vue {
  @Prop({ default: '' }) private readonly term!:string

  serchTerm = ''

  @Watch('term', { immediate: true })
  onChangeTerm () {
    this.serchTerm = this.term
  }
}
</script>
