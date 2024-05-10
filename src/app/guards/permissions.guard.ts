import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private router: Router, private Toast: ToastrService,) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.hasUserPermission()) {
      return true;
    }
    // Redirect to the login page
 this.Toast.error('Not permission', 'Login first');
    this.router.navigate(['/inicio']); // Use navigate method of Router
    return false;
  }
 
  hasUserPermission(): boolean {
    const userId = localStorage.getItem('userId');
    if (!userId || userId.trim() === '') {
      return false;
    }
    return true;
  }
}
