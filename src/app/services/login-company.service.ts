import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginCompanyService {
  apiUrl = 'https://backendlyon.onrender.com/companies/login';
  constructor(private http: HttpClient) { }

  loginCompany(loginUser:LoginUser):Observable<any>{
    console.log(loginUser);
    const user = {
      email: loginUser.email,
      password: loginUser.password
    }
    return this.http.post<any>(this.apiUrl, user);
  }
  }

