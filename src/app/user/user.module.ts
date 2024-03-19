import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { CarComponent } from './car/car.component';
import { SharedModule } from '../shared/shared.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { UniversityComponent } from './university/university.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    InicioComponent,
    ContactComponent,
    DetailComponent,
    CheckoutComponent,
    ShopComponent,
    CarComponent,
    CatalogoComponent,
    UniversityComponent,
    LoginComponent,
    RegisterComponent,
    HomeUserComponent,

  ],
  exports: [


  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
