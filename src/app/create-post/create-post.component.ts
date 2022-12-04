import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-backend/post-service';
import { PostItemModel } from '../post-backend/postlist';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private ps:PostService) {}

  ngOnInit(): void {
  }

  addEvent(post: PostItemModel[]){
    this.ps.addPost(post);
  }

}
