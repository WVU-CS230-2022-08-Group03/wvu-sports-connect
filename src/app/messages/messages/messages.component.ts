import { Component, OnInit, Input } from '@angular/core';
import { MessageItemModel } from './message-item.model';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() img: string;
  @Input() userName: string;
  @Input() messageBody: string;
  message: any;
  

  constructor(private ps: MessageService) {
    this.img = "";
    this.userName = "System:";
    this.messageBody = "Welcome to Messages. To add a message, fill out your name and message then click send.";
   }

  ngOnInit(): void {
    this.ps.getMessages().subscribe((data: MessageItemModel[]) =>{
      console.log("Fetching messages...");
      for (var message of data){
        console.log(message);
        this.message.push(message);
      }
    });
  }

  addMessage(message: MessageItemModel){
    console.log("You clicked Send.");
    console.log(message);
    this.ps.addMessage(message);
  }

}
