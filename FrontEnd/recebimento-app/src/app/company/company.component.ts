import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyInterface } from '../interfaces/companyInterface';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [NgClass, FormsModule, HttpClientModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{

  supplierList : Array<CompanyInterface> = [];
  snackBar: any;

  constructor(private service: AppService){
  }

  onSubmit(itemForm: NgForm){
    /* POST saveCompany(itemForm.value); // o itemForm.value já é um JSON
    TODO - validação de empresa existente por cnpj
    */
    this.service.saveCompany(itemForm.value).subscribe({
      next: (result) => {console.log(itemForm)},
      error: (error) => {this.popUpMessage('Falha ao salvar agendamento')}
    });
  }

  private popUpMessage(message: string){
    this.snackBar.open('Erro ao salvar o agendamento', '', {
      horizontalPosition: 'end',
      duration: 3000
    });
  }

  ngOnInit(): void {
    this.service.supplierList().subscribe( (companyList) => {
      this.supplierList = companyList;
    });
  }
}


