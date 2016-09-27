import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxpipe'
})
export class TaxpipePipe implements PipeTransform {

  transform(value: number, taxNumber?:number): any {
    if(!taxNumber && taxNumber !== 0) {
      taxNumber = 7;
    }

    return value * taxNumber/100;
  }

}
