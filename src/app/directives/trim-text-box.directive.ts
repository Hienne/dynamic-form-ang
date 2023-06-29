import { Directive, HostListener, Input, Self } from '@angular/core'
import { NgControl } from '@angular/forms'

@Directive({
  selector: '[trimTextBox]',
})
export class TrimTextBoxDirective {
  @Input() disabledTrimTextBox = false

  constructor(@Self() private ngControl: NgControl) {}

  @HostListener('keydown.enter')
  onKeyDown() {
    this.trimOnBlur()
  }

  @HostListener('blur')
  onInputChange() {
    this.trimOnBlur()
  }

  private trimOnBlur() {
    if (this.disabledTrimTextBox) {
      return
    }

    const currentValue = this.ngControl.value?.toString()
    const whitespace = ' '

    if (!currentValue) {
      return
    }

    if (
      currentValue.startsWith(whitespace) ||
      currentValue.endsWith(whitespace)
    ) {
      this.ngControl.control?.patchValue(currentValue.trim())
    }
  }
}
