import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillEditorRoutingModule } from './quill-editor-routing.module';
import { QuillEditorComponent } from './quill-editor.component';
import { ShareModule } from '#modules/share.module';

@NgModule({
  declarations: [QuillEditorComponent],
  imports: [CommonModule, QuillEditorRoutingModule, ShareModule]
})
export class QuillEditorModule {}
