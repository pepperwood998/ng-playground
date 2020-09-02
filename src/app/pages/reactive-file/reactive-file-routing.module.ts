import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFileComponent } from './reactive-file.component';

const routes: Routes = [{ path: '', component: ReactiveFileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFileRoutingModule { }
