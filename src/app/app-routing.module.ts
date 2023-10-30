import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { SignComponent } from './sign/sign.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:categoryName',
    component: ProductViewComponent
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'product',
    component: ProductsComponent
  },
  {
    path: 'auth',
    component: SignComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
