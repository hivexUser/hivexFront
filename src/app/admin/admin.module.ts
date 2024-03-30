import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


import { UserListComponent } from './usuarios/usuarios.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MensajesClientesComponent } from './mensajes-clientes/mensajes-clientes.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { BodyComponent } from './body/body.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    LoginComponent,
    UserListComponent,
    SidenavComponent,
    HeaderComponent,
    ProductListComponent,
    MensajesClientesComponent,
    EmpresasComponent,
    BodyComponent,
    AllproductsComponent,
    AgregarProductoComponent
    
  
   
 


  ],
  exports: [

    UserListComponent,
    SidenavComponent,
    HeaderComponent,
    ProductListComponent,
    MensajesClientesComponent,
    EmpresasComponent,
    BodyComponent,
    AllproductsComponent,
    AgregarProductoComponent
   

  ],

  imports:[BrowserModule, RouterModule, SharedModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
   
    
  
  ]
})
export class AdminModule { }
