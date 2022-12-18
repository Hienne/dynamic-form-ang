import { Component, OnInit, Self } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dynamicFormFields } from './controls';
import { DynamicFormControlService } from './dynamic-form-field/dynamic-form-control.service';
import { DynamicFormField } from './dynamic-form-field/dynamic-form-field.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DynamicFormControlService],
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: DynamicFormField<any>[];

  constructor(
    private fb: FormBuilder,
    @Self() private dynamicFormControlService: DynamicFormControlService<any>
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({});

    this.dynamicFormFields = dynamicFormFields;

    this.myForm = this.dynamicFormControlService.toFormGroup(
      this.dynamicFormFields
    );
  }
}
