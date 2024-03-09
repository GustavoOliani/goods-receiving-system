import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyInterface } from './empresa/empresa.component';
import { SchedulesInterface } from './home/home.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly apiCompany = 'http://localhost:4200/empresa'; //server do backend
  private readonly apiSchedules = 'http://localhost:4200/agendamento'; //server do backend
  constructor(private http: HttpClient) { }

  supplierList(){
    return this.http.get<CompanyInterface[]>(this.apiCompany);
  }

  scheduleList(){
    return this.http.get<SchedulesInterface[]>(this.apiSchedules);
  }

}
