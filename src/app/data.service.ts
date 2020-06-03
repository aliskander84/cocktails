import {EventEmitter, Injectable, Output} from '@angular/core'
import {ApiService} from './api.service'
import {
  TInputCategories,
  TCategories,
  TCategory,
  TInputCocktails,
  TCocktails
} from './types'

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
      this.allCategories = this.selectedCategories = drinks.map(({strCategory}) => {
        return {category: strCategory, selected: true}
      })
      this.allCategories$.emit(this.allCategories)
      this.allCategories.forEach(({category}: TCategory) => {
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
    })

  }

  selectCategories(categories: TCategories) {
    this.selectedCategories = this.allCategories.filter(({selected}: TCategory) => {
      console.log(selected)
      return selected
    })
    this.selectCocktails(this.selectedCategories)
    this.selectedCocktails$.emit(this.selectedCocktails)
  }

  selectCocktails(categories: TCategories) {
    this.selectedCocktails = this.allCocktails.filter(({category}) => {
      let isMatched = false
      categories.forEach(({category: c}: TCategory) => {
        if (c === category) {
          isMatched = true
        }
      })
      return isMatched
    })
  }

}
