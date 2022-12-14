import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {
    @Input() cardTitle: string;
    @Input() cardDesc: string;
    @Input() location: string;
    // @Input() hostname: string;
    // @Input() evt_name: string;
    // @Input() evt_addr: string;
    @Input() date: string;
    @Input() time: string;
    // @Input() usernum: string;
    // @Input() create_date: string;
    
    constructor() {
        this.cardTitle = "";
        // this.hostname = "";
        // this.evt_name = "";
        // this.evt_addr = "";
        this.date = "";
        this.time = "";
        // this.usernum = "";
        // this.create_date = "";
        this.location = "";
        this.cardDesc = "";
    }
    
    ngOnInit(): void {}
}

