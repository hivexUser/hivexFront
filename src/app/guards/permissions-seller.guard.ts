import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsSellerGuard implements CanActivate {
  constructor(private router: Router, private Toast: ToastrService,) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.hasUserPermission()) {
      return true;
    }
    // Redirect to the login page
 this.Toast.error('Not permission', 'Login first');
    this.router.navigate(['/homeSeller']); // Use navigate method of Router
    return false;
  }

  hasUserPermission(): boolean {
    const userId = localStorage.getItem('companyId');
    if (!userId || userId.trim() === '') {
      return false;
    }
    return true;
  }
}
