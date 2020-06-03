import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  apis = {
    filters: '/list.php?c=list',
    cocktails: '/filter.php?c='
  }

  getCategories() {
    return this.http.get(`${environment.apiUrl}${this.apis.filters}`)
  }

  getCocktails(category) {
    return this.http.get(`${environment.apiUrl}${this.apis.cocktails}${category}`)
  }
}
