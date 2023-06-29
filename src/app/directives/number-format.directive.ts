import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core'
import { NgControl } from '@angular/forms'

@Directive({
  selector: 'input[numberFormat]',
})
export class NumberFormatDirective implements OnInit {
  @Input() formatBreaker: string = '.'
  private el: HTMLInputElement

  constructor(private elementRef: ElementRef, private formControl: NgControl) {
    this.el = this.elementRef.nativeElement
  }

  ngOnInit() {
    if (this.formControl.value) {
      this.formControl.control?.setValue(
        this.formatNumber(this.formControl.value.toString())
      )
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    this.formControl.control?.setValue(this.formatNumber(value))
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (
      [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      (e.key === 'a' && (e.ctrlKey || e.metaKey)) ||
      (e.key === 'c' && (e.ctrlKey || e.metaKey)) ||
      (e.key === 'v' && (e.ctrlKey || e.metaKey)) ||
      (e.key === 'x' && (e.ctrlKey || e.metaKey)) ||
      e.code === 'Home' ||
      e.code === 'End' ||
      e.code === 'ArrowLeft' ||
      e.code === 'ArrowRight'
    ) {
      return
    }
    // only allow numbers
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault()
    }
  }

  private formatNumber(s: string): string {
    let n = parseInt(s.replace(/\D/g, ''))
    return isNaN(n)
      ? ''
      : n
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${this.formatBreaker}`)
  }
}
