import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EventItemModel } from "./eventlist";
import { AngularFireDatabase, AngularFireDatabaseModule } from "@angular/fire/compat/database";

@Injectable(
    {providedIn: 'root' }
)

export class EventService{
    private BaseUrl: string = "https://wvu-sports-connect-default-rtdb.firebaseio.com/"
    private eventsEndPoint: string = "events.json"

    constructor(private db:AngularFireDatabase){}

    getEvents(){
        return this.db.list<EventItemModel>("events").valueChanges();
    }

    addEvent(event: EventItemModel[]){
        this.db.list<EventItemModel[]>("events").push(event);
    }
}
