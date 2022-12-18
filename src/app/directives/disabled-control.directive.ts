import { Directive, Input, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '([formControlName], [formControl])[disabledControl]'
})
export class DisabledControlDirective implements OnChanges {
  @Input() disabledControl = false;

  constructor(private readonly ngControl: NgControl) {
  }

  ngOnChanges(): void {
    const action = this.disabledControl ? 'disable' : 'enable';
    if (this.ngControl.control) {
      this.ngControl.control[action]()
    }
  }

}
