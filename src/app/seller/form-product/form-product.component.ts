
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: string | null = null;
  img:File | null = null;



  constructor(private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute,
    private Toast: ToastrService, private _productService: ProductService) {
    this.ProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      file: ['', Validators.required]

    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {

    this.esEditar();
  }

  getFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files: FileList | null = target.files;
    if (files!.length > 0 && files != null) {
      Array.prototype.forEach.call(files, (file: File) => {
        this.archivo = file;

      });
    }
  }


  addProduct() {
    this.loading = true;

    const Product = new FormData();
    Product.append('name', this.ProductForm.get('name')?.value);
    Product.append('price', this.ProductForm.get('price')?.value);
    Product.append('stock', this.ProductForm.get('stock')?.value);
    Product.append('category', this.ProductForm.get('category')?.value);
    Product.append('description', this.ProductForm.get('description')?.value);
    Product.append('file', this.archivo!);
    Product.append('status', 'new');
    Product.append('company_id', localStorage.getItem('companyId') || '');

    if (this.id !== null) {
      // Editar producto
      Product.append('_id', this.id);
      this._productService.editarProduct(Product).subscribe(data => {
        this.router.navigate(['/listProducts'])
        this.Toast.success('Product edited successfully', 'Success');
      }, error => {
        this.loading = false;
        this.Toast.error('Error editing product', 'Error');
        console.log(error)
      })
    } else {
      // Agregar nuevo producto
      this._productService.addProduct(Product).subscribe(
        dato => {
          this.router.navigate(['/listProducts'])
          this.Toast.success('Product added successfully', 'Success');
        },
        error => {
          this.Toast.error('Error adding product', 'Error');
          this.loading = false;
          console.log(error);
        });
    }
  }


  esEditar() {
    if (this.id !== null) {
      this._productService.getProductById(this.id).subscribe(data => {
        console.log(data.product) // Mostramos la imagen en consola
          this.img = data.product.file;
          this.ProductForm.setValue({
            name: data.product.name,
            price: data.product.price,
            stock: data.product.stock,
            description: data.product.description,
            category: data.product.category,
            file: data.product.image
            // Establecemos el valor de la imagen
          });
        }
      , error => {
        console.log(error)
      })
    }
  }
}


