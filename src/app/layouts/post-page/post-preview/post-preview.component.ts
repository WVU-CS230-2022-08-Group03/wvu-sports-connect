import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {
    @Input() title: string;
    @Input() hostname: string;
    @Input() evt_name: string;
    @Input() evt_addr: string;
    @Input() evt_date: string;
    @Input() evt_time: string;
    @Input() usernum: string;
    @Input() create_date: string;
    
    constructor() {
        this.title = "";
        this.hostname = "";
        this.evt_name = "";
        this.evt_addr = "";
        this.evt_date = "";
        this.evt_time = "";
        this.usernum = "";
        this.create_date = "";
    }
    
    ngOnInit(): void {}
}

