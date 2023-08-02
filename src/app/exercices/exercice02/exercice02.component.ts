import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice02',
  templateUrl: './exercice02.component.html',
  styleUrls: ['./exercice02.component.scss']
})
export class Exercice02Component {

  LastName : string = "" ;
  FirstName : string= "" ;
  MailAdress : string = " " ;
  BirthDate!: Date 
  Gender : string = "" ;
  Languages : string[] =[""] ;
  image? : string = "";

  // Nom : string ="Desmecht";
  // Prenom : string = "Denys";
  // DateDeNaissance : Date = new Date (1986,1,17);
  // Genre : string = "Homme";
  // Langues : string[] =["Français" , "Anglais" , "Neerlandais" , "Allemand"];
  // image2? : string = "https://cdnb.artstation.com/p/assets/images/images/011/852/201/large/andrey-pankov-fight-club.jpg"



}
