import {
  Component,
  OnChanges,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgForm,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize, map } from 'rxjs/operators';

import { InformationService } from '#shared/services/information.service';
import { cleanFilterValidator } from '#shared/validators/clean-filter.validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.scss']
})
export class FormHandlingComponent implements OnInit, AfterViewInit {
  addInforForm: FormGroup;
  initialFormValue;
  categories: { value: string; name: string }[];
  languages: string[];
  loading: boolean;

  isUpdate: boolean;
  notFound: boolean;

  @ViewChild('myForm') myForm: NgForm;

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
    this.initialFormValue = this.addInforForm.value;

    this.route.params.pipe(map((params) => params.id)).subscribe((id) => {
      if (this.sub) {
        this.sub.unsubscribe();
      }
      this.resetForm();
      if (id) {
        this.isUpdate = true;
        this.fetchInformation(id);
      }
    });
  }

  ngAfterViewInit() {
    console.log(this.myForm);
  }

  sub: Subscription;
  private fetchInformation(id: number): void {
    this.loading = true;
    this.sub = this.informationService
      .getInformation(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((information) => {
        if (information && information.id) {
          this.addInforForm.patchValue(information);
        } else {
          this.notFound = true;
        }
      });
  }

  onSubmit(): void {
    const updatedValues = {};
    this.getUpdates(this.addInforForm, updatedValues);
    console.log(updatedValues);
  }

  cancelAddInfor(e: Event): void {
    e.preventDefault();
  }

  private getUpdates(
    formItem: FormGroup | FormArray | FormControl,
    updatedValues: any,
    name?: string
  ) {
    if (formItem instanceof FormControl) {
      if (name && formItem.dirty) {
        updatedValues[name] = formItem.value;
      }
    } else {
      for (const formControlName in formItem.controls) {
        if (formItem.controls.hasOwnProperty(formControlName)) {
          const formControl = formItem.controls[formControlName];

          if (formControl instanceof FormControl) {
            this.getUpdates(formControl, updatedValues, formControlName);
          } else if (
            formControl instanceof FormArray &&
            formControl.dirty &&
            formControl.controls.length > 0
          ) {
            updatedValues[formControlName] = [];
            this.getUpdates(formControl, updatedValues[formControlName]);
          } else if (formControl instanceof FormGroup && formControl.dirty) {
            updatedValues[formControlName] = {};
            this.getUpdates(formControl, updatedValues[formControlName]);
          }
        }
      }
    }
  }

  resetForm(): void {
    if (this.myForm) {
      this.myForm.resetForm(this.initialFormValue);
    }
    // this.addInforForm.reset(this.initialFormValue);
    this.isUpdate = false;
    this.notFound = false;
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
