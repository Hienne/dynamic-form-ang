import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DynamicFormControlModule } from './dynamic-form-field/dynamic-form-control.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InfiniteScrollSelectionComponent } from './custom-component/infinite-scroll-selection/infinite-scroll-selection.component';
import { InfiniteScrollComponent } from './custom-component/infinite-scroll/infinite-scroll.component';
import { MultipleSelectComponent } from './custom-component/multiple-select/multiple-select.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,

    DynamicFormControlModule,
    MultipleSelectComponent,
    InfiniteScrollComponent,
    InfiniteScrollSelectionComponent,
    InfiniteScrollDirective,

    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'vi-VN' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
