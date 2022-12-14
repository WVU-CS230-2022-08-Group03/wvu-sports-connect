//Required Imports
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlSerializer } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})


export class AuthGuard implements CanActivate {
  
  //AuthService and Router initiated in constructor.
  constructor(
    public authService: AuthService,
    public router: Router
  ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //Calls Authervice to determine if user is logged in. If false redirect to login. 
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in']) 
    }
    //Else return true.
    return true;
  }
}