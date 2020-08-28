import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { cleanFilterValidator } from '#shared/validators/clean-filter.validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addInforForm: FormGroup;
  languages: string[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.languages = ['ja', 'en'];
    const languageForms = this.fb.group({});
    this.languages.forEach((code) => {
      languageForms.addControl(code, this.createLanguageForm());
    });
    this.addInforForm = this.fb.group({
      languageForms
    });
  }

  onSubmit(): void {
    console.log(this.addInforForm.value);
  }

  createLanguageForm(): FormGroup {
    return this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          cleanFilterValidator(/fucks/i)
        ]
      ],
      content: ['', [Validators.required]]
    });
  }

  getRequiredError(field: string, code: string): boolean {
    return (
      this.getFieldInvalid && this.getControl(field, code).errors?.required
    );
  }

  getMinLengthError(field: string, code: string): boolean {
    return (
      !this.getRequiredError(field, code) &&
      this.getControl(field, code).errors?.minlength
    );
  }

  getBadWordError(field: string, code: string): boolean {
    return (
      !this.getMinLengthError(field, code) &&
      this.getControl(field, code).errors?.badWord
    );
  }

  getFieldInvalid(field: string, code: string): boolean {
    const control = this.getControl(field, code);
    return control.invalid && (control.touched || control.dirty);
  }

  getControl(field: string, code: string): FormControl {
    return this.getLanguageForm(code).get(field) as FormControl;
  }

  getLanguageForm(code: string): FormGroup {
    return this.languageForms.get(code) as FormGroup;
  }

  get languageForms(): FormGroup {
    return this.addInforForm.get('languageForms') as FormGroup;
  }
}
