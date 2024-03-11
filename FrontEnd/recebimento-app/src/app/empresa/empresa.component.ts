import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [NgClass, FormsModule, HttpClientModule],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent implements OnInit{

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

export interface CompanyInterface{
  name: string;
  cnpj: string;
}
