import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyInterface } from './company/company.component';
import { Observable, tap } from 'rxjs';
import { ScheduleInterface } from './interfaces/scheduleInterface';

@Injectable({
  providedIn: 'any'
})
export class AppService {

  private readonly apiCompany = 'http://localhost:8080/api/company'; //server do backend
  private readonly apiSchedules = 'http://localhost:8080/api/schedule'; //server do backend
  constructor(private http: HttpClient) { }

  supplierList() {
    return this.http.get<CompanyInterface[]>(this.apiCompany);
  }

  // scheduleList(){
  //   return this.http.get<SchedulesInterface[]>(this.apiSchedules);
  // }

  saveSchedule(scheduleForm: ScheduleInterface){
    return this.http.post<ScheduleInterface>(this.apiSchedules, scheduleForm);
    console.log(scheduleForm);
  }

}