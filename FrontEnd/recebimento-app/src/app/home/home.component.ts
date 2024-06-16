import { Component, OnInit } from '@angular/core';
import { ScheduleComponent } from '../schedule/schedule.component';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleInterface } from '../interfaces/scheduleInterface';
import {MatTableModule} from '@angular/material/table';
import { scheduler } from 'timers/promises';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  scheduler : Array<ScheduleInterface> = [];
  displayedColumns: string[] = ['name', 'date'];

  constructor(private service: AppService){}

  ngOnInit(): void {
    this.service.scheduleList().subscribe( (schedule) => {
      // schedule.forEach(element => {
      //   element.receiptDate = element.receiptDate.toLocaleDateString('pt-BR');
      // });
      this.scheduler = schedule;
    });
    console.log("GET: " + this.scheduler);
  }
}