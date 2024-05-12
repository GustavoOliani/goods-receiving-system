import { Component, OnInit } from '@angular/core';
import { AgendamentoComponent } from '../schedule/schedule.component';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AgendamentoComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  scheduler : SchedulesInterface[] | undefined;
  //scheduler$ : Observable<SchedulesInterface[]> | undefined;

  //constructor(private service: AppService){}

  ngOnInit(): void {
    /*
    this.service.schedules()
    .subscribe(dados => this.scheculer = dados);
    */
   //this.scheduler$ = this.service.scheduleList();
  }

}

export interface SchedulesInterface{
  companyName: string;
  date: Date;
  weight: number;
}