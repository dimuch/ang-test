import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {CommonModule} from "@angular/common";

import {PasswordInputComponent} from "../passwordInput/passwordInput.component";

@Component({
  selector: 'my-form',
  templateUrl: 'my-form.component.html',
  styleUrl: './my-from.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordInputComponent,
    CommonModule,
  ],
})
export class MyFormComponent {
  public formGroup = new FormGroup({
    password: new FormControl(''),
  });
}
