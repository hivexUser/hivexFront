import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUser } from 'src/app/models/login';
import { LoginAdminService } from 'src/app/services/login-admin.service';
import { LoginCompanyService } from 'src/app/services/login-company.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  loading = false;
  constructor(private toastr: ToastrService,
    private fb: FormBuilder, private router: Router, private _Login: LoginAdminService) {
      this.LoginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      })
     }

  ngOnInit(): void {
  }


  login() { // No se espera ningún argumento aquí
    this.loading = true;
    const loginUser: LoginUser = {
      email: this.LoginForm.get('email')?.value,
      password: this.LoginForm.get('password')?.value
    };

    this._Login.loginAdmin(loginUser).subscribe(
      response => {
        if (response && response.user) {
          this.router.navigate(['/dashboard']);
          localStorage.setItem('admin', 'adminActivate');
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
