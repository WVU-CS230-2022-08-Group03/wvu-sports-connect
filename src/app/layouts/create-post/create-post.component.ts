import { Component, OnInit } from '@angular/core';
import { PostItemModel } from 'src/app/common/models/post.model';
import { DatabaseService } from 'src/app/common/services/database.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private dbs: DatabaseService) {}

  ngOnInit(): void {}

  addPost(post: PostItemModel[]) {
    this.dbs.addEntries("posts", [post]);
  }
}
