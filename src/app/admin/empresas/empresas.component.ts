import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  listCompanies:any[]=[];

  constructor(private router: Router, private _companies: CompanyService, private Toast: ToastrService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {

    this._companies.getCompanies().subscribe(
      (data) => {
        console.log(data.companies)

        this.listCompanies = data.companies;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
