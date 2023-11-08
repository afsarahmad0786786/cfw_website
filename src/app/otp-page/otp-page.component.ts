import { Component } from '@angular/core';
import {NgxOtpInputConfig} from 'ngx-otp-input'

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent {

  otpInputConfig:NgxOtpInputConfig ={
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class'
    }
  }

  // handleotpChange(value: any): void {

  // }
   
  // handleFillEvent(value: any):void {

  // }

}
