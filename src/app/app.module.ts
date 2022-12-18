import { DynamicFormControlModule } from './dynamic-form-field/dynamic-form-control.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    DynamicFormControlModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'vi-VN' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
