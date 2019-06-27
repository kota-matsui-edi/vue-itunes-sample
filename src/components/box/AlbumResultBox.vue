<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64"> <img alt="Image" :src="albumArt">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p> <strong> {{albumName}} </strong> <small> {{artistName}} </small> <small> {{genre}} </small>
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
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AlbumResultContents from '@/classes/AlbumResultContents'
@Component
export default class AlbumResultBox extends Vue {
  @Prop({ default: ():AlbumResultContents => new AlbumResultContents() }) private readonly contents!:AlbumResultContents

  get artistName (): string {
    return this.contents.artistName
  }

  get albumName (): string {
    return this.contents.albumName
  }

  get genre (): string {
    return this.contents.genre
  }

  get albumArt (): string {
    return this.contents.albumArt
  }
}
</script>
