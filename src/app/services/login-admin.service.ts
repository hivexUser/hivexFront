import { Injectable } from '@angular/core';
import { LoginUser } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {
url: string = 'https://backendlyon.onrender.com/user/loginAdmin';
  constructor(private http: HttpClient) { }


  loginAdmin(loginUser:LoginUser):Observable<any>{
    console.log(loginUser);
    const user = {
      email: loginUser.email,
      password: loginUser.password
    }
    return this.http.post<any>(this.url, user);
  }
}
