import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filters = [
    {title: 'Mfilter 1', selected: true},
    {title: 'Mfilter 1', selected: true},
    {title: 'filter 1', selected: false},
    {title: 'filter 1', selected: true},
    {title: 'filter 1', selected: true},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
