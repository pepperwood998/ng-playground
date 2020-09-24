import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource
} from '@angular/material/tree';

import { Category, FlatNode } from '#models/demo.model';

const DATA: Category[] = [
  {
    id: 1,
    name: 'Category 1',
    subCategories: [
      {
        id: 11,
        name: 'Sub-category 1.1'
      },
      {
        id: 12,
        name: 'Sub-category 1.2'
      }
    ]
  },
  {
    id: 2,
    name: 'Category 2',
    subCategories: [
      {
        id: 21,
        name: 'Sub-category 2.1'
      }
    ]
  }
];

@Component({
  selector: 'app-mat-tree-category',
  templateUrl: './mat-tree-category.component.html',
  styleUrls: ['./mat-tree-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatTreeCategoryComponent implements OnInit {
  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.subCategories
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  selectedCategoryId: number;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = DATA;
  }

  onCategorySelected(category: Category): void {
    this.selectedCategoryId = category?.id;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  private _transformer(node: Category, level: number): FlatNode {
    return {
      expandable: !!node.subCategories && node.subCategories.length > 0,
      level,
      ...node
    };
  }
}
