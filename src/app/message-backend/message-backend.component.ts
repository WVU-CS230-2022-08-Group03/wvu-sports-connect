import { Component, OnInit, Input } from '@angular/core';
import { MessageItemModel } from './message-item.model';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../account-system/shared/services/auth.service';

@Component({
  selector: 'app-message-backend',
  templateUrl: './message-backend.component.html',
  styleUrls: ['./message-backend.component.css']
})
export class MessageBackendComponent implements OnInit {

  @Input() img: string;
  @Input() userName: string;
  @Input() messageBody: string;
  message: any;

  constructor(private ps: MessageService, auth: AuthService) { 
    this.img = "";
    this.userName = auth.userData.displayName;
    this.messageBody = "Welcome to Messages. To add a message, fill out your name and message then click send.";
  }

  ngOnInit(): void {
    
  }

}
