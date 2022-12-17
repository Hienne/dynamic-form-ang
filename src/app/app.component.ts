import { Component, OnInit } from '@angular/core';
import { DynamicFormFieldModel } from './dynamic-form-field.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormFieldModel[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({});

    this.dynamicFormFields = [
      {
        id: 'dynamicSelect',
        label: 'My label Select',
        type: 'select',
        selectMenuOptions: {
          'item1': 'Item 1',
          'item2': 'Item 2',
          'item3': 'Item 3'
        },
        value: null,
        validators: [Validators.required],
        cssClass: ['w-full', 'mb-5']
      },
      {
        id: 'dynamicText',
        label: 'My label Text',
        type: 'text',
        value: '',
        cssClass: ['w-full']
      },
    ];

    this.dynamicFormFields.forEach(formItem => {
      const formControl = this.fb.control(formItem.value, formItem.validators);
      this.myForm.addControl(formItem.id, formControl)
    })
  }
}
