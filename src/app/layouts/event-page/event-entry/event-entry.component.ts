import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-entry',
  templateUrl: './event-entry.component.html',
  styleUrls: ['./event-entry.component.css']
})
export class EventEntryComponent implements OnInit {
  @Input() img: string;
  @Input() cardTitle: string;
  @Input() time: string;
  @Input() location: string;
  @Input() cardDesc: string;

  constructor() {
    this.img = "missing";
    this.cardTitle= "missing";
    this.time = "missing";
    this.location = "missing";
    this.cardDesc = "missing";
  }

  ngOnInit(): void {}
}
