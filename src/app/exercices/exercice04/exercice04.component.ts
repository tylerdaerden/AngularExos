import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice04',
  templateUrl: './exercice04.component.html',
  styleUrls: ['./exercice04.component.scss']
})
export class Exercice04Component {

  passwordType: string = "password";

  isChecked: boolean = false;

  togglePassword (): void {
    this.passwordType = this.isChecked ? "text" : "password";
  }

}
