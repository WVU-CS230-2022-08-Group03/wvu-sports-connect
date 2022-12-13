import { Component, OnInit } from '@angular/core';
import { EventItemModel } from 'src/app/common/models/event.model';
import { DatabaseService } from 'src/app/common/services/database.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private dbs: DatabaseService) {}

  ngOnInit(): void {}

  addEvent(event: EventItemModel){
    this.dbs.addEntries("events", [event]);
  }
}
