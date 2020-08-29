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

const MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...MODULES, ...MATERIAL_MODULES]
})
export class ShareModule {}
