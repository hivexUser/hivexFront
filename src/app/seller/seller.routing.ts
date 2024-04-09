import { StatisticsComponent } from './statistics/statistics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { DashboardSellerComponent } from './dashboard-seller/dashboard-seller.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ChatsComponent } from './chats/chats.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';

import { LoginSellerComponent } from './login-seller/login-seller.component';
import { FormExcelComponent } from './form-excel/form-excel.component';
import { PermissionsSellerGuard } from '../guards/permissions-seller.guard';



const routes: Routes = [
    {path: 'homeSeller',component:HomeSellerComponent},
    {path: 'dashboardSeller',component:DashboardSellerComponent, canActivate: [PermissionsSellerGuard]},
    {path: 'listProducts',component:ListProductsComponent, canActivate: [PermissionsSellerGuard]},
    {path: 'formProduct',component:FormProductComponent, canActivate: [PermissionsSellerGuard]},
    {path: 'editarProduct/:id',component:FormProductComponent, canActivate: [PermissionsSellerGuard]},
    {path: 'chats',component:ChatsComponent, canActivate: [PermissionsSellerGuard]},
    {path: 'orders',component:OrdersComponent, canActivate: [PermissionsSellerGuard]},
    {path: 'statistics',component:StatisticsComponent, canActivate: [PermissionsSellerGuard]},
    {path: 'registerSeller',component:RegisterComponent},
    {path: 'loginSeller',component:LoginSellerComponent},
    {path: 'formExcel',component:FormExcelComponent, canActivate: [PermissionsSellerGuard]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule{

}
