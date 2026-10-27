import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appStockBajo]',
})
export class StockBajo {
  readonly appStockBajo = input.required<number>();

  private readonly elemento = inject(ElementRef<HTMLElement>);

  constructor() {
    effect(() => {
      const stockBajo = this.appStockBajo() <= 5;

      this.elemento.nativeElement.style.backgroundColor =
        stockBajo ? '#eec4ff' : '';

      this.elemento.nativeElement.style.color =
        stockBajo ? '#390d65' : '';
    });
  }
}
