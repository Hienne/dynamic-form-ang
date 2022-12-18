import { NumberFormatDirective } from './number-format.directive';
import { TrimTextBoxDirective } from './trim-text-box.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalOnlyDirective } from './decimal-only.directive';
import { NumberOnlyDirective } from './number-only.directive';
import { DisabledControlDirective } from './disabled-control.directive';



@NgModule({
  declarations: [
    TrimTextBoxDirective,
    NumberFormatDirective,
    DecimalOnlyDirective,
    NumberOnlyDirective,
    DisabledControlDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrimTextBoxDirective,
    NumberFormatDirective,
    DecimalOnlyDirective,
    NumberOnlyDirective,
    DisabledControlDirective
  ]
})
export class DirectivesModule { }
