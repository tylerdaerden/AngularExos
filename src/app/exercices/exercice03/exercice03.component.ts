import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice03',
  templateUrl: './exercice03.component.html',
  styleUrls: ['./exercice03.component.scss']
})
export class Exercice03Component {

  timer! : ReturnType<typeof setInterval> |null ;
  count : number = 0;

  start (): void {
    if (this.timer)return;
    this.timer= setInterval(() => { this.count++; }, 1000);    
  }

  stop () : void {
    if(!this.timer) return;
    clearInterval(this.timer);
    this.timer = null;
  
  }

  reset () : void {
    this.count = 0 ;
    this.stop();
  }

}
