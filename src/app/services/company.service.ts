import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = 'https://backendlyon.onrender.com/companies/';

  constructor(private http: HttpClient) { }




addCompnay(Company:FormData):Observable<any>{
  return this.http.post<any>(this.apiUrl, Company);
}

getCompanies():Observable<any>{
  return this.http.get(this.apiUrl);
}

}
