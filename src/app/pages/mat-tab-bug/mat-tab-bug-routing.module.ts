import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatTabBugComponent } from './mat-tab-bug.component';

const routes: Routes = [{ path: '', component: MatTabBugComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatTabBugRoutingModule { }
