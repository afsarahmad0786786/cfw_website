import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class GetOrdersDetailsService {
  dbCollectionRef: any = '';
  dbLogsRef: string = '';
  productsQuery: any = '';
  logsQuery: string = '';
  getNotesSnapshot: null = null;
  getLogsSnapshot: null = null;
  data: any
  uuid: any
  orders: any = []
  totalPrice: number = 0

  constructor() { 
    this.data = JSON.parse(localStorage.getItem('data') as string) ?? {}
    this.uuid = this.data['uuid']
  }

  async getOrderDetails() {
    this.dbCollectionRef = collection(db, 'users', this.uuid, 'orders')
    this.productsQuery = query(this.dbCollectionRef)
    const querySnapshot = await getDocs(this.productsQuery);
    querySnapshot.forEach((doc: any) => {
      let orderDetails = {
        id: doc.id,
        productName: doc.data().productName,
        price: doc.data().price,
        img: doc.data().img,
        quantity: doc.data().quantity,
      }
      this.orders.push(orderDetails)
      
    });
    return this.orders
  }
}
