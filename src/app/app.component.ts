import { Component, OnInit, Self } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { dynamicFormFields } from './controls';
import { DynamicFormControlService } from './dynamic-form-field/dynamic-form-control.service';
import { DynamicFormField } from './dynamic-form-field/dynamic-form-field.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DynamicFormControlService],
})
export class AppComponent implements OnInit {

  options = [
    {
      label: 'label1',
      value: 'value1'
    },
    {
      label: 'label1',
      value: 'value1'
    },
    {
      label: 'label1',
      value: 'value1'
    },
    {
      label: 'label1',
      value: 'value1'
    },
    {
      label: 'label1',
      value: 'value1'
    },
  
  ]
  test = new FormControl();
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormField<any>[];

  constructor(
    private fb: FormBuilder,
    @Self() private dynamicFormControlService: DynamicFormControlService<any>
  ) {
    console.log(environment.baseUrl);
  }

  ngOnInit() {
    this.myForm = this.fb.group({});

    this.dynamicFormFields = dynamicFormFields;

    this.myForm = this.dynamicFormControlService.toFormGroup(
      this.dynamicFormFields
    );
  }
}
