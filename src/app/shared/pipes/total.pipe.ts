import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation';
import { totalmem } from 'os';

@Pipe({
  name: 'total'
})

export class TotalPipe implements PipeTransform {

  transform(value: Prestation, args: string): number {
    let total = 0;

    if (!value) {
      return null;
    } else {
      switch(args) {
        case 'ttc': {
          total = value.totalTtc();
          break;
        }

        case 'ht': {
          total = value.totalHt();
          break;
        }
      }
    }

    return total;
  }

}
