import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {patternValidator} from "./app.validators";
import {JsonPipe, NgIf, CommonModule} from "@angular/common";
import {
  StrengthItem,
  STRENGTH_COLORS,
  STRENGTH_INDICATOR_DEFAULT,
  VALIDATION_ERRORS_MAP,
} from "./app.constants";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf, CommonModule],
})
export class AppComponent implements OnInit {
  profileForm!: FormGroup;
  strength: StrengthItem[] = STRENGTH_INDICATOR_DEFAULT;

  ngOnInit() {
    this.profileForm = new FormGroup({
      password: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          patternValidator(),
        ])
      ),
    });

    // Subscribe to the form value changes
    this.profileForm.valueChanges.subscribe(value => {
      const {errors} = this.profileForm.controls['password'];

      let errorKeys: string[] | any[] = [];
      if (errors) {
        errorKeys = Object.keys(errors);
        const firstValidationError = errorKeys[0];
        this.strength = VALIDATION_ERRORS_MAP[firstValidationError];

        if (firstValidationError === 'level') {
          const strengthLevel = errors[firstValidationError];
          this.strength = STRENGTH_INDICATOR_DEFAULT
            .map((item: StrengthItem, index: number) => {
              if (index <= strengthLevel) {
                return {
                  ...item,
                  color: STRENGTH_COLORS[strengthLevel],
                }
              }
              return item;
            });
        }
      }
    });
  }
}
