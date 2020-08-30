import { Component, OnInit, AfterContentInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { cleanFilterValidator } from '#shared/validators/clean-filter.validator';
import { InformationService } from '#shared/services/information.service';
import { Information } from '#models/information.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.scss']
})
export class FormHandlingComponent implements OnInit {
  addInforForm: FormGroup;
  categories: { value: string; name: string }[];
  languages: string[];
  id: number;
  loading: boolean;
  information: Observable<Information>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private informationService: InformationService
  ) {}

  ngOnInit(): void {
    this.categories = [
      {
        value: 'policy',
        name: 'Policy'
      },
      {
        value: 'promotion',
        name: 'Promotion'
      },
      {
        value: 'references',
        name: 'References'
      }
    ];
    this.languages = ['ja', 'en'];
    const languageData = this.fb.group({});
    this.languages.forEach((code) => {
      languageData.addControl(code, this.createLanguageForm());
    });
    this.addInforForm = this.fb.group({
      category: ['', Validators.required],
      languageData,
      public: [true, Validators.required]
    });

    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.loading = true;
      this.informationService
        .getInformation(this.id)
        .pipe(tap((information) => this.addInforForm.patchValue(information)))
        .subscribe(() => {
          this.loading = false;
        });
    }
  }

  onSubmit(): void {
    console.log(this.addInforForm.value);
  }

  cancelAddInfor(e): void {
    e.preventDefault();
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

  // General input validation
  getControlInvalid(control: FormControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  getRequiredError(control: FormControl): boolean {
    return this.getControlInvalid(control) && control.errors?.required;
  }

  getMinLengthError(control: FormControl): boolean {
    return !this.getRequiredError(control) && control.errors?.minlength;
  }

  getBadWordError(control: FormControl): boolean {
    return !this.getMinLengthError(control) && control.errors?.badWord;
  }

  // Language form validation
  getLanguageRequiredError(field: string, code: string): boolean {
    return this.getRequiredError(this.getLanguageControl(field, code));
  }

  getLanguageMinLengthError(field: string, code: string): boolean {
    return this.getMinLengthError(this.getLanguageControl(field, code));
  }

  getLanguageBadWordError(field: string, code: string): boolean {
    return this.getBadWordError(this.getLanguageControl(field, code));
  }

  // Getting controls and form-groups
  getLanguageControl(field: string, code: string): FormControl {
    const singleLanguageFormGroup = this.languageDataFormGroup.get(
      code
    ) as FormGroup;
    return singleLanguageFormGroup.get(field) as FormControl;
  }

  get categoryControl(): FormControl {
    return this.addInforForm.get('category') as FormControl;
  }

  get languageDataFormGroup(): FormGroup {
    return this.addInforForm.get('languageData') as FormGroup;
  }
}