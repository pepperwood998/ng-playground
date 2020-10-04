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
  @Input('appOnlyNumberMin') min = 0;
  @Input('appOnlyNumberDecimal') decimal: number = null;
  @Input('appOnlyNumberFloating') floating: number = null;
  private startWithZeros = /^(-?)0+(?!\.)(\.?[1-9]+)$/;
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
    if (this.startWithZeros.test(newValue)) {
      this.el.nativeElement.value = newValue.replace(
        this.startWithZeros,
        '$1$2'
      );
      event.preventDefault();
    }
    if (this.numberRegexp.test(newValue)) {
      return;
    }
    event.preventDefault();
  }

  @HostListener('blur', ['$event']) onBlur(): void {
    const element = this.el.nativeElement;
    // trim 0s
    element.value = this.blurFilter(element.value);
    if (!this.numberRegexp.test(element.value)) {
      element.value = this.min;
    }
  }

  private blurFilter(value: string): string {
    return value.replace(
      /^(-?)0*([1-9]?\d*)(\.\d*[1-9])?\.?0*$/,
      (g1: string, g2: string, g3: string, g4: string) => {
        let result = g2;
        result += g3 ? g3 : '0';
        result += g4 ? g4 : '';
        return result;
      }
    );
  }

  private getNumberRegexp(
    decimal: number,
    floating: number,
    min: number
  ): RegExp {
    const maxDecimal = decimal === null ? '' : decimal;
    const maxFloating = floating === null ? '' : floating;
    const negativeFlag = min < 0 ? '1' : '0';
    const floatingFlag = floating !== 0 ? '1' : '0';
    return new RegExp(
      `^-{0,${negativeFlag}}(?!0{2,})\\d{0,${maxDecimal}}(\\.\\d{0,${maxFloating}}){0,${floatingFlag}}$`
    );
  }

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

  private unitTestBlurFilter(): void {
    // unit testing
    const inputs = [
      '100009',
      '000',
      '00009',
      '0900',
      '000900',
      '00100900',
      '1000.009',
      '00100.009000',
      '00100.009',
      '100.00900',
      '000.00',
      '00100.',
      '.00100',
      '1000.',
      '.0001'
    ];
    const expected = [
      '100009',
      '0',
      '9',
      '900',
      '900',
      '100900',
      '1000.009',
      '100.009',
      '100.009',
      '100.009',
      '0',
      '100',
      '0.001',
      '1000',
      '0.0001'
    ];
    inputs.forEach((v, i) => {
      const output = this.blurFilter(v);
      console.log(`${i}:`, expected[i] === output ? 'passed' : 'failed');
    });
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
}
