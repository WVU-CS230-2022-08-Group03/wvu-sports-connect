import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-backend',
  templateUrl: './post-backend.component.html',
  styleUrls: ['./post-backend.component.css']
})
export class PostBackendComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() time: string;
  @Input() location: string;
  @Input() cardDesc: string;

  constructor() { 

    this.cardTitle= "missing"
    this.time = "missing"
    this.location = "missing"
    this.cardDesc = "missing"

  }

  ngOnInit(): void {
  }

}
