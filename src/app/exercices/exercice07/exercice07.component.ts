import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice07',
  templateUrl: './exercice07.component.html',
  styleUrls: ['./exercice07.component.scss']
})
export class Exercice07Component {
  timer! : ReturnType<typeof setInterval> |null ;
  count : number = 0;
  iscounting : boolean = false;
  ispaused : boolean = false;
  isreset : boolean = false;

  start (): void {
    if (this.timer)return;
    this.timer= setInterval(() => { this.count++; }, 1000);
    this.iscounting = true;
    this.ispaused=false;
    this.isreset =false;    
  }

  stop () : void {
    if(!this.timer) return;
    clearInterval(this.timer);
    this.timer = null;
    this.iscounting = false;
    this.ispaused=true;
    this.isreset =false;    
  
  }

  reset () : void {
    this.count = 0 ;
    this.stop();
    this.iscounting = false;
    this.ispaused=false;
    this.isreset =true;    
  }



}
