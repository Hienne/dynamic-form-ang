import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[onScroll]',
  standalone: true,
})
export class InfiniteScrollDirective implements AfterViewInit, OnDestroy {
  @Output() public onScroll = new EventEmitter();

  private _intersectionObserver?: IntersectionObserver;

  constructor(private _element: ElementRef) {}

  ngAfterViewInit(): void {
    this._intersectionObserver = new IntersectionObserver((entries) => {
      this.checkForIntersection(entries);
    }, {});

    this._intersectionObserver.observe(<Element>this._element.nativeElement);
  }

  checkForIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const isIntersecting =
        (<any>entry).isIntersecting &&
        entry.target === this._element.nativeElement;

      if (isIntersecting) {
        this.onScroll.emit();
      }
    });
  }

  ngOnDestroy(): void {
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }
  }
}
