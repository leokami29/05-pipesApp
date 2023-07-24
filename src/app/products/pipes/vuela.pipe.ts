import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CanFly'
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Vuela' | 'No vuela' {
    return value ? 'Vuela' : 'No vuela';
  }
}
