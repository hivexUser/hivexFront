import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productCar } from '../models/productCar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {
url='https://backendlyon.onrender.com/shoppingCar';

  constructor(private http: HttpClient) { }

  addProduct(ProductCar: any){
    const productCar: productCar = {
      shoppingCartId: ProductCar.shoppingCartId,
      productId: ProductCar.productId,
      total: ProductCar.total,
      quantity: ProductCar.quantity,
    };
    
    console.log('producto recibido de service', ProductCar);
    return this.http.post(this.url, productCar);
  }

  getProductById(id: string){
    // return this.http.post(this.url, id);
  }
}
