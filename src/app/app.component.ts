import { HttpClient } from '@angular/common/http'
import { Component, OnInit, Self, inject } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { BehaviorSubject, map } from 'rxjs'
import { environment } from 'src/environments/environment'
import { dynamicFormFields } from './controls'
import { DynamicFormControlService } from './dynamic-form-field/dynamic-form-control.service'
import { DynamicFormField } from './dynamic-form-field/dynamic-form-field.model'
import { Passenger, fetchPassenger } from './service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DynamicFormControlService],
})
export class AppComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder)
  http: HttpClient = inject(HttpClient)

  options = [
    {
      label: 'label1',
      value: 'value1',
    },
    {
      label: 'label2',
      value: 'value2',
    },
    {
      label: 'label3',
      value: 'value3',
    },
    {
      label: 'label4',
      value: 'value4',
    },
    {
      label: 'label5',
      value: 'value5',
    },
  ]

  multipleSelectAll = new FormControl(null)
  infiniteScrollSelection = new FormControl()
  myForm!: FormGroup
  dynamicFormFields!: DynamicFormField<any>[]
  passengers: Passenger[] = []
  page = 0
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    @Self() private dynamicFormControlService: DynamicFormControlService<any>
  ) {
    console.log(environment.baseUrl)
    fetchPassenger(this.http, this.page).subscribe((res) => {
      this.passengers = res.data
    })
  }

  ngOnInit() {
    this.myForm = this.fb.group({})

    this.dynamicFormFields = dynamicFormFields

    this.myForm = this.dynamicFormControlService.toFormGroup(
      this.dynamicFormFields
    )
  }

  onScroll() {
    this.isLoading$.next(true);this.page++;fetchPassenger(this.http, this.page).pipe(map((res) => res.data)).subscribe((res) => {
        this.passengers = [...this.passengers, ...res]
        this.isLoading$.next(false)
      })
  }
}
