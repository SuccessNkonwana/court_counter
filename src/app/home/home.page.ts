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

// if(this.state.counter < 0){
//   this.setState({
//       counter:0
//   });
// }else {
//   this.setState({
//       counter: this.state.counter - 1
//   });
// }

subA(num:number) {
  this.teamA=this.teamA-num;
  if(this.teamA<0){
    this.teamA=0;
}
}

//Team B
teamB:number=0;
  addB(num:number) {
    this.teamB=this.teamB+num;
    
}
subB(num:number) {
  this.teamB=this.teamB-num;
  if(this.teamB<0){
    this.teamB=0;
}
}

//reset button
reset(){
  this.teamA=0;
  this.teamB=0;
}
  constructor() {}

}
