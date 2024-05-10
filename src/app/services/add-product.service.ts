import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://backendlyon.onrender.com/product/';
  urldelete = 'https://backendlyon.onrender.com/product/delete/';
  urlUpdateStatus = 'https://backendlyon.onrender.com/product/updateStatus/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.urldelete + id);
  }

  addProduct(product: FormData): Observable<any> {
    return this.http.post(this.url, product);
  }

  editarProduct(id: string, Product: FormData): Observable<any> {
    return this.http.put(this.url + id, Product);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateProductStatus(id: string, status: string): Observable<any> {
    return this.http.put(this.urlUpdateStatus + id, { status });
  }
}
