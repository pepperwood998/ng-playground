import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatatableRoutingModule } from './datatable-routing.module';
import { DatatableComponent } from './datatable.component';
import { ShareModule } from '#modules/share.module';


@NgModule({
  declarations: [DatatableComponent],
  imports: [
    CommonModule,
    DatatableRoutingModule,
    ShareModule
  ]
})
export class DatatableModule { }
