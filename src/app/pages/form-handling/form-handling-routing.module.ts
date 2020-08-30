import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormHandlingComponent } from './form-handling.component';

const routes: Routes = [{ path: '', component: FormHandlingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormHandlingRoutingModule { }
