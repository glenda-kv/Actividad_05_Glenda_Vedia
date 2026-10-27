import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio',
})
export class PrecioPipe implements PipeTransform {
  transform(value: number): string {
    return 'Bs ' + value.toFixed(2);
  }
}
