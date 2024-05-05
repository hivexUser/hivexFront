import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCarService } from 'src/app/services/shopping-car.service';
import { user } from '../../models/user';
import { Product } from 'src/app/models/products';
import { productCar } from 'src/app/models/productCar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  _id = localStorage.getItem('productId') || '';
  userId = localStorage.getItem('userId') || '';
  producto: any;
listCar: productCar[] = [];
  constructor(private toastr: ToastrService  ,private router: Router, private _productService: ProductService, private _Car: ShoppingCarService) { }

  ngOnInit(): void {
    // this.getCarById(this.userId);
  }

  // getCarById(id: string) {
  //   this._Car.getProductById(this.userId).subscribe(
  //     (data) => {

  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );


  // }
}
