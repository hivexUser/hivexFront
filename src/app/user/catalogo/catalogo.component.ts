import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { CompartdoService } from 'src/app/services/compartdo.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

listProducts: Product[] = [];
category: string = '';
categoryName: string = '';
  constructor(private router: Router, private _productService: ProductService, private _Compartido: CompartdoService) { }

  ngOnInit(): void {
    localStorage.removeItem('productId');
this.getProducts();

this.category=localStorage.getItem('categoria') || '';

  }

  getProducts() {
    this._productService.getProducts().subscribe(
      (data) => {

      const pruductsType = data.products.filter((product: Product) => product.category === this.category  && product.status === 'accept')
      this.listProducts = pruductsType;
      
      },
      (error) => {
        console.log(error);
      }
    );
  }

  producto(_id: string) {
    localStorage.setItem('productId', _id);
    this.router.navigate(['/detail']);
  }

}
