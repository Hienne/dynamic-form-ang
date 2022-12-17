import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { DynamicFormFieldModel } from '../dynamic-form-field.model';
import {MatFormFieldAppearance} from '@angular/material/form-field';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent {
  @Input() formItem!: DynamicFormFieldModel;
  @Input() appearance: MatFormFieldAppearance = 'fill'

  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control
  }

}
