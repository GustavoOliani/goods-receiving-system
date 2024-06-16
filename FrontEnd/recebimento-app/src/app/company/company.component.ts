import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyInterface } from '../interfaces/companyInterface';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [NgClass, FormsModule, HttpClientModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{

  supplier$ : Observable<CompanyInterface[]>;

  constructor(private service: AppService){
    this.supplier$ = this.service.supplierList();
  }

  onSubmit(itemForm: NgForm){
    /* POST saveCompany(itemForm.value); // o itemForm.value já é um JSON
    
    */
    this.supplier$.forEach((supplier) => console.log("supplierList: " + supplier));
    console.log(itemForm.value);
  }

  ngOnInit(): void {
    
  }


}


