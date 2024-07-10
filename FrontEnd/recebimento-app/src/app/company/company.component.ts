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

  @Input() id!: number;
  nameForm: string = '';
  companyIdForm: string = '';

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute){

  }

  private popUpMessage(message: string){
    this.snackBar.open(message, {
      horizontalPosition: 'end',
      duration: 3000
    });
  }

  onSubmit(itemForm: NgForm){
    /* POST saveCompany(itemForm.value); // o itemForm.value já é um JSON
    TODO - validação de empresa existente por cnpj
    */
    if(this.id){
      console.log('UPDATE: ' + this.id + " itemForm: " + itemForm.value);
      itemForm.value.id = this.id;
      this.service.updateCompany(itemForm.value).subscribe({
        next: (result) => {console.log("UPDATE sucess: " + itemForm.value)},
        error: (error) => {this.popUpMessage('Falha ao atualizar empresa')}
      });
    }else{
      console.log('CREATE: ' + this.id + " itemForm: " + itemForm.value);
      this.service.saveCompany(itemForm.value).subscribe({
        next: (result) => {console.log("CREATE sucess: " + itemForm.value)},
        error: (error) => {this.popUpMessage('Falha ao criar empresa')}
      });
    }
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


