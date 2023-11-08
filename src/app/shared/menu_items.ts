import { Injectable } from "@angular/core"

export interface Menu {
    state:string,
    name:string,
    icon:string,
    role:string
}


const MENUITEMS = [ 
    {state:'home', name:'home', icon:'home', role:''}
]

@Injectable()
export class MenuItems {
   getMenuItems(): Menu[] {
    return MENUITEMS
   }
}
