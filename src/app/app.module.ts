import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DynamicFormControlModule } from './dynamic-form-field/dynamic-form-control.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { MultipleSelectComponent } from './multiple-select/multiple-select.component';

@NgModule({
  declarations: [AppComponent, InputNumberComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    DynamicFormControlModule,
    MultipleSelectComponent,
    MatFormFieldModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'vi-VN' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
