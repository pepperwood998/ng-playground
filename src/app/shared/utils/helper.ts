import { FormArray, FormControl, FormGroup } from '@angular/forms';

export function applyUpdateFields(
  formItem: FormGroup | FormArray | FormControl,
  updatedValues: any,
  name?: string
): void {
  if (formItem instanceof FormControl) {
    if (name && formItem.dirty) {
      updatedValues[name] = formItem.value;
    }
  } else {
    for (const formControlName in formItem.controls) {
      if (formItem.controls.hasOwnProperty(formControlName)) {
        const formControl = formItem.controls[formControlName];

        if (formControl instanceof FormControl) {
          applyUpdateFields(formControl, updatedValues, formControlName);
        } else if (
          formControl instanceof FormArray &&
          formControl.dirty &&
          formControl.controls.length > 0
        ) {
          updatedValues[formControlName] = formControl.value;
        } else if (formControl instanceof FormGroup && formControl.dirty) {
          updatedValues[formControlName] = {};
          applyUpdateFields(formControl, updatedValues[formControlName]);
        }
      }
    }
  }
}
