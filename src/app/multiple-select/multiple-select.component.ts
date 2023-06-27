import { CommonModule } from '@angular/common';
import {
  Component, Input, OnDestroy, Optional,
  Self, ViewChild
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorStateMatcher, MatOption } from '@angular/material/core';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { Subject } from 'rxjs';

export class CustomErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl): boolean {
      return control?.dirty && control.invalid;
  }
}
@Component({
  selector: 'multiple-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './multiple-select.component.html',
  styles: [
    `
      .select-all {
        margin-left: 5px;
      }
    `,
  ],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: MultipleSelectComponent,
    },
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorMatcher
    }
  ],
})
export class MultipleSelectComponent
  implements
    MatFormFieldControl<any>,
    ControlValueAccessor,
    OnDestroy
{
  static nextId = 0;
  @ViewChild('select') selectTpl!: MatSelect;

  @Input() optionValue = '';
  @Input() optionLabel = '';
  @Input()
  get allSelected(): boolean {
    return this._allSelected;
  }
  set allSelected(val: boolean) {
    this._allSelected = val;
  }
  private _allSelected = false;

  @Input()
  get options() {
    return this._options;
  }
  set options(val: any) {
    this._options = val;
    if (val?.length > 0) {
      setTimeout(() => this.toggleAllSelection(), 0);
    }
  }
  private _options: any[] | null = [];

  constructor(@Optional() @Self() public ngControl: NgControl, private errorStateMatcher: ErrorStateMatcher) {
    if (ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  get value() {
    return this._value
  }
  set value(val: any) {
    this._value = val;
    this.stateChanges.next();
    this.onChange(this._value);
  }
  private _value: any[] = [];
  stateChanges = new Subject<void>();
  id = `mc-multiple-select-${MultipleSelectComponent.nextId++}`;

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder!: string;

  focused = false;
  touched = false;
  onChange = (_: any) => {};
  onTouched = () => {};

  empty!: boolean;
  shouldLabelFloat: boolean = true;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(val: boolean) {
    this._required = val;
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(val: boolean) {
    this._disabled = val;
    this.stateChanges.next();
  }
  private _disabled = false;

  get errorState(): boolean {
    return this.errorStateMatcher.isErrorState(this.ngControl.control, null);
  }
  controlType = 'mc-multiple-select';
  setDescribedByIds(ids: string[]): void {}
  onContainerClick(event: MouseEvent): void {}

  onSelectAll() {
    this.allSelected = !this.allSelected;
    this.toggleAllSelection();
  }

  toggleAllSelection() {
    if (this.allSelected) {
      this.selectTpl.options.forEach((item: MatOption) => item.select());
    } else {
      this.selectTpl.options.forEach((item: MatOption) => item.deselect());
    }

    this.value = this.selectTpl.value;
  }

  onSelectionChange() {
    if (this.options && this.selectTpl.value.length === this.options.length) {
      this.allSelected = true;
    } else {
      this.allSelected = false;
    }

    this.value = this.selectTpl.value;
  }

  writeValue(selectedItem: any[]): void {
    this.value = selectedItem;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnDestroy(): void {
      this.stateChanges.unsubscribe();
  }
}
