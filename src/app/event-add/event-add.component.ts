import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-backend/event-service';
import { EventItemModel } from '../event-backend/eventlist';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  constructor(private ps:EventService) { }

  ngOnInit(): void {
  }

  addEvent(event: EventItemModel[]){
    this.ps.addEvent(event);
  }
}
