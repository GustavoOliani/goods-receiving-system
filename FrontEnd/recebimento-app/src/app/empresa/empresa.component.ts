import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent{

  onSubmit(itemForm: NgForm){
    /* POST saveCompany(itemForm.value); // o itemForm.value já é um JSON
    /* json = {
      supplierName : '',
      cnpj : ''
    }
    */
    console.log(itemForm.value);
  }


}

export interface CompanyInterface{
  name: string;
  cnpj: string;
}
