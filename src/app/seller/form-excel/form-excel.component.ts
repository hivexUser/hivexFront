import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form-excel',
  templateUrl: './form-excel.component.html',
  styleUrls: ['./form-excel.component.css']
})
export class FormExcelComponent implements OnInit {

  FileForm: FormGroup;
  loading = false;
  archivo: File | null = null;
  fotoPureba: string = 'Hola mundo';
  archivosServer: any;
  id: string | null = null;



  constructor(private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute,
    private Toast: ToastrService, private _productService: ProductService) {
    this.FileForm = this.fb.group({
      file: ['', Validators.required],
    })
  }


  ngOnInit(): void {

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





  addFile() {

    if (!this.archivo) {
      console.error('No se ha seleccionado ningún archivo.');
      return;
    }

    this.loading = true;

    const File = new FormData();
    File.append('file', this.archivo);
    File.append('company_id', localStorage.getItem('companyId') || '');
      this._productService.addProduct(File).subscribe(
        dato => {
          this.router.navigate(['/listProducts'])
          this.Toast.success('File added successfully', 'Success');
        },
        error => {
          this.Toast.error('Error adding product', 'Error');
          this.loading = false;
          console.log(error);
        });
    }
  }



