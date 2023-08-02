import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice01',
  templateUrl: './exercice01.component.html',
  styleUrls: ['./exercice01.component.scss']
})
export class Exercice01Component {

  LastName : string = "Desmecht " ;
  FirstName : string= "Denys" ;
  MailAdress : string = " Monmail@private.com" ;
  BirthDate: Date = new Date (1986,1,17);
  Gender : string = "homme" ;
  Languages : string[] =["Français" , "Anglais" , "Neerlandais" , "Allemand"] ;
  image? : string = "https://cdnb.artstation.com/p/assets/images/images/011/852/201/large/andrey-pankov-fight-club.jpg" 



}
