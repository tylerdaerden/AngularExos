import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice08',
  templateUrl: './exercice08.component.html',
  styleUrls: ['./exercice08.component.scss']
})
export class Exercice08Component {
  minquad : number = 50;
  maxquad : number =150;
  rangequad : number= 80;

  minborder : number = 0;
  maxborder : number = 10;
  rangeborder : number = 5;

  selectedStyle : string = "Groove";
}
