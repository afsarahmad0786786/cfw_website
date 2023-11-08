import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//@ts-ignore
import * as moment from 'moment';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  data:any
 email:any = ''
 createdAt: any
  constructor(private route: ActivatedRoute,
    private router: Router) {
      this.data = JSON.parse(localStorage.getItem('data') as string) ?? {}
      this.email = this.data['email']
      // const timestamp = this.data.createdAt
      // const date = new Date(timestamp)
      // const yeat = date.getFullYear()
      // this.createdAt = moment.unix(timestamp * 1000).format('L')
  }


  

}



  
