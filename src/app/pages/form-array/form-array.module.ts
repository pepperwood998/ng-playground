import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormArrayRoutingModule } from './form-array-routing.module';
import { FormArrayComponent } from './form-array.component';
import { ShareModule } from '#modules/share.module';

@NgModule({
  declarations: [FormArrayComponent],
  imports: [CommonModule, FormArrayRoutingModule, ShareModule]
})
export class FormArrayModule {}
