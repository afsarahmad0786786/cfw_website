import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
//@ts-ignore
import { auth } from '../js/firebase.js'
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { MenuItems } from '../shared/menu_items';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCategory: any = []
  dataLoaded: boolean = true
  uuid: string = ''
  email: string = ''



  constructor(private category: CategoryService,
    private router: Router,
  ) {
    this.category.getCategorys().subscribe((res: any) => {
      this.dataLoaded = false
      console.log(res)
      this.allCategory = res
    })
    this.init()
  }

  ngOnInit(): void {
    if (localStorage.getItem('data') != null) {
      this.router.navigate(['dashboard'])
    }
  }

  init() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        this.uuid = user.uid;
        // this.email = user.email
        //this.user.password = user.password
        // this.router.navigate(['dashboard'])

      } else {
        //this.router.navigate(['/'])
      }
    })
  }


}
