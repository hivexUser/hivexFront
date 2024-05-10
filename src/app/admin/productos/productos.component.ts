import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listProducts: Product[] = [];

  currentPage: number = 1;
  pageSize: number = 20;
  pageSizes: number[] = [5, 10, 20];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.listProducts = data.products;
      }, error => {
        console.log(error)
      })
  }

  agregarProducto() {
    this.router.navigate(['/agregar-producto']);
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.getProducts();
    }, error => {
      console.log(error)
    })
  }

  updateProductStatus(id: string | undefined, status: string) {
    if (!id) {
      console.error('productId is undefined');
      return;
    }
    
    this.productService.updateProductStatus(id, status).subscribe(data => {
      if (status === 'rejected') {
        this.listProducts = this.listProducts.filter(product => product._id !== id);
      }
   
      this.getProducts();
    }, error => {
      console.error(error);
    });
  }
  
  
  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }

  pageNumbers(): number[] {
    const totalPages = Math.ceil(this.listProducts.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  changePageSize(pageSize: any) {
    this.pageSize = parseInt(pageSize, 10);
    this.currentPage = 1;
  }

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  get getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
