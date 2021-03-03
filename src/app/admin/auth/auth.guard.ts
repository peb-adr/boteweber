import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminAuthenticationService } from './authentication.service';


@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
  constructor(
      private router: Router,
      private authenticationService: AdminAuthenticationService
  ) { }
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const currentUser = this.authenticationService.currentUserValue;
    // if (currentUser) {
    //     // logged in so return true
    //     return true;
    // }
    
    // // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    // return false;
    
    let loggedIn = this.authenticationService.adminToken != null;
    if (!loggedIn) {
      this.router.navigate(['admin/login']);
    }

    return loggedIn;
  }
}