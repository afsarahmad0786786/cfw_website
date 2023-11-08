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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  adduserForm: FormGroup
  success: boolean = false
  message: string = ''

  constructor(private _formBuilder: FormBuilder,
    private router: Router) {
    this.adduserForm = this._formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  public handleSubmit() {
    createUserWithEmailAndPassword(auth, this.adduserForm.value.email, this.adduserForm.value.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.success = true
        this.message = 'User Registered Successfully. Please Log In'
        this.router.navigate([auth])
      })
      .catch((error) => {
        const errorCode = error.code;
        this.message = error.message.replace('Firebase:', 'Message:');
        // ..
      });
  }
}


