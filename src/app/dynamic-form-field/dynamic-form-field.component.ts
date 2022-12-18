import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { DynamicFormField } from '../dynamic-form-field.model';
import {MatFormFieldAppearance} from '@angular/material/form-field';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent {
  @Input() formItem!: DynamicFormField<string>;
  @Input() appearance: MatFormFieldAppearance = 'fill'

  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control
  }

  isIterable(obj: any) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

}
