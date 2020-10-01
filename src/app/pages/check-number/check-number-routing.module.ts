import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckNumberComponent } from './check-number.component';

const routes: Routes = [{ path: '', component: CheckNumberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckNumberRoutingModule { }
