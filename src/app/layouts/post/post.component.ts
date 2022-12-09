import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  route: ActivatedRoute;
  id: string | null;
  
  constructor(route: ActivatedRoute) {
    this.route = route;
    this.id = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe( (param) => {
      this.id = param['id'];
    });
  }
}
