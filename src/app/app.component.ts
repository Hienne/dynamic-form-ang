import { DynamicFormControlService } from './dynamic-form-field/dynamic-form-control.service';
import { Component, OnInit, Self } from '@angular/core';
import { DynamicFormField, DropdownField, TextBoxField } from './dynamic-form-field.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DynamicFormControlService]
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormField<string>[];

  constructor(private fb: FormBuilder, @Self() private dynamicFormControlService: DynamicFormControlService<string>) {}

  ngOnInit() {
    this.myForm = this.fb.group({});

    this.dynamicFormFields = [
      new DropdownField({
        key: 'dynamicDropdown',
        label: 'My label dropdown',
        // options: {
        //   'item1': 'Item 1',
        //   'item2': 'Item 2',
        //   'item3': 'Item 3'
        // },
        options: [
          {
            key: 'item1',
            value: 'Item 1',
          },
          {
            key: 'item2',
            value: 'Item 2',
          },
          {
            key: 'item3',
            value: 'Item 3',
          },
        ],
        value: '',
        cssClass: ['w-full'],
        showDefaultValue: true,
      }),
      new TextBoxField({
        key: 'dynamicText',
        label: 'My label Text',
        cssClass: ['w-full'],
        validators: [Validators.required]
      })
    ];

    this.myForm = this.dynamicFormControlService.toFormGroup(this.dynamicFormFields);
  }
}
