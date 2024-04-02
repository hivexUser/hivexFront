import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  Usuario = '';
  listProducts: Product[] = [];
  constructor( private router: Router, private _productService: ProductService,) { }

  ngOnInit(): void {
    this.Usuario
    this.getProducts();
    localStorage.clear();
  }



  getProducts() {
    this._productService.getProducts().subscribe(
      (data) => {
        console.log(data.products);
        // Obtener los últimos 4 productos utilizando slice
        this.listProducts = data.products.slice(-4);
        console.log(this.listProducts);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
