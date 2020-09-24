import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTreeCategoryRoutingModule } from './mat-tree-category-routing.module';
import { MatTreeCategoryComponent } from './mat-tree-category.component';
import { ShareModule } from '#modules/share.module';

@NgModule({
  declarations: [MatTreeCategoryComponent],
  imports: [CommonModule, MatTreeCategoryRoutingModule, ShareModule]
})
export class MatTreeCategoryModule {}
