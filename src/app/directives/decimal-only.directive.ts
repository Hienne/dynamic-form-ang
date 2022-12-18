import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDecimalOnly]'
})
export class DecimalOnlyDirective {
  @Input() disabledDecimalOnly: boolean = false;

  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent) {    
    if (this.disabledDecimalOnly) return;

    const initialValue = this.control.control?.value;
    let editedValue = initialValue.replace(/[^0-9.]*/g, '');
    if ((editedValue.match(/\./g) || []).length > 1) {
      editedValue = editedValue.slice(0, -1);
    }
    this.control.control?.setValue(editedValue);
  }
}
