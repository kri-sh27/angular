import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
@Input() myhobby:any[]=[];
@Output() mydeletehobby=new EventEmitter;
@Output() addf=new EventEmitter;

  constructor() { }
  deleteHobby(data:number){
    this.mydeletehobby.emit(data);
  }

  afav(data:number){
    this.addf.emit(data);
  }
  ngOnInit(): void {
  }

}
