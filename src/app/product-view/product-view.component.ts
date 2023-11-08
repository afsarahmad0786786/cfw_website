import { Component, OnInit, computed, signal } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
// @ts-ignore
import { store } from '../store/cartStore.ts'
//@ts-ignore
import { db } from '../js/firebase.js'
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  where
} from "firebase/firestore";

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
  dbCollectionRef: any = '';
  dbLogsRef: string = '';
  productsQuery: any = '';
  logsQuery: string = '';
  getNotesSnapshot: null = null;
  getLogsSnapshot: null = null;
  products: any = []
  selectedValue: any = '1'
  data: any
  uuid: any
  existingIdFromOrder: any = []


  constructor(private product: ProductsService,
    private route: ActivatedRoute,
    private _location: Location) {
    this.data = JSON.parse(localStorage.getItem('data') as string) ?? {}
    this.uuid = this.data['uuid']
    this.categoryName = this.route.snapshot.paramMap.get('categoryName')
    this.getProductsByCategory()
    this.backup = this.products
    this.spinnerLoading = false
  }

  getRatings(rating: number) {
    return `--rating:${rating}`
  }


  onChange(searchValue: any) {
    this.products = this.backup
    if (searchValue) {
      const filterData = this.products.filter((product: any) => {
        const title: string = product.productName.toLowerCase();
        const search: string = searchValue.toLowerCase()
        return title.includes(search)
      })
      this.products = filterData
    } else {
      this.products = this.backup
    }
  }

  sortByPrice() {
    console.log('sorting')
    let sortedData
    if (this.sortValue) {
      this.sortValue = false
      sortedData = this.products.sort((value1: any, value2: any) => { return value1.price - value2.price })
    } else {
      this.sortValue = true
      sortedData = this.products.sort((value1: any, value2: any) => { return value2.price - value1.price })
    }
    this.productList = sortedData
  }

  async getProductsByCategory() {
    this.dbCollectionRef = collection(db, 'products')
    this.productsQuery = query(this.dbCollectionRef, where("productType", "==", this.categoryName))
    const querySnapshot = await getDocs(this.productsQuery);
    console.log(querySnapshot);

    querySnapshot.forEach((doc: any) => {
      let product = {
        id: doc.id,
        productName: doc.data().productname,
        price: doc.data().price,
        isAvailable: doc.data().isAvailable,
        img: doc.data().img,
        categoryId: doc.data().categoryId,
        productType: doc.data().productType,
        productId: doc.data().productId
      }
      this.products.push(product)
      this.dataLoaded = true
    });
  }

  onSelected(value: string): void {
    console.log(value);

    this.selectedValue = value;
  }

  public async addToCart(product: any) {
    this.dbCollectionRef = collection(db, 'users', this.uuid, 'orders')
    this.productsQuery = query(this.dbCollectionRef)
    // @ts-ignore
    const querySnapshot: any = await getDocs(this.productsQuery);
    querySnapshot.forEach((doc: any) => {
      let product = {
        id: doc.id,
        productName: doc.data().productName
      }
      this.existingIdFromOrder.push(product)
    });
    let index = this.existingIdFromOrder.findIndex((e: any) => e.productName === product.productName)

    if (index === -1) {
      await addDoc(this.productsQuery, {
        categoryId: product.categoryId,
        img: product.img,
        price: product.price,
        productId: product.productId,
        productName: product.productName,
        productType: product.productType,
        quantity: this.selectedValue
      })
    } else {
      await updateDoc(doc(this.dbCollectionRef, this.existingIdFromOrder[index].id), {
        quantity: this.selectedValue
      })
    }
    //@ts-ignore

  }

  backClicked() {
    this._location.back();
  }
}
