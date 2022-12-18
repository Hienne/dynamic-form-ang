import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[numberOnly]'
})
export class NumberOnlyDirective {
  @Input() disabledNumbersOnly: boolean = false;

  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent) {
    if (this.disabledNumbersOnly) return;

    const initialValue = this.control.control?.value;
    this.control.control?.setValue(initialValue.replace(/[^0-9]*/g, ''));
  }
}
