import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
_id=localStorage.getItem('productId') || '';
producto:any;

  constructor(private router: Router, private _productService: ProductService,) { }

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

}
