import { AbstractControl, ValidatorFn } from '@angular/forms';

export function cleanFilterValidator(bad: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isFobidden = bad.test(control.value);
    return isFobidden ? { badWord: control.value } : null;
  };
}
