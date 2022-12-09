import { Component, OnInit, Input } from '@angular/core';
import { MessageItemModel } from 'src/app/message-backend/message-item.model';
import { MessageService } from 'src/app/message-backend/message.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  items: MessageItemModel[] = [];
  constructor(private messageService: MessageService, private auth: AuthService) {
    
  }

  ngOnInit(): void {
    this.messageService.getMessages().subscribe((items: MessageItemModel[]) => {
      for (var x of items){
        console.log(x);
        this.items.push(x)
      }
    })
  }

  addMessage(message: MessageItemModel){
    console.log("You clicked Send.");
    console.log(message);
    this.messageService.addMessage(message);
  }
}
