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
  loading= true;
  constructor( private router: Router, private _productService: ProductService,) { }

  ngOnInit(): void {
    this.Usuario
    this.getProducts();
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }



  getProducts() {
    this._productService.getProducts().subscribe(
      (data) => {

        const acceptedProducts = data.products.filter((product: any) => product.status === 'accept');
      this.listProducts = acceptedProducts.slice(-4);

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
