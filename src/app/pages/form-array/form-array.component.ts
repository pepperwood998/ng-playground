import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { applyUpdateFields } from '#utils/helper.ts';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  myForm: FormGroup;
  languages = ['ja', 'kr', 'en', 'cn'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const nameTranslations = this.fb.array([]);
    this.languages.forEach((language) => {
      nameTranslations.push(this.createTranslationForm(language));
    });
    this.myForm = this.fb.group({
      nameTranslations
    });
  }

  createTranslationForm(code: string): FormGroup {
    return this.fb.group({
      name: ['hello', [Validators.required]],
      languageCode: [code]
    });
  }

  onSubmit(): void {
    const updatedValue = {};
    applyUpdateFields(this.myForm, updatedValue);
    console.log(updatedValue);
  }

  get nameTranslations(): FormArray {
    return this.myForm.get('nameTranslations') as FormArray;
  }
}
