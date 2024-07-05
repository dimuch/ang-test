import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {CommonModule} from "@angular/common";

import {PasswordInputComponent} from "../passwordInput/passwordInput.component";
import {patternValidator} from "../../forms/validators/password.indicator.validator";

@Component({
  selector: 'my-form',
  templateUrl: 'my-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordInputComponent,
    CommonModule,
  ],
})
export class MyFormComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.formGroup);
  }
  public formGroup = new FormGroup({
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      patternValidator(),
    ])),
  });
}
