<template>
  <div class="field">
        <label class="label">{{title}}</label>
        <p class="control">
          <span class="select">
            <select v-model="value">
              <option v-for="(option, key) in options" :key="key" :value="option.value">{{option.text}}</option>
            </select>
          </span>
        </p>
      </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { searchItunesModule } from '@/stores/searchItunes'
type Fiild = keyof APIresults.ItunesSearchQueryAPI
@Component
export default class DropDown extends Vue {
    @Prop({ default: '', type: String }) private readonly field!: Fiild
    @Prop({ default: '', type: String }) private readonly title!: string
    @Prop({ default: [], type: Array }) private readonly options!: VueSelectOption[]

    set value (value:string) {
      searchItunesModule.updateQuery({ [this.field]: value })
    }

    get value (): string {
      const result = searchItunesModule.getQuery[this.field]
      if (typeof result === 'string') {
        return result
      } else if (typeof result === 'number') {
        return result.toString()
      } else {
        return ''
      }
    }
}
</script>
