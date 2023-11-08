import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//@ts-ignore
import { auth } from '../js/firebase.js'
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import {GetOrdersDetailsService}  from '../services/get-orders-details.service'



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  checked: boolean = false;
  routePath: string = ''
  menuType: string = 'default'
  data: any
  email: any
  cartCount: number = 0

  constructor(private elementRef: ElementRef,
    private router: Router,
    private orders: GetOrdersDetailsService) {
    this.routePath = window.location.pathname;


  }

  ngOnInit(): void {
    this.orders.getOrderDetails().then((res: any) => {
      if (res) {
        console.log(res);
        
       this.cartCount = res.length
      }
    })

    this.router.events.subscribe((val: any) => {
      
      this.data = JSON.parse(localStorage.getItem('data') as string) ?? {}
      this.email = this.data['email']
      if (val.url) {
        if (localStorage.getItem('data') && val.url.includes('dashboard') || val.url.includes('order')
          || val.url.includes('product')) {
          this.menuType = 'dashboard'
        } else {
          this.menuType = 'default'
        }
      }
    })
  }


  changeMode() {
    const color = this.checked ? '#E1D9D1' : '#FFFFFF'
    this.changeColor(color)

  }

  changeColor(color: string) {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = color;

  }

  logout() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('data')
        this.router.navigate(['auth'])
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
}


