import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCategory: any = []
  dataLoaded: boolean = true

  constructor(private category: CategoryService,
    private router: Router) {
    this.category.getCategorys().subscribe((res: any) => {
      this.dataLoaded = false
      console.log(res)
      this.allCategory = res
    })
  }

  productview(category:string) {
    console.log(category)
    this.router.navigate([`product/${category}`])
  }
}
