import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {
  singleCharacter = /^[0-9a-zA-Z-\.]$/;
  integer = /^\d+$/;
  real = /^\d{1,10}\.\d{1,2}$/;

  @Input() appOnlyNumberMin: number;
  @Input() appOnlyNumberMax: number;

  private afterKeyUpValue: string;

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    const character = keyboardEvent.key;
    const currentValue = this.el.nativeElement.value;
    const selectionStart = this.el.nativeElement.selectionStart;
    const range = {
      min: this.appOnlyNumberMin,
      max: this.appOnlyNumberMax
    };

    const newValue = `${currentValue.slice(
      0,
      selectionStart
    )}${character}${currentValue.slice(selectionStart)}`;

    if (this.integer.test(newValue)) {
      const value = parseInt(newValue, 10);
      const rangeData = this.keepInRange(value, range);
      if (rangeData.out) {
        this.el.nativeElement.value = rangeData.limit;
        event.preventDefault();
      }
    } else if (this.isException(keyboardEvent)) {
      const value = this.afterBackspaceOrDelete(
        currentValue,
        selectionStart,
        character
      );

      const rangeData = this.keepInRange(value, range);
      if (rangeData.out) {
        this.el.nativeElement.value = rangeData.limit;
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  }

  private afterBackspaceOrDelete(
    currentValue: string,
    selectionStart: number,
    key: string
  ): number {
    let value = currentValue;
    switch (key) {
      case 'Backspace':
        value =
          currentValue.slice(0, selectionStart - 1) +
          currentValue.slice(selectionStart);
        break;
      case 'Delete':
        value =
          currentValue.slice(0, selectionStart) +
          currentValue.slice(selectionStart + 1);
        break;
    }

    return parseInt(value, 10);
  }

  private keepInRange(value: number, range?: any): any {
    const min = range?.min;
    const max = range?.max;
    if (value < min) {
      return { out: true, limit: min };
    } else if (value > max) {
      return { out: true, limit: max };
    }
    return { out: false, limit: value };
  }

  private isException(event: KeyboardEvent): boolean {
    const allow = [
      'Backspace',
      'Delete',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight'
    ];
    return allow.includes(event.key);
  }
}
