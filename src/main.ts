import {bootstrapApplication} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {MyFormComponent} from './components/myForm/my-form.component';

;

bootstrapApplication(MyFormComponent, {
  providers: [
    ReactiveFormsModule
  ]
}).catch(err => console.error(err));
