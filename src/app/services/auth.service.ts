import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    const data:any = JSON.parse(localStorage.getItem('data') as string) ?? {}
    const email = data['email']
    if(!email) {
      this.router.navigate(['auth'])
      return false;
    } else {
      return true
    }
  }
}
