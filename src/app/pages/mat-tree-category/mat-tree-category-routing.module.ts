import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatTreeCategoryComponent } from './mat-tree-category.component';

const routes: Routes = [{ path: '', component: MatTreeCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatTreeCategoryRoutingModule { }
