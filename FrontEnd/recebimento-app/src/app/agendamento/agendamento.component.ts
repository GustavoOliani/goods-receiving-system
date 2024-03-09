import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [NgClass, NgFor, FormsModule],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.css'
})
export class AgendamentoComponent implements OnInit{

  constructor(private service: AppService){}

  // GET supplierList() as JSON
  supplierList : Array<string> = ['A', 'B', 'C', 'D'];
  supplierList$ : any;
  

  onSubmit(agenda : NgForm){
    /*
    /* POST createSchedule(agenda.values)
    */
  }

  ngOnInit(): void {
    
  }

}
