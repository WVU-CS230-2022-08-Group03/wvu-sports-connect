import { Component, OnInit, Input } from '@angular/core';
import { MessageItemModel } from 'src/app/common/models/message.model';
import { DatabaseService } from 'src/app/common/services/database.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public items: MessageItemModel[] = [];
  
  constructor(private dbs: DatabaseService) {}

  ngOnInit(): void {
    this.dbs.getListHandle<MessageItemModel>("messages").subscribe((items: MessageItemModel[]) => {
      for (var x of items) {
        console.log(x);
        this.items.push(x);
      }
    });
  }

  addMessage(message: MessageItemModel){
    console.log("You clicked Send.");
    console.log(message);
    this.dbs.addEntries("messages", [message]);
  }
}
