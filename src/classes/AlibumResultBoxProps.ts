export default class AlbumResultBoxProps {
  public artistName = ''
  public albumName = ''
  public genre = ''
  public albumArt = ''
  constructor (init?:AlbumResultBoxProps) {
    Object.assign(this, init)
  }
}
