import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'; // Import the 'HttpClient' class
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { HttpHeaders } from '@angular/common/http'; // Import the 'HttpHeaders' class
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://backendlyon.onrender.com/product/';
  urldelete='https://backendlyon.onrender.com/product/delete/'
  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

  deleteProduct(id:string):Observable<any>{
    return this.http.delete(this.urldelete+id);
  }

  addProduct(product:FormData):Observable<any>{

    return this.http.post(this.url, product);
  }

  editarProduct(id: string, Product:FormData):Observable<any>{
    return this.http.put(this.url + id, Product);
  }
  
  getProductById(id: string):Observable<any>{
    return this.http.get(this.url + id);
  }


}
