import { Component, OnInit } from '@angular/core';
import { ScheduleComponent } from '../schedule/schedule.component';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleInterface } from '../interfaces/scheduleInterface';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CompanyComponent } from '../company/company.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, CompanyComponent, NgIf, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  scheduler : Array<ScheduleInterface> = [];
  displayedColumns: string[] = ['name', 'date', 'actions'];

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.service.scheduleList().subscribe( (schedule) => {
      // schedule.forEach(element => {
      //   element.receiptDate = element.receiptDate.toLocaleDateString('pt-BR');
      // });
      this.scheduler = schedule;
    });
    console.log("GET: " + this.scheduler);
  }

  onEdit(schedule: ScheduleInterface){
    console.log("edit: page(schedule-list) schedule.id: " + schedule.id);
    this.router.navigate(['/agendamento', schedule.id], {relativeTo:this.route});
  }

  formatDateToString(date: Date){
    console.log(date);
    return new Date(date).toLocaleString('pt-BR', {timeZone: 'UTC'});
  }
}