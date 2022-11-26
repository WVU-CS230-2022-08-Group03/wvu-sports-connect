import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-backend',
  templateUrl: './event-backend.component.html',
  styleUrls: ['./event-backend.component.css']
})
export class EventBackendComponent implements OnInit {

  @Input() img: string;
  @Input() cardTitle: string;
  @Input() time: string;
  @Input() location: string;
  @Input() cardDesc: string;

  constructor() { 

    this.img = "missing"
    this.cardTitle= "missing"
    this.time = "missing"
    this.location = "missing"
    this.cardDesc = "missing"

  }

  ngOnInit(): void {
  }

}
