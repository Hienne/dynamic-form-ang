import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from './../directives/directives.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormFieldComponent } from './dynamic-form-field.component';

const MAT_MODULES = [
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatRadioModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatIconModule,
];

@NgModule({
  declarations: [DynamicFormFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DirectivesModule,
    ...MAT_MODULES,
  ],
  exports: [DynamicFormFieldComponent]
})
export class DynamicFormControlModule {}
