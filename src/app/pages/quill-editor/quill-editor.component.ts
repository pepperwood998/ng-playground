import { Component, OnInit } from '@angular/core';

import { quillConfig } from '#utils/quill.config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      order: [1, [Validators.pattern('^[0-9]*$')]]
    });
  }

  get quillConfig(): any {
    return quillConfig;
  }

  onEnter(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
