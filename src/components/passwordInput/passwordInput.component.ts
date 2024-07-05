import {
  forwardRef,
  Component,
} from '@angular/core';
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  FormControl,
  ControlValueAccessor,
  FormsModule,
  ReactiveFormsModule,
  Validator,
  ValidationErrors,
} from '@angular/forms';

import {CommonModule} from "@angular/common";
import {STRENGTH_INDICATOR_DEFAULT, StrengthItem} from "../../constants/app.constants";
import {getStrengthLevel} from "./passwordInput.service";

@Component({
  selector: 'password-input',
  templateUrl: './passwordInput.component.html',
  styleUrl: './passwordInput.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ],
})
export class PasswordInputComponent implements ControlValueAccessor, Validator {
  password: string = '';
  strength: StrengthItem[] = STRENGTH_INDICATOR_DEFAULT;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.password = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
    this.onChange(this.password);
    this.onTouched();
  }

  validate(control: FormControl): ValidationErrors | null {
    const {
      isValid, strength
    } = getStrengthLevel(control);

    this.strength = strength;
    return isValid;
  }
}
