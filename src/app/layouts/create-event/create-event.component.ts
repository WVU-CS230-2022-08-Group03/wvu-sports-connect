import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event-backend/event-service';
import { EventItemModel } from 'src/app/event-backend/eventlist';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private ps: EventService) { }

  ngOnInit(): void {
  }

  addEvent(event: EventItemModel[]){
    this.ps.addEvent(event);
  }
}
