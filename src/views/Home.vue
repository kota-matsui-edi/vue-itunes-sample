<template>
  <div class="home">
    <div class="section">
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Find a repository" v-model="serchTerm">
        </p>
        <p class="control">
          <a class="button is-info" @click="doSearch">Search</a>
        </p>
      </div>
    </div>
    <div class="section">
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64"> <img alt="Image" src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p> <strong> John Smith </strong> <small> @johnsmith </small> <small> 31m </small>
            <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          </p>
        </div>
        <nav class="level">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"> <i class="fa fa-reply"> </i> </span>
            </a>
            <a class="level-item">
              <span class="icon is-small"> <i class="fa fa-retweet"> </i> </span>
            </a>
            <a class="level-item">
              <span class="icon is-small"> <i class="fa fa-heart"> </i> </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
    </div>
    {{result}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import axios from 'axios'
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  serchTerm = ''
  result: any[] = []
  doSearch () {
    if (!this.serchTerm) return
    console.log(`https://itunes.apple.com/search?term=${encodeURI(this.serchTerm)}&entity=album`)
    axios.get(`https://itunes.apple.com/search?term=${encodeURI(this.serchTerm)}&entity=album`).then(
      res => {
        console.log(res)
        this.result = res.data.results
      }
    ).catch(err => console.log(err))
  }
}
</script>
