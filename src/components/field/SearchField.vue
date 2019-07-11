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
  beforeCreate () {
    alert('beforeCreate SearchField.vue')
  }
  created () {
    alert('created SearchField.vue')
  }
  beforeMount () {
    alert('beforeMount SearchField.vue')
  }
  mounted () {
    alert('mounted SearchField.vue')
  }
  beforeUpdate () {
    alert('beforeUpdate SearchField.vue')
  }
  updated () {
    alert('updated SearchField.vue')
  }
  beforeDestroy () {
    alert('beforeDestroy SearchField.vue')
  }
  destroyed () {
    alert('destroyed SearchField.vue')
  }
  @Watch('term', { immediate: true })
  onChangeTerm () {
    this.serchTerm = this.term
  }
}
</script>
