import { CommonModule, NgClass, NgFor, Time } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyInterface } from '../company/company.component';
import { ScheduleInterface } from '../interfaces/scheduleInterface';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [NgClass, NgFor, FormsModule, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit{

  // GET supplierList() as JSON
  //supplierList : Array<string> = ['A', 'B'];
  supplierList$ : Observable<CompanyInterface[]>;

  constructor(private service: AppService){
    this.supplierList$ = this.service.supplierList();
  }

  onSubmit(itemForm: NgForm){
    /*
    /* POST
    */
   this.service.saveSchedule(itemForm.value).subscribe( result => {
    console.log(result);
   });
  }

  ngOnInit(): void {
    
  }

}