import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ContentChildren,
  QueryList
} from '@angular/core';
import {
  DatatableComponent,
  DataTableColumnDirective
} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-base-datatable',
  templateUrl: './base-datatable.component.html',
  styleUrls: ['./base-datatable.component.scss']
})
export class BaseDatatableComponent implements OnInit {
  @Input() rows: any[];
  @ViewChild(DatatableComponent) datatable: DatatableComponent;
  @ContentChildren(DataTableColumnDirective) val: QueryList<
    DataTableColumnDirective
  >;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.datatable.columnTemplates = this.val;
    });
  }
}
