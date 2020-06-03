import {EventEmitter, Injectable, Output} from '@angular/core'
import {ApiService} from './api.service'
import {TInputCategories, TCategories, TCategory} from './types'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private api: ApiService) {
  }

  allCategories: TCategories = []
  selectedCategories: TCategories = []

  @Output() categories$ = new EventEmitter<TCategories>()

  getCategories() {
    this.api.getCategories().subscribe(({drinks}: TInputCategories) => {
      this.allCategories = this.selectedCategories = drinks.map(({strCategory}) => {
        return {category: strCategory, selected: true}
      })
      this.categories$.emit(this.allCategories)
      // console.log(this.selectedCategories)
    })
  }

  selectCategories(categories: TCategories) {
    this.selectedCategories = this.allCategories.filter(({selected}: TCategory) => {
      return selected
    })
    // console.log(this.selectedCategories)
  }

}
