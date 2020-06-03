export type TInputCategories = {
  'drinks': Array<{strCategory: string}>
}

export type TInputCocktails = {
  'drinks': Array<{strDrink: string, strDrinkThumb: string, idDrink: string}>
}

export type TCategories = TCategory[]

export type TCategory = {category: string, selected: boolean}

export type TCocktails = {category: string, cocktails: TCocktail[]}[]

export type TCocktail = {name: string, thumb: string}
