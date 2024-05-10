import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface SideNaavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  admin= localStorage.getItem('admin' || null)
  title = 'Hivexlat';
  aparecer: boolean = false;
  id:any= localStorage.getItem('companyId' || null)

  showSidenav: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSidenav = this.shouldShowSidenav(event.url);
      }
      if(this.admin == null){
        this.aparecer = false
      }

    });
  }



  shouldShowSidenav(url: string): boolean {
    // Excluir rutas específicas usando condicionales separadas
    if (url.includes('/dashboardSeller') || url.includes('/inicio')) {
        return false;
    }
    // Aquí verificamos si la ruta actual es alguna de las rutas deseadas
    return url.includes('/dashboard') ||
           url.includes('/usuarios') ||
           url.includes('/agregar-producto') ||
           url.includes('/empresas') ||
           url.includes('/allproducts') ||
           url.includes('/product-list') ||
           url.includes('/mensajes-clientes') ||
           url.includes('/productos') ||
           url.includes('/files');
}



  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNaavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }
}
