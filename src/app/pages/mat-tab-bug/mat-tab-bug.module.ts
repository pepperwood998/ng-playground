import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabBugRoutingModule } from './mat-tab-bug-routing.module';
import { MatTabBugComponent } from './mat-tab-bug.component';
import { ShareModule } from '#modules/share.module';

@NgModule({
  declarations: [MatTabBugComponent],
  imports: [CommonModule, MatTabBugRoutingModule, ShareModule]
})
export class MatTabBugModule {}
