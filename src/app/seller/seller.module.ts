import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardSellerComponent } from './dashboard-seller/dashboard-seller.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ChatsComponent } from './chats/chats.component';
import { OrdersComponent } from './orders/orders.component';
import { FormProductComponent } from './form-product/form-product.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginSellerComponent } from './login-seller/login-seller.component';
import { FormExcelComponent } from './form-excel/form-excel.component';




@NgModule({
  declarations: [
    HomeSellerComponent,
    DashboardSellerComponent,
    ListProductsComponent,
    ChatsComponent,
    OrdersComponent,
    FormProductComponent,
    StatisticsComponent,
    RegisterComponent,
    LoginSellerComponent,
    FormExcelComponent

  ],
  exports: [
    HomeSellerComponent, DashboardSellerComponent,RegisterComponent, 
  ],

  imports: [BrowserModule, RouterModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule, HttpClientModule]
})
export class SellerModule { }
