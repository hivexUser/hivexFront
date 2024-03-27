import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/add-product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/add-product.service';
import { ToastrService } from 'ngx-toastr';






@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css'],
  providers: [ProductService] // Agrega el servicio ProductService como proveedor del componente
})
export class AgregarProductoComponent implements OnInit {
  ProductForm: FormGroup;
  user_id: string = '';
  loading = false;
  constructor(private fb: FormBuilder, private router: Router,
    private Toast: ToastrService, private _productService: ProductService) {
    this.ProductForm=this.fb.group({
      name:['', Validators.required],
      price:['', Validators.required],
      stock:['', Validators.required],
      image:['', Validators.required],
      category:['', Validators.required],
      description:['', Validators.required]
  })
  }
  ngOnInit(): void {
  }


  addProduct() {

    this.loading = true;
     const Product: Product  = {
      name: this.ProductForm.get('name')?.value,
      price: this.ProductForm.get('price')?.value,
      stock: this.ProductForm.get('stock')?.value,
      image: this.ProductForm.get('image')?.value,
      category: this.ProductForm.get('category')?.value,
      description: this.ProductForm.get('description')?.value,
      user_id: localStorage.getItem('userId') || ''
    }
    this.loading = true; // Mostrar spinner
    console.log(Product);
    this._productService.addProduct(Product).subscribe(dato=>{
      this.router.navigate(['/product-list'])
    }, error=>{
    console.log(error);
    })
    }

}