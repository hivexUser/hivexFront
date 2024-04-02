import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ProductosComponent } from './productos/productos.component';
import { NavvComponent } from './navv/navv.component';
import { UserListComponent } from './usuarios/usuarios.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FilesComponent } from './files/files.component';
import { VerCompComponent } from './ver-comp/ver-comp.component';





const routes: Routes = [
    {path: 'loginAdmin',component:LoginComponent},
    
    { path: 'empresas', component: EmpresasComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'navv', component: NavvComponent},
    { path: 'usuarios', component: UserListComponent},
    { path: 'sidenav', component: SidenavComponent},
    { path: 'files', component: FilesComponent},
    { path: 'ver-comp', component: VerCompComponent},



  

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{

}
