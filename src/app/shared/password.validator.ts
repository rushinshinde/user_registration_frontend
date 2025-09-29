import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function strongPasswordValidator(): ValidatorFn {
return (control: AbstractControl): ValidationErrors | null => {
const value: string = control.value || '';
if (!value) return { required: true };


const minLen = value.length >= 8;
const hasAlphaNum = /[A-Za-z]/.test(value) && /[0-9]/.test(value);
// Count special chars
const specialMatch = value.match(/[^A-Za-z0-9]/g) || [];
const specialEnough = specialMatch.length >= 2;


const valid = minLen && hasAlphaNum && specialEnough;


return valid ? null : { weakPassword: true };
};
}