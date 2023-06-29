import { Injectable } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import {
  DaterangePickerField,
  DynamicFormField,
} from './dynamic-form-field.model'

@Injectable()
export class DynamicFormControlService<T> {
  toFormGroup(fields: DynamicFormField<T>[]) {
    const group: any = {}

    fields.forEach((item) => {
      if (item instanceof DaterangePickerField) {
        group[item.key[0]] = new FormControl(item.value[0], item.validators)
        group[item.key[1]] = new FormControl(item.value[1], item.validators)
      } else {
        group[item.key] = new FormControl(item.value, item.validators)
      }
    })

    return new FormGroup(group)
  }
}
