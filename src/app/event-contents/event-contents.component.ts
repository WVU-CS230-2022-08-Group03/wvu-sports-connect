import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-contents',
  templateUrl: './event-contents.component.html',
  styleUrls: ['./event-contents.component.css']
})
export class EventContentsComponent implements OnInit {
 @Input() img:string;
 @Input() eventName:string;
 @Input()time:number;
 @Input() Location:string;
 
  constructor() { 
    this.img="";
        this.eventName="missing ";
        this.time = 0.00;
        this.Location=" missing";
  }

  ngOnInit(): void {
  }

}
