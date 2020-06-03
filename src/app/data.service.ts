import {EventEmitter, Injectable, Output} from '@angular/core'
import {ApiService} from './api.service'
import {TInputCategories, TCategories, TCategory, TInputCocktails, TCocktails} from './types'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private api: ApiService) {
  }

  allCategories: TCategories = []
  selectedCategories: TCategories = []
  allCocktails: TCocktails = []
  selectedCocktails: TCocktails = []

  @Output() allCategories$ = new EventEmitter()
  @Output() selectedCategories$ = new EventEmitter()
  @Output() selectedCocktails$ = new EventEmitter()

  getData() {
    this.api.getCategories().subscribe(({drinks}: TInputCategories) => {
      // console.log('getCategories')
      this.allCategories = this.selectedCategories = drinks.map(({strCategory}) => {
        return {category: strCategory, selected: true}
      })
      this.allCategories$.emit(this.allCategories)
      this.allCategories.forEach(({category}: TCategory) => {
        // console.log('forEach')
        this.api.getCocktails(category).subscribe(({drinks}: TInputCocktails) => {
          this.allCocktails.push({
            category,
            cocktails: drinks.map(({strDrink, strDrinkThumb}) => {
              return {name: strDrink, thumb: strDrinkThumb}
            })
          })
          this.selectedCocktails$.emit(this.allCocktails)
        })
      })
      // console.log(this.allCocktails)
      // this.selectedCategories$.emit(this.selectedCategories)
      // console.log(this.selectedCategories)
    })

  }

  selectCategories(categories: TCategories) {
    this.selectedCategories = this.allCategories.filter(({selected}: TCategory) => {
      return selected
    })
    this.selectedCategories$.emit(this.selectedCategories)
  }


}
