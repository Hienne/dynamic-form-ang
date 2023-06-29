import { ValidatorFn } from '@angular/forms'

export class DynamicFormField<T> {
  value: any
  key: any
  controlType: string
  label: string
  options: { key: string; value: string }[]
  validators: ValidatorFn[]
  cssClass: string[]
  disabled: boolean
  showDefaultValue: boolean

  constructor(options: {
    value?: any
    key?: any
    controlType?: string
    label?: any
    options?: any
    validators?: ValidatorFn[]
    cssClass?: string[]
    disabled?: boolean
    showDefaultValue?: boolean
  }) {
    this.value = options.value
    this.key = options.key || ''
    this.controlType = options.controlType || ''
    this.label = options.label || ''
    this.options = options.options
    this.validators = options.validators || []
    this.cssClass = options.cssClass || []
    this.showDefaultValue = options.showDefaultValue || false
    this.disabled = options.disabled || false
  }
}

export class TextBoxField extends DynamicFormField<string> {
  override controlType = 'text'
}

export class CurrencyField extends DynamicFormField<string> {
  override controlType = 'currency'
}

export class DropdownField extends DynamicFormField<string> {
  override controlType = 'dropdown'
}

export class SelectField extends DynamicFormField<string> {
  override controlType = 'select'
}

export class RadioField extends DynamicFormField<string> {
  override controlType = 'radio'
}

export class DatepickerField extends DynamicFormField<Date> {
  override controlType = 'date'
}

export class DaterangePickerField extends DynamicFormField<Date[]> {
  override controlType = 'daterange'
}
