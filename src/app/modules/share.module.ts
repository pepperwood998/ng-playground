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
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';

import { BaseDatatableComponent } from '#components/shared/base-datatable/base-datatable.component';
import { SomeDialogComponent } from '#components/shared/some-dialog/some-dialog.component';
import { OtherDialogComponent } from '#components/shared/other-dialog/other-dialog.component';

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
  MatProgressSpinnerModule,
  MatDialogModule,
  MatExpansionModule,
  MatChipsModule
];

const COMPONENTS = [
  BaseDatatableComponent,
  SomeDialogComponent,
  OtherDialogComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, ...MATERIAL_MODULES],
  exports: [...MODULES, ...MATERIAL_MODULES, ...COMPONENTS]
})
export class ShareModule {}
