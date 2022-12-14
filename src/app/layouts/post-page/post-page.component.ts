import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/common/services/database.service';
import { PostItemModel } from 'src/app/common/models/post.model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  public items: PostItemModel[] = [];
  
  constructor(private dbs: DatabaseService) {}

  ngOnInit(): void {
    this.dbs.getListHandle<PostItemModel>("posts").subscribe( (items: PostItemModel[]) => {
      for (var x of items){
        console.log(x);
        this.items.push(x);
      }
    });
  }
}
