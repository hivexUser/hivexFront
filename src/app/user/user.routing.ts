import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { CarComponent } from './car/car.component';
import { ShopComponent } from './shop/shop.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { UniversityComponent } from './university/university.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeSellerComponent } from '../seller/home-seller/home-seller.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { PermissionsGuard } from '../guards/permissions.guard';
import { StoreComponent } from './store/store.component';
import { StoreUserComponent } from './store-user/store-user.component';
import { ConfirmedEmailComponent } from './confirmed-email/confirmed-email.component';


const routes: Routes = [
    {path: 'inicio',component:InicioComponent},
    {path: 'checkout',component:CheckoutComponent, canActivate: [PermissionsGuard]},
    {path: 'detail',component:DetailComponent, canActivate: [PermissionsGuard]},
    {path: 'contact',component:ContactComponent},
    {path: 'car',component:CarComponent, canActivate: [PermissionsGuard]},
    {path: 'categories',component:ShopComponent, canActivate: [PermissionsGuard]},
    {path: 'Catalogue',component:CatalogoComponent, canActivate: [PermissionsGuard]},
    {path: 'university',component:UniversityComponent},
    {path: 'login',component:LoginComponent},
    {path: 'register',component:RegisterComponent},
    {path: 'home',component:HomeUserComponent, canActivate: [PermissionsGuard]},
    {path: 'store',component:StoreComponent},
    {path: 'storeUser',component:StoreUserComponent, canActivate: [PermissionsGuard]},
    {path: 'confirmed',component:ConfirmedEmailComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{

}
