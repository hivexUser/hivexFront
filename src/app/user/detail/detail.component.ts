import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productCar } from 'src/app/models/productCar';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCarService } from 'src/app/services/shopping-car.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  _id = localStorage.getItem('productId') || '';
  userId = localStorage.getItem('userId') || '';
  producto: any;

  constructor(private toastr: ToastrService  ,private router: Router, private _productService: ProductService, private _Car: ShoppingCarService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this._productService.getProductById(this._id).subscribe(
      (data) => {
        this.producto = data.product;
        console.log(this.producto);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addProduct(productos: productCar) {

    const productSend = { shoppingCartId: this.userId, productId: this._id, total: this.producto.price, quantity: this.producto.stock};
    console.log('producto enviado', productSend);
    this._Car.addProduct(productSend).subscribe(
      (data) => {
        this.toastr.success('Product added to shopping car', 'Success');
      },
      (error) => {
        this.toastr.error('Error adding product to shopping car', 'Error');
        console.log(error);
      });

  }
}
