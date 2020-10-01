import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckNumberRoutingModule } from './check-number-routing.module';
import { CheckNumberComponent } from './check-number.component';
import { ShareModule } from '#modules/share.module';

@NgModule({
  declarations: [CheckNumberComponent],
  imports: [CommonModule, CheckNumberRoutingModule, ShareModule]
})
export class CheckNumberModule {}
