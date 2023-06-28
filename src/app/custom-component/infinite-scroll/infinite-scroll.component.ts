import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content></ng-content><div #anchor></div>
  `,
  styles: [
    `
      :host {
        display: block
      }
    `
  ],
})
export class InfiniteScrollComponent implements AfterViewInit, OnDestroy {
  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor') anchor!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  constructor(private host: ElementRef) {}

  ngAfterViewInit(): void {
    const options = {
      root: this.isHostScrollable() ? this.element : null,
      ...this.options,
    }

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }

  get element() {
    return this.host.nativeElement
  }
  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return (
      style.getPropertyPriority('overflow') === 'auto' ||
      style.getPropertyPriority('overflow-y') === 'scroll'
    );
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
