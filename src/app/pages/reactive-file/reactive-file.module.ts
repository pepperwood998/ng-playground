import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFileRoutingModule } from './reactive-file-routing.module';
import { ReactiveFileComponent } from './reactive-file.component';
import { ShareModule } from '#modules/share.module';

@NgModule({
  declarations: [ReactiveFileComponent],
  imports: [CommonModule, ReactiveFileRoutingModule, ShareModule]
})
export class ReactiveFileModule {}
