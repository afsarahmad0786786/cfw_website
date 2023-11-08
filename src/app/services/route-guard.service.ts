import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private auth: AuthService,
    private router: Router) { }


  canActivate(router: ActivatedRouteSnapshot): boolean {
    if (this.auth.isAuthenticated()) {
      // this.router.navigate(['dashboard'])
      return true
    }

    else {
      localStorage.clear();
      // this.router.navigate(['/'])
      return false;

    }
  }


}
