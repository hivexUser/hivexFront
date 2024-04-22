
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { company } from 'src/app/models/company';

import { CompanyService } from 'src/app/services/company.service';
import { Toast, ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
  CompanyForm: FormGroup;
  loading = false;
  archivo: File | null = null;

  constructor(private fb: FormBuilder, private router: Router, private _CompanyService: CompanyService,
    private Toast: ToastrService, private toastr: ToastrService) {
    this.CompanyForm = this.fb.group({
      companyName: ['', Validators.required],
      companyCountry: ['', Validators.required],
      productType: ['', Validators.required],
      companyPhone: ['', Validators.required],
      companyContact: ['', Validators.required],
      file: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      status: ['', Validators.required],
      companyConfirmation: ['', Validators.required]
    })
  }


  ngOnInit() {

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

  addCompany() {
    if (this.archivo == null) {
      this.toastr.error('Please select a file', 'Error');
      this.loading = false;
      return;
    }
    this.loading = true;
    const Company = new FormData();
    Company.append('companyName', this.CompanyForm.get('companyName')?.value);
    Company.append('companyCountry', this.CompanyForm.get('companyCountry')?.value);
    Company.append('productType', this.CompanyForm.get('productType')?.value);
    Company.append('companyPhone', this.CompanyForm.get('companyPhone')?.value);
    Company.append('companyContact', this.CompanyForm.get('companyContact')?.value);
    Company.append('file', this.archivo!);
    Company.append('email', this.CompanyForm.get('email')?.value);
    Company.append('password', this.CompanyForm.get('password')?.value);
    Company.append('status', 'new seller')
    this.loading = true;
    this._CompanyService.addCompnay(Company).subscribe(
      dato => {
        this.router.navigate(['/homeSeller'])

        this.Toast.info('Wait for the admin to approve your account', 'Info');
      },
      error => {
        this.Toast.error('Error adding product', 'Error');
        this.loading = false;
        console.log(error);
      });
  }
}
