import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MyFormComponent} from './components/myForm/my-form.component';

;

bootstrapApplication(MyFormComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
    ReactiveFormsModule
  ]
}).catch(err => console.error(err));
