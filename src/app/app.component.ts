import { Component, Injectable, OnInit } from '@angular/core';
import { eventCardModel } from './event-contents/event-card.model';
import { event_cards } from './event-contents/event_cards';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'wvu-sports-connect-app';
  cards:eventCardModel[]=[]
  consructor(){
    for(var x of event_cards){
      console.log(x)
      this.cards.push(x)
    }
  }

  
 }
