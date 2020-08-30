import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BaseDatatableComponent } from '#components/shared/base-datatable/base-datatable.component';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgxDatatableModule,
  HttpClientModule
];

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatProgressSpinnerModule
];

const COMPONENTS = [BaseDatatableComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, ...MATERIAL_MODULES],
  exports: [...MODULES, ...MATERIAL_MODULES, ...COMPONENTS]
})
export class ShareModule {}
