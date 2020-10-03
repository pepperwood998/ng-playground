import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective implements OnInit {
  posNumber = '^\\d*(\\.?\\d*)?$';
  negNumber = '^-\\d*(\\.?\\d*)?$';
  posInteger = '^\\d*$';
  negInteger = '^-\\d*$';
  @Input('appOnlyNumberMin') min = 0;
  @Input('appOnlyNumberDecimal') decimal: number = null;
  @Input('appOnlyNumberFloating') floating: number = null;
  numberRegexp: RegExp;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.numberRegexp = this.getNumberRegexp(
      this.decimal,
      this.floating,
      this.min
    );
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    const character = keyboardEvent.key;
    const currentValue = this.el.nativeElement.value;
    const selectionStart = this.el.nativeElement.selectionStart;

    const newValue = `${currentValue.slice(
      0,
      selectionStart
    )}${character}${currentValue.slice(selectionStart)}`;

    if (this.isException(keyboardEvent)) {
      return;
    }
    if (/^-*0[1-9]+$/.test(newValue)) {
      this.el.nativeElement.value = newValue.replace(/^-*0([1-9]+)$/, '$1');
      event.preventDefault();
    }
    if (this.numberRegexp.test(newValue)) {
      return;
    }
    event.preventDefault();
  }

  @HostListener('blur', ['$event']) onKeyUp(): void {
    const element = this.el.nativeElement;
    element.value = element.value.replace(/^(-*)\.(\d*)$/, '$10.$2');
    element.value = element.value.replace(/^(-*\d*)\.$/, '$1');
    element.value = element.value.replace(/^-$/, this.min);
    if (!this.numberRegexp.test(element.value)) {
      element.value = this.min;
    }
  }

  getNumberRegexp(decimal: number, floating: number, min: number): RegExp {
    const maxDecimal = decimal === null ? '' : decimal;
    const maxFloating = floating === null ? '' : floating;
    const negativeFlag = min < 0 ? '1' : '0';
    const floatingFlag = floating !== 0 ? '1' : '0';
    return new RegExp(
      `^-{0,${negativeFlag}}(?!0{2,})\\d{0,${maxDecimal}}(\\.\\d{0,${maxFloating}}){0,${floatingFlag}}$`
    );
  }

  // private afterBackspaceOrDelete(
  //   currentValue: string,
  //   selectionStart: number,
  //   key: string
  // ): number {
  //   let value = currentValue;
  //   switch (key) {
  //     case 'Backspace':
  //       value =
  //         currentValue.slice(0, selectionStart - 1) +
  //         currentValue.slice(selectionStart);
  //       break;
  //     case 'Delete':
  //       value =
  //         currentValue.slice(0, selectionStart) +
  //         currentValue.slice(selectionStart + 1);
  //       break;
  //   }

  //   return parseInt(value, 10);
  // }

  private isException(event: KeyboardEvent): boolean {
    const allow = [
      'Backspace',
      'Delete',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'Home',
      'End'
    ];
    const crtlCompound = ['a', 'x', 'c', 'v'];
    return (
      allow.includes(event.key) ||
      ((event.ctrlKey || event.metaKey) && crtlCompound.includes(event.key))
    );
  }
}
