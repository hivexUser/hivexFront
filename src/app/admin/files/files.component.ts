import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  FileForm: FormGroup;
  loading = false;
  archivos: File[] = [];
  showForm = false; // Variable para controlar la visibilidad del formulario

  constructor(private fb: FormBuilder, private router: Router,
              private Toast: ToastrService, private _productService: ProductService) {
    this.FileForm = this.fb.group({
      file: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  getFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files: FileList | null = target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.archivos.push(files[i]);
        console.log('imagen:', files[i]);
      }
    }
  }

  // Método para mostrar u ocultar el formulario
  toggleForm() {
    this.showForm = !this.showForm;
  }

  addFile() {
    if (this.archivos.length === 0) {
      console.error('No se ha seleccionado ningún archivo.');
      return;
    }

    this.loading = true;

    const formData = new FormData();
    for (let i = 0; i < this.archivos.length; i++) {
      formData.append('files[]', this.archivos[i]);
    }
    formData.append('company_id', localStorage.getItem('companyId') || '');
    this._productService.addProduct(formData).subscribe(
      dato => {
        this.router.navigate(['/listProducts'])
        this.Toast.success('File added successfully', 'Success');
        this.loading = false;
        // Limpiar la lista de archivos después de la carga exitosa
        this.archivos = [];
      },
      error => {
        this.Toast.error('Error adding product', 'Error');
        this.loading = false;
        console.log(error);
      });
  }
}
