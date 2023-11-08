import { Component } from '@angular/core';
//@ts-ignore
import { auth } from '../js/firebase.js'
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  adduserForm: FormGroup
  success: boolean = false
  message: string = ''
  user: string = ''

  constructor(private _formBuilder: FormBuilder,
    private router: Router) {
    this.adduserForm = this._formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    signInWithEmailAndPassword(auth, this.adduserForm.value.email, this.adduserForm.value.password)
      .then((userCredential: any) => {
        let data = {
          'email': userCredential.user.email,
          'createdAt': userCredential.user.reloadUserInfo.lastLoginAt,
          'uuid': userCredential.user.uid
        };
        localStorage.setItem('data', JSON.stringify(data))
        //this.router.navigate(['auth/otp'])
        this.router.navigate(['dashboard'])
      })
      .catch((error) => {
        const errorCode = error.code;
        this.message = error.message.replace('Firebase:', 'Message:');
      });
  }
}
