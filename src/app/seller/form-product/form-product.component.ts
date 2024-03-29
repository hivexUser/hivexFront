
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/products';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { LocalizedString } from '@angular/compiler';





@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  ProductForm: FormGroup;
  loading = false;
  archivo: File | null = null;
  fotoPureba: string = 'Hola mundo';
  archivosServer: any;




  constructor(private fb: FormBuilder, private router: Router,
    private Toast: ToastrService, private _productService: ProductService) {
    this.ProductForm=this.fb.group({
      name:['', Validators.required],
      price:['', Validators.required],
      stock:['', Validators.required],
      category:['', Validators.required],
      description:['', Validators.required]
  })
  }

  ngOnInit(): void {

  }

getFile(event: Event){
  const target = event.target as HTMLInputElement;
  const files: FileList | null = target.files;
  if (files!.length > 0 && files != null){
    Array.prototype.forEach.call(files, (file: File) => {
      this.archivo = file;
      console.log('imagen:',this.archivo);
    });
  }
}



addProduct() {

  if (!this.archivo) {
    console.error('No se ha seleccionado ningún archivo.');
    return;
  }

  this.loading = true;
  console.log('imagen en add:',this.archivo);
  const Product = new FormData();
  Product.append('name', this.ProductForm.get('name')?.value);
  Product.append('price', this.ProductForm.get('price')?.value);
  Product.append('stock', this.ProductForm.get('stock')?.value);
  Product.append('category', this.ProductForm.get('category')?.value);
  Product.append('description', this.ProductForm.get('description')?.value);
  Product.append('image', this.archivo);
  Product.append('status', 'true');
  Product.append('company_id', localStorage.getItem('companyId') || '');
  console.log('imagen enviada:',this.archivo);
  console.log('Producto:')

  this._productService.addProduct(Product).subscribe(
    dato => {
      this.router.navigate(['/listProducts'])
      this.Toast.success('Product added successfully', 'Success');
    },
    error => {
      this.Toast.error('Error adding product', 'Error');
      this.loading = false;
      console.log(error);
    }
  );
  
}


  }
