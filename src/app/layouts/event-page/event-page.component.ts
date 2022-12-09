import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event-backend/event-service';
import { EventItemModel } from 'src/app/event-backend/eventlist';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  items: EventItemModel[] = [];
  constructor(private eventService:EventService){
  }

  ngOnInit(): void {

    this.eventService.getEvents().subscribe((items: EventItemModel[]) => {

      for (var x of items){
        console.log(x);
        this.items.push(x)
      }

    })
  }

}
