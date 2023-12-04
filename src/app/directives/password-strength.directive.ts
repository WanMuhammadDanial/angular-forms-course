import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Directive } from "@angular/core";
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';

@Directive({
  selector: "[passwordStrength]"
})
export class PasswordStrengthDirective implements Validator{
  validate(control: AbstractControl): ValidationErrors | null  {
    return createPasswordStrengthValidator()(control);
  }
}
