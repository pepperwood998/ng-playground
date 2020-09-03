import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpansionPanelRoutingModule } from './expansion-panel-routing.module';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { ShareModule } from '#modules/share.module';

@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [CommonModule, ExpansionPanelRoutingModule, ShareModule]
})
export class ExpansionPanelModule {}
