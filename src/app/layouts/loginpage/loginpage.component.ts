import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
