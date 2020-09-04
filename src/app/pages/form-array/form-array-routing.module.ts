import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormArrayComponent } from './form-array.component';

const routes: Routes = [{ path: '', component: FormArrayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormArrayRoutingModule { }
