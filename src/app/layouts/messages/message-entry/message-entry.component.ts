import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-message-entry',
  templateUrl: './message-entry.component.html',
  styleUrls: ['./message-entry.component.css']
})
export class MessageEntryComponent implements OnInit {
  @Input() img: string;
  @Input() userName: string;
  @Input() messageBody: string;
  message: any;

  constructor(private auth: AuthService) { 
    this.img = "";
    this.userName = auth.userData.displayName;
    this.messageBody = "Welcome to Messages. To add a message, fill out your name and message then click send.";
  }

  ngOnInit(): void {}
}
