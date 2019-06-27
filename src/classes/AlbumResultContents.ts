export default class AlbumResultContents {
  public artistName = ''
  public albumName = ''
  public genre = ''
  public albumArt = ''
  constructor(init?:AlbumResultContents) {
    Object.assign(this, init)
  }
}
