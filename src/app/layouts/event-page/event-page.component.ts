import { Component, OnInit } from '@angular/core';
import { EventItemModel } from 'src/app/common/models/event.model';
import { DatabaseService } from 'src/app/common/services/database.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  public items: EventItemModel[] = [];
  
  constructor(private dbs: DatabaseService) {}

  ngOnInit(): void {
    this.dbs.getListHandle<EventItemModel>("events").subscribe( (items: EventItemModel[]) => {
      for (var x of items){
        console.log(x);
        this.items.push(x);
      }
    });
  }
}
