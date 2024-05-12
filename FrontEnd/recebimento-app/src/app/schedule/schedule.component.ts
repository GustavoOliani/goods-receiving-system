import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyInterface } from '../company/company.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [NgClass, NgFor, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit{

  // GET supplierList() as JSON
  //supplierList : Array<string> = ['A', 'B', 'C', 'D'];
  supplierList$ : Observable<CompanyInterface[]>;
  

  constructor(private service: AppService){
    this.supplierList$ = this.service.supplierList();
  }

  onSubmit(agenda : NgForm){
    /*
    /* POST createSchedule(agenda.values)
    */
  }

  ngOnInit(): void {
    
  }

}
