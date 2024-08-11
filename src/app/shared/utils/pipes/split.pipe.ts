import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
  standalone: true,
})
export class SplitPipe implements PipeTransform {

  public transform(value: string, delimiter: string): string[] {
    return value.split(delimiter);
  }

}
