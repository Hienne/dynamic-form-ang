import { DynamicFormField } from './../dynamic-form-field.model';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class DynamicFormControlService<T> {
  toFormGroup(fields: DynamicFormField<T>[] ) {
    const group: any = {};

    fields.forEach(item => {
        group[item.key] = new FormControl(item.value, item.validators);
      })

    return new FormGroup(group);
  }
}