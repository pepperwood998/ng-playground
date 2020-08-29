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
    const languageData = this.fb.group({});
    this.languages.forEach((code) => {
      languageData.addControl(code, this.createLanguageForm());
    });
    this.addInforForm = this.fb.group({
      languageData
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
      this.getFieldInvalid && this.getLanguageControl(field, code).errors?.required
    );
  }

  getMinLengthError(field: string, code: string): boolean {
    return (
      !this.getRequiredError(field, code) &&
      this.getLanguageControl(field, code).errors?.minlength
    );
  }

  getBadWordError(field: string, code: string): boolean {
    return (
      !this.getMinLengthError(field, code) &&
      this.getLanguageControl(field, code).errors?.badWord
    );
  }

  getFieldInvalid(field: string, code: string): boolean {
    const control = this.getLanguageControl(field, code);
    return control.invalid && (control.touched || control.dirty);
  }

  getLanguageControl(field: string, code: string): FormControl {
    return this.getSingleLanguageDataForm(code).get(field) as FormControl;
  }

  getSingleLanguageDataForm(code: string): FormGroup {
    return this.languageDataForm.get(code) as FormGroup;
  }

  get languageDataForm(): FormGroup {
    return this.addInforForm.get('languageData') as FormGroup;
  }
}
