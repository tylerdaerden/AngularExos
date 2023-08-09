import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-exercice11',
  templateUrl: './exercice11.component.html',
  styleUrls: ['./exercice11.component.scss']
})
export class Exercice11Component {

  article : string ="";
  cart:string[] = [ "Sel" , "Sucre"] ;

  addItem () : void {
    this.cart.push 
  }
  

}
