import { Component, OnInit, Input } from '@angular/core';
import { MessageItemModel } from 'src/app/message-backend/message-item.model';
import { MessageService } from '../../message-backend/message.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/account-system/shared/services/auth.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  
  items: MessageItemModel[] = [];
  constructor(private messageSerivce: MessageService, auth: AuthService) {
    
   }

  ngOnInit(): void {
    this.messageSerivce.getMessages().subscribe((items: MessageItemModel[]) => {

      for (var x of items){
        console.log(x);
        this.items.push(x)
      }

    })
  }

  addMessage(message: MessageItemModel){
    console.log("You clicked Send.");
    console.log(message);
    this.messageSerivce.addMessage(message);
  }

}
