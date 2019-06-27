import AlbumResultContents from './AlbumResultContents';

export default class AlbumSearchResult {
  result: APIresults.ItunesSearchAPI
  constructor(init: APIresults.ItunesSearchAPI) {
    this.result = init
  }
  get albumBoxContents (): AlbumResultContents {
    return {
      artistName: this.result.artistName,
      albumName: this.result.collectionName,
      albumArt: this.result.artworkUrl100,
      genre: this.result.primaryGenreName
    }
  }
}
