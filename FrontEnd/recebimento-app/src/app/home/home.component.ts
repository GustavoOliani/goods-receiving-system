import { Component, OnInit } from '@angular/core';
import { ScheduleComponent } from '../schedule/schedule.component';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleInterface } from '../interfaces/scheduleInterface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  scheduler : ScheduleInterface[] | undefined;
  //scheduler$ : Observable<ScheduleInterface[]> | undefined;

  //constructor(private service: AppService){}

  ngOnInit(): void {
    /*
    this.service.schedules()
    .subscribe(dados => this.scheculer = dados);
    */
   //this.scheduler$ = this.service.scheduleList();
  }

}