import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  rows: any[];

  constructor() {}

  ngOnInit(): void {
    this.rows = [
      {
        name: 'Ethel Price',
        gender: 'female',
        age: 22
      },
      {
        name: 'Claudine Neal',
        gender: 'female',
        age: 55
      },
      {
        name: 'Beryl Rice',
        gender: 'female',
        age: 67
      }
    ];
  }
}
