import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToDHMS'
})
export class SecondsToDHMSPipe implements PipeTransform {

  transform(value: number): string {
    
    let format = "";

    let days = Math.floor(value / 86400);
    value -= (days * 86400);

    let hours = Math.floor(value / 3600);
    value -= (hours * 3600);

    let minutes = Math.floor(value / 60);
    value -= (minutes * 60);

    let seconds = value;

    format += `${days} ${(days > 1 ? 'jours' : 'jour')}, `;
    format += `${hours} ${(hours > 1 ? 'heures' : 'heure')}, `;
    format += `${minutes} ${(minutes > 1 ? 'minutes' : 'minute')} et `;
    format += `${seconds} ${(seconds > 1 ? 'secondes' : 'seconde')}`;

    return format;

  }

}
