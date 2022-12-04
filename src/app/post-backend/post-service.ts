import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostItemModel } from "./postlist";
import { AngularFireDatabase, AngularFireDatabaseModule } from "@angular/fire/compat/database";

@Injectable(
    {providedIn: 'root' }
)

export class PostService{
    private BaseUrl: string = "https://wvu-sports-connect-default-rtdb.firebaseio.com/"
    private eventsEndPoint: string = "posts.json"

    constructor(private db:AngularFireDatabase){}

    getPosts(){
        return this.db.list<PostItemModel>("posts").valueChanges();
    }

    addPost(event: PostItemModel[]){
        this.db.list<PostItemModel[]>("posts").push(event);
    }
}
