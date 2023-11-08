import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import {NgxOtpInputModule} from 'ngx-otp-input'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { SignComponent } from './sign/sign.component';
import { RegisterComponent } from './register/register.component';
import { ModalComponent } from './shared/modal/modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HelpViewComponent } from './help-view/help-view.component';
import { OtpPageComponent } from './otp-page/otp-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductViewComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    AboutusComponent,
    OrderComponent,
    ProductsComponent,
    SignComponent,
    RegisterComponent,
    ModalComponent,
    DashboardComponent,
    PieChartComponent,
    HelpViewComponent,
    OtpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxOtpInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
