import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFormateur'
})
export class GetFormateurPipe implements PipeTransform {

  transform(value: any[], id: string, prop: string): any {
    // Attention à bien vérifier la donnée
    if (!Array.isArray(value)) return value;

    const coach_found = value.find(coach => coach.id === id);
    return coach_found ? coach_found[prop] : 'Aucun formateur trouvé';
  }

}