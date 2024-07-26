import { CommonModule, NgClass, NgFor, Time } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { CompanyInterface } from '../interfaces/companyInterface';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ScheduleInterface } from '../interfaces/scheduleInterface';


@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [NgClass, NgFor, FormsModule, HttpClientModule, CommonModule, FormsModule, MatDatepickerModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit{

  @Input() id!: number;
  fiscalNoteForm = "";
  dateForm = new Date();

  // GET supplierList() as JSON
  //supplierList : Array<string> = [name: 'A', cnpj: 'B'];
  supplierList : Array<CompanyInterface> = [];

  constructor(private service: AppService, private snackBar: MatSnackBar){
    
  }

  onSubmit(body: NgForm){
    /*   POST    */
    this.service.saveSchedule(body.value).subscribe({
      next: (result) => {console.log(body)},
      error: (error) => {this.popUpMessage('Falha ao salvar agendamento')}
    });
  }

  private popUpMessage(message: string){
    this.snackBar.open(message, '', {
      horizontalPosition: 'end',
      duration: 3000
    });
  }

  ngOnInit(): void {
    this.service.supplierList().subscribe( (companyList) => {
      this.supplierList = companyList;
    });

    if(this.id){
      this.service.scheduleById(Number(this.id)).subscribe( (schedule) => {
        console.log("id: " + schedule.id );
        console.log("supplier:" + schedule.supplier.name );
        console.log("fiscalNote: " + schedule.fiscalNote );
        console.log("receiptDate: " + schedule.receiptDate );
        this.fiscalNoteForm = schedule.fiscalNote;
        this.dateForm = schedule.receiptDate;
      });
    }
  }

}