import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginCompanyService } from 'src/app/services/login-company.service';
import { LoginUser } from './../../models/login';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.css']
})
export class LoginSellerComponent implements OnInit {

  emailEnviado: string = '';
  LoginForm: FormGroup;

  loading = false;




  constructor(private toastr: ToastrService,
    private fb: FormBuilder, private router: Router, private _Login: LoginCompanyService) {
    this.LoginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  ngOnInit(): void {

  }

  login(LoginUser: LoginUser) {
    this.loading = true;
    this._Login.loginCompany(LoginUser).subscribe(
      response => {
        console.log(response);
        if (response && response.company && response.company._id) {
          localStorage.setItem('companyId', response.company._id);
          localStorage.setItem('companyName', response.company.companyName);
          if (response.company.status === 'new') {
            this.toastr.info('Please wait for the admin to approve your account', 'Account not approved');
            this.loading = false;
            return;
          }
          if (response.company.status === 'reject') {
            this.toastr.error('Your account has been rejected', 'Account rejected');
            this.loading = false;
            return; 
          }
          if (response.company.status === 'new seller') {
            this.toastr.info('Please wait for the admin to approve your account', 'Account not approved');
            this.loading = false;
            return;
          }
          this.router.navigate(['/dashboardSeller']);
          this.toastr.success('Welcome to "Hivex"', 'Login successfull');
          this.loading = false;
        } else {
          this.loading = false;
          this.toastr.error('Email o contraseña incorrectos', 'Error en el inicio de sesión');
        }
      },
      error => {
        this.loading = false;
        this.toastr.error('User incorrect', 'Error');
      }
    );
  }
}
