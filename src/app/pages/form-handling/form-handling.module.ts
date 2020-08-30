import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormHandlingRoutingModule } from './form-handling-routing.module';
import { FormHandlingComponent } from './form-handling.component';
import { ShareModule } from '#modules/share.module';


@NgModule({
  declarations: [FormHandlingComponent],
  imports: [
    CommonModule,
    FormHandlingRoutingModule,
    ShareModule
  ]
})
export class FormHandlingModule { }
