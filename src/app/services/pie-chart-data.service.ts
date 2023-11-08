import { Injectable, OnInit } from '@angular/core';
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
  where,
  getCountFromServer
} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class PieChartDataService implements OnInit {
  dbCollectionRef: any = '';
  dbLogsRef: string = '';
  productsQuery: any = '';
  logsQuery: string = '';
  getNotesSnapshot: null = null;
  getLogsSnapshot: null = null;
  products: any = []
  boxCount: any
  voucherFile: any
  kangarooFile: any
  chinaFile: any
  laminaFile: any
  fourFile: any
  springFile: any


   constructor()  {
     this.getProductsByCategory('Box File').then((res:any) => {
       this.boxCount = res
     })
     this.getProductsByCategory('Voucher File').then((res:any) => {
       this.voucherFile = res
     })
     this.getProductsByCategory('Kangaroo File').then((res:any) => {
       this.kangarooFile = res
     })
     this.getProductsByCategory('China Box File').then((res:any) => {
       this.chinaFile = res
     })
     this.getProductsByCategory('Lamina File').then((res:any) => {
       this.laminaFile = res
     })
     this.getProductsByCategory('Four Lace File').then((res:any) => {
       this.fourFile = res
     })
     this.getProductsByCategory('Spring File').then((res:any) => {
       this.springFile = res
     })
  
    
  }

 async ngOnInit(): Promise<void> {
    
    
  }


  async getProductsByCategory(category: string): Promise<any> {
    this.dbCollectionRef = collection(db, 'products')
    this.productsQuery =  query(this.dbCollectionRef, where("productType", "==", category))
    const q: any = await getDocs(this.productsQuery)
    return q.size
  }
}
