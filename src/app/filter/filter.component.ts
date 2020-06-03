import {Component, OnInit} from '@angular/core'
import {DataService} from '../data.service'
import {TCategories} from '../types'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private data: DataService) {
  }

  categories: TCategories = []

  ngOnInit() {
    this.data.getData()
    this.data.allCategories$.subscribe((categories: TCategories) => {
      this.categories = categories
    })
  }

  apply() {
    this.data.selectCategories(this.categories)
  }

}
