import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private id: string | null;
  
  constructor(private route: ActivatedRoute) {
    this.id = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe( (param) => {
      this.id = param['id'];
    });
  }
}
