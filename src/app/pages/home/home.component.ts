import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

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
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  getRequiredError(field: string, code: string): boolean {
    const validator = this.getControl(field, code).validator(
      {} as AbstractControl
    );
    return this.getFieldInvalid && validator?.required;
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
