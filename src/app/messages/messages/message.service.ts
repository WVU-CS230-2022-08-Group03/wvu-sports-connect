import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { MessageItemModel } from "./message-item.model"
import {AngularFireDatabase} from "@angular/fire/compat/database"

@Injectable(
    {providedIn: 'root'}
)
export class MessageService{

    private baseURL: string = "https://wvu-sports-connect-default-rtdb.firebaseio.com/";
    private messageEndPoint = "messages.json";

    constructor(private db: AngularFireDatabase){

    }

    getMessages(){
        return this.db.list<MessageItemModel>("messages").valueChanges();
    }

    getMessage(index:number){
        
    }

    addMessage(message: MessageItemModel){
        this.db.list<MessageItemModel>("messages").push(message);
    }

}