import { Directive, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive({
  selector: '[appMatTabScrollRetainer]'
})
export class MatTabScrollRetainerDirective implements OnDestroy {
  private changes: MutationObserver;
  private lastScrollPosition = 0;
  private subscription: Subscription;

  constructor(private elementRef: ElementRef) {
    this.changes = new MutationObserver(() => this.rollbackScrollPosition());
    this.changes.observe(this.elementRef.nativeElement, {
      childList: true,
      subtree: true
    });
    this.subscription = fromEvent(window, 'scroll').subscribe(() => {
      this.lastScrollPosition = window.pageYOffset;
    });
  }

  private rollbackScrollPosition(): void {
    window.scrollTo(window.pageXOffset, this.lastScrollPosition);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.changes.disconnect();
  }
}
