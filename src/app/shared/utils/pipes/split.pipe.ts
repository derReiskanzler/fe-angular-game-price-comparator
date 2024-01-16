import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  public transform(value: string, delimiter: string): string[] {
    return value.split(delimiter);
  }

}
