import {Component, OnInit} from '@angular/core'
import {DataService} from '../data.service'
import {TCocktails} from '../types'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private data: DataService) {
  }

  cocktails: TCocktails = []

  ngOnInit() {
    this.data.selectedCocktails$.subscribe(cocktails => {
      this.cocktails = cocktails
    })
  }

}
