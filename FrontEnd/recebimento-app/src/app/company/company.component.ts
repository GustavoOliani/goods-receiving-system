import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyInterface } from '../interfaces/companyInterface';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [NgClass, FormsModule, HttpClientModule, NgIf],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{

  supplierList : Array<CompanyInterface> = [];
  snackBar: any;

  @Input() id!: string;
  nameForm: string = '';
  companyIdForm: string = '';

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute){

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
    if(this.id){
      this.service.companyById(Number(this.id)).subscribe( (company) => {
        console.log("company with id: " +  company);
        this.nameForm = company.name;
        this.companyIdForm = company.cnpj;
      });
    }else{
      this.service.supplierList().subscribe( (companyList) => {
        console.log("companyList: " +  companyList);
        this.supplierList = companyList;
      });
    }
  }
}


