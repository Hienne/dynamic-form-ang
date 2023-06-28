import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Optional,
  Output,
  Self,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelect, MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Subject } from 'rxjs';
import { InfiniteScrollComponent } from '../infinite-scroll/infinite-scroll.component';
import { CustomErrorMatcher } from '../multiple-select/multiple-select.component';

@Component({
  selector: 'app-infinite-scroll-selection',
  standalone: true,
  imports: [
    CommonModule,
    InfiniteScrollComponent,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
  ],
  templateUrl: './infinite-scroll-selection.component.html',
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: InfiniteScrollSelectionComponent,
    },
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorMatcher,
    },
  ],
})
export class InfiniteScrollSelectionComponent
  implements MatFormFieldControl<any>, ControlValueAccessor, OnDestroy
{
  static nextId = 0;
  @ViewChild('select') selectTpl!: MatSelect;

  @Input() optionLabel = '';
  @Input() optionValue = '';
  @Input() options: any[] = [];
  @Input() isLoading: boolean | null = false;
  @Output() emitter = new EventEmitter();

  onScroll() {
    this.emitter.emit();
  }

  onSelectionChange(data: MatSelectChange) {
    this.value = data.value;
  }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private errorStateMatcher: ErrorStateMatcher,
    private _elementRef: ElementRef<HTMLElement>,
  ) {
    if (ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  stateChanges = new Subject<void>();
  id = `infinite-select-${InfiniteScrollSelectionComponent.nextId++}`;

  get value() {
    return this._value;
  }
  set value(val: any) {
    this._value = val;
    this.stateChanges.next();
    this.onChange(this._value);
  }
  private _value!: any;

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(val: string) {
    this._placeholder = val;
    this.stateChanges.next();
  }
  private _placeholder = '';

  focused = false;
  touched = false;
  onChange = (_: any) => {};
  onTouched = () => {};

  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }
  
  onFocusOut(event: FocusEvent) {
    if (!this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  get empty() {
    return !this.selectTpl?.value;
  }

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

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

  controlType = 'infinite-scroll-selection';
  setDescribedByIds(ids: string[]): void {}
  onContainerClick(event: MouseEvent): void {}

  writeValue(selectedItem: any): void {
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
