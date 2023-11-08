import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { SignComponent } from './sign/sign.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteGuardService } from './services/route-guard.service';
import { HelpViewComponent } from './help-view/help-view.component';
import { OtpPageComponent } from './otp-page/otp-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [RouteGuardService]
  },
  {
    path: 'product/:categoryName',
    component: ProductViewComponent,
    // canActivate: [RouteGuardService]
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'order',
    component: OrderComponent,
    // canActivate: [RouteGuardService]
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
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouteGuardService]
    // canActivate: authGuard
  },
  {
    path: 'help',
    component: HelpViewComponent,
  },
  {
    path: 'auth/otp',
    component: OtpPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
