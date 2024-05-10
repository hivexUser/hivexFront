import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { company } from 'src/app/models/company';
import { Product } from 'src/app/models/products';
import { CompanyService } from 'src/app/services/company.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  Usuario = '';
  listCompanies: company[] = [];
  listProducts: Product[] = [];
  constructor(private router: Router, private _productService: ProductService, private _companies: CompanyService,) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCompanies();
  }


  getCompanies() {

    this._companies.getCompanies().subscribe(
      (data) => {
        const acceptedCompanies = data.companies.filter((company: any) => company.status === 'accept');
        this.listCompanies = acceptedCompanies;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getProducts() {
    this._productService.getProducts().subscribe(
      (data) => {
      const acceptedProducts = data.products.filter((product: any) => product.status === 'accept');
      this.listProducts = acceptedProducts;

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
