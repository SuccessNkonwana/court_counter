import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Team A
 teamA:number=0;
  addA(num:number) {
    this.teamA=this.teamA+num;
    
}
subA(num:number) {
  this.teamA=this.teamA-num;
  
}

//Team B
teamB:number=0;
  addB(num:number) {
    this.teamB=this.teamB+num;
    
}
subB(num:number) {
  this.teamB=this.teamB-num;
  
}

//reset button
reset(){
  this.teamA=0;
  this.teamB=0;
}
  constructor() {}

}
