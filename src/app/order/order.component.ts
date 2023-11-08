import { Component } from '@angular/core';
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
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  dbCollectionRef: any = '';
  dbLogsRef: string = '';
  productsQuery: any = '';
  logsQuery: string = '';
  getNotesSnapshot: null = null;
  getLogsSnapshot: null = null;
  data:any
  uuid:any
  orders:any = []
  totalPrice:number = 0


  constructor() {
      this.data = JSON.parse(localStorage.getItem('data') as string) ?? {}
      this.uuid = this.data['uuid']
      this.getProductsByCategory()
  }

  async getProductsByCategory() {
    this.dbCollectionRef = collection(db, 'users', this.uuid, 'orders')
    this.productsQuery = query(this.dbCollectionRef)
    const querySnapshot = await getDocs(this.productsQuery);
    console.log(querySnapshot);

    querySnapshot.forEach((doc: any) => {
      
      let orderDetails = {
        id: doc.id,
        productName: doc.data().productName,
        price: doc.data().price,
        img: doc.data().img,
        quantity: doc.data().quantity,
        
      }
      this.orders.push(orderDetails)
      //localStorage.setItem('CartCount', this.orders.length)
      //this.dataLoaded = true
    });

    this.totalPrice =  this.orders.reduce((acc:any, value:any) => {
      acc += value.price * value.quantity
      return acc
    }, 0)

  }

}
