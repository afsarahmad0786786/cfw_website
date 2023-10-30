import { Component, OnInit, computed, signal } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router'
// @ts-ignore
import {store} from '../store/cartStore.ts'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  productList: any = []
  categoryName: any = ''
  searchValue: any = 'qqqqq'
  sortValue: boolean = false
  backup: any = []
  dataLoaded: boolean = false
  spinnerLoading: boolean = true
  // search = signal('');

  constructor(private product: ProductsService,
    private route: ActivatedRoute) {
    this.categoryName = this.route.snapshot.paramMap.get('categoryName')
    this.product.getProducts(this.categoryName).subscribe((res: any) => {
      this.dataLoaded = true
      console.log(res)
      this.productList = res
      this.backup = res
      this.spinnerLoading = false
    })
  }

  getRatings(rating: number) {
    return `--rating:${rating}`
  }

  data = computed(() => {
  })

  onChange(searchValue: any) {
    this.productList = this.backup
    if (searchValue) {
      const filterData = this.productList.filter((product: any) => {
        const title: string = product.title.toLowerCase();
        const description: string = product.description.toLowerCase();
        const search: string = searchValue.toLowerCase()
        return title.includes(search) || description.includes(search)
      })
      this.productList = filterData
    } else {
      this.productList = this.backup
    }
  }

  sortByPrice() {
    console.log('sorting')
    let sortedData
    if (this.sortValue) {
      this.sortValue = false
      sortedData = this.productList.sort((value1: any, value2: any) => { return value1.price - value2.price })
    } else {
      this.sortValue = true
      sortedData = this.productList.sort((value1: any, value2: any) => { return value2.price - value1.price })
    }
    this.productList = sortedData
  }

  addToCart(product:any) {
    // @ts-ignore
    let index = store.cart.findIndex((storeProd: any) => product.id === storeProd.id);
    if (index === -1) {
        product['quantity'] = 1
        // @ts-ignore
        store.cart.push(product)
    } else {
        product['quantity'] += 1
    }
    // @ts-ignore
    console.log(store.cart)

  }
}
