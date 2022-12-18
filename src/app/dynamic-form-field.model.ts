import { ValidatorFn } from '@angular/forms';

export class DynamicFormField<T> {
  value: T | undefined | null;
  key: string;
  controlType: string;
  label: string;
  options: { key: string; value: string }[];
  validators: ValidatorFn[];
  cssClass: string[];
  showDefaultValue: boolean;

  constructor(options: {
    value?: T | null;
    key?: string;
    controlType?: string;
    label?: string;
    options?: any;
    validators?: ValidatorFn[];
    cssClass?: string[];
    showDefaultValue?: boolean;
  }) {
    this.value = options.value;
    this.key = options.key || '';
    this.controlType = options.controlType || '';
    this.label = options.label || '';
    this.options = options.options;
    this.validators = options.validators || [];
    this.cssClass = options.cssClass || [];
    this.showDefaultValue = options.showDefaultValue || false;
  }
}

export class TextBoxField extends DynamicFormField<string> {
  override controlType = 'text';
}

export class DropdownField extends DynamicFormField<string> {
  override controlType = 'dropdown';
}
