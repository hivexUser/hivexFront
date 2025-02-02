import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/add-product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/add-product.service';
import { ToastrService } from 'ngx-toastr';






@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css'],

})
export class AgregarProductoComponent implements OnInit {
  ProductForm: FormGroup;
  loading = false;
  archivo: File | null = null;
  fotoPureba: string = 'Hola mundo';
  archivosServer: any;
  id: string | null = null;



  constructor(private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute,
    private Toast: ToastrService, private _productService: ProductService) {
    this.ProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    console.log('id:', this.id);
  }

  getFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files: FileList | null = target.files;
    if (files!.length > 0 && files != null) {
      Array.prototype.forEach.call(files, (file: File) => {
        this.archivo = file;
        console.log('imagen:', this.archivo);
      });
    }
  }





  addProduct() {

    if (!this.archivo) {
      console.error('No se ha seleccionado ningún archivo.');
      return;
    }

    this.loading = true;
    console.log('imagen en add:', this.archivo);
    const Product = new FormData();
    Product.append('name', this.ProductForm.get('name')?.value);
    Product.append('price', this.ProductForm.get('price')?.value);
    Product.append('stock', this.ProductForm.get('stock')?.value);
    Product.append('category', this.ProductForm.get('category')?.value);
    Product.append('description', this.ProductForm.get('description')?.value);
    Product.append('image', this.archivo);
    Product.append('status', 'true');
    Product.append('company_id', localStorage.getItem('companyId') || '');
    console.log('imagen enviada:', this.archivo);
    console.log('Producto:')

    if (this.id !== null) {
      //editamos pedido
      this._productService.editarProduct(this.id, Product).subscribe(data => {
        this.router.navigate(['/pro'])
        this.Toast.success('Product edited successfully', 'Success');
      }, error => {
        console.log(error)
      })
    } else {
      this._productService.addProduct(Product).subscribe(
        dato => {
          this.router.navigate(['/product-list'])
          this.Toast.success('Product added successfully', 'Success');
        },
        error => {
          this.Toast.error('Error adding product', 'Error');
          this.loading = false;
          console.log(error);
        });
    }
  }


}
