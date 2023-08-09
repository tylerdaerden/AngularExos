import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(value: number): string {
    
    let format;

    let seconds = value %60;
    let minutes = Math.floor(value/60);
    
    
    
    
    return `${minutes <10 ? '0' + minutes : minutes}`
  }

}
