import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DynamicFormField } from './dynamic-form-field.model';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
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

  clearDate(event: Event, controlNames: string[]) {
    event.stopPropagation();
    controlNames.forEach(name => {
      this.form.get(name)?.reset();
    });
  }

}
