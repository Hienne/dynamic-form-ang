import { DirectivesModule } from './directives/directives.module';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { TrimTextBoxDirective } from './directives/trim-text-box.directive';
import { NumberFormatDirective } from './directives/number-format.directive';

const MAT_MODULES = [
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormFieldComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    DirectivesModule,

    ...MAT_MODULES
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
