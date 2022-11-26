import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EventItemModel } from "./eventlist";

@Injectable(
    {providedIn: 'root' }
)

export class EventService{
    private BaseUrl: string = "https://wvu-sports-connect-default-rtdb.firebaseio.com/"
    private eventsEndPoint: string = "events.json"

    constructor(private http:HttpClient){}

    getEvents(){
        return this.http.get<EventItemModel[]>(this.BaseUrl + this.eventsEndPoint)
    }
}
