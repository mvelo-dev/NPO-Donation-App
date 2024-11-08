import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return null;
    }


    const capitalLetterRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    const hasCapitalLetter = capitalLetterRegex.test(value);
    const hasNumber = numberRegex.test(value);
    const hasSpecialCharacter = specialCharacterRegex.test(value);

    const valid = hasCapitalLetter && hasNumber && hasSpecialCharacter && value.length >= 6;

    return valid ? null : { passwordStrength: true };
  };
}
