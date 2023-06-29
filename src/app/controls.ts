import { Validators } from '@angular/forms'
import {
  DropdownField,
  TextBoxField,
  CurrencyField,
  RadioField,
  DatepickerField,
  DaterangePickerField,
  SelectField,
} from './dynamic-form-field/dynamic-form-field.model'

export const dynamicFormFields = [
  new DropdownField({
    key: 'dynamicDropdown',
    label: 'My label dropdown',
    options: {
      item1: 'Item 1',
      item2: 'Item 2',
      item3: 'Item 3',
    },
    // options: [
    //   {
    //     key: 'item1',
    //     value: 'Item 1',
    //   },
    //   {
    //     key: 'item2',
    //     value: 'Item 2',
    //   },
    //   {
    //     key: 'item3',
    //     value: 'Item 3',
    //   },
    // ],
    value: '',
    cssClass: ['w-full'],
    showDefaultValue: true,
  }),
  new TextBoxField({
    key: 'dynamicText',
    label: 'My label Text',
    cssClass: ['w-full'],
    validators: [Validators.required, Validators.maxLength(10)],
  }),
  new CurrencyField({
    key: 'dynamicCurrency',
    label: 'My label currency',
    cssClass: ['w-full'],
  }),
  new RadioField({
    key: 'dynamicRadio',
    label: 'My label radio',
    options: {
      item1: 'Item 1',
      item2: 'Item 2',
      item3: 'Item 3',
    },
    // options: [
    //   {
    //     key: 'item1',
    //     value: 'Item 1',
    //   },
    //   {
    //     key: 'item2',
    //     value: 'Item 2',
    //   },
    //   {
    //     key: 'item3',
    //     value: 'Item 3',
    //   },
    // ],
    cssClass: ['w-full'],
  }),
  new DatepickerField({
    key: 'date',
    label: 'My date picker',
    cssClass: ['w-full'],
    // value: new Date(),
  }),
  new DaterangePickerField({
    key: ['toDate', 'fromDate'],
    label: ['My to date picker', 'my from date'],
    cssClass: ['w-full'],
    value: ['2022-12-05T7:00:00.000Z', '2022-12-13T7:00:00.000Z'],
  }),
  new SelectField({
    key: 'dynamicSelect',
    label: 'My multiple select',
    cssClass: ['w-full'],
    options: {
      item1: 'Item 1',
      item2: 'Item 2',
      item3: 'Item 3',
    },
    // options: [
    //   {
    //     key: 'item1',
    //     value: 'Item 1',
    //   },
    //   {
    //     key: 'item2',
    //     value: 'Item 2',
    //   },
    //   {
    //     key: 'item3',
    //     value: 'Item 3',
    //   },
    // ],
  }),
]
