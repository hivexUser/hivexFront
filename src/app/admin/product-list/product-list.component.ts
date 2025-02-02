import { ProductService } from 'src/app/services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProducts: any []=[];

  currentPage: number = 1;
  pageSize: number = 20;
  pageSizes: number[] = [5, 10, 20];
  color: string = 'success';

  constructor(private router: Router, private productService: ProductService, private Toast: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(){
    this.productService.getProducts().subscribe(
      data=>{
        this.listProducts=data.products;

      },
      error=>{
        console.log(error);
      }
    );
  }

  agregarProducto() {
    this.router.navigate(['/agregar-producto']);
  }

  rejectStatus(_id:any ){
    const product = {
      _id: _id,
      status: "reject"
    };
    this.productService.editStatus(product).subscribe(data=>{
      this.getProducts();
      this.router.navigate(['/product-list'])
      this.Toast.success('Product edited successfully', 'Success');
    }
    ,error=>{
      this.Toast.error('Error editing product', 'Error');
      console.log(error)
    })
  }
    acceptStatus(_id:any ){
      const product = {
        _id: _id,
        status: "accept"
      };
      this.productService.editStatus(product).subscribe(data=>{
        this.getProducts();
        this.router.navigate(['/product-list'])
        this.Toast.success('Product edited successfully', 'Success');
      }
      ,error=>{
        this.Toast.error('Error editing product', 'Error');
        console.log(error)
      })

  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe(data=>{
    this.getProducts();
    this.router.navigate(['/product-list'])
    },error=>{
      console.log(error)
    })
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
