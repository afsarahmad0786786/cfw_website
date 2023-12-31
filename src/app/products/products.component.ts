import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
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

  productview(category: string) {
    console.log(category)
    this.router.navigate([`product/${category}`])
  }

}
