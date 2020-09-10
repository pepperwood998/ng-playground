import { Component, OnInit } from '@angular/core';

import { quillConfig } from '#utils/quill.config';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get quillConfig(): any {
    return quillConfig;
  }
}
