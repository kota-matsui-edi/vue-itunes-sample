import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import store from '@/store';
import AlbumSearchResult from '@/classes/AlbumSearchResult';
import axios, { AxiosResponse } from 'axios'

@Module({ dynamic: true, store, name: 'searchItunes', namespaced: true })
class SearchItunesModule extends VuexModule {
  private result: AlbumSearchResult[] = [];
  private query: APIresults.ItunesSearchQueryAPI = {
    term: '',
    country: 'jp'
  }
  private loading: boolean = false

  get getResult(): AlbumSearchResult[] {
    return this.result
  }

  get getQuery(): APIresults.ItunesSearchQueryAPI {
    return this.query
  }

  get getLoading(): boolean {
    return this.loading
  }

  @Mutation
  setQuery(value: APIresults.ItunesSearchQueryAPI) {
    this.query = value
  }

  @Mutation
  updateQuery(value: Partial<APIresults.ItunesSearchQueryAPI>) {
    Object.assign(this.query, value)
  }

  @Mutation
  private setResult(value: AlbumSearchResult[]) {
    this.result = value
  }

  @Mutation
  private setLoading(value: boolean) {
    this.loading = value
  }

  @Action
  doSearch() {
    this.setLoading(true)
    axios.get(`https://itunes.apple.com/search`, {params: this.query}).then(
      (res: AxiosResponse<{results: APIresults.ItunesSearchAPI[]}>) => {
        console.log(res)
        const result = res.data.results.map(el => new AlbumSearchResult(el))
        this.setResult(result)
      }
    )
    .catch(err => console.log(err))
    .finally(()=>{
      this.setLoading(false)
    })
  }

}
export const searchItunesModule = getModule(SearchItunesModule);
