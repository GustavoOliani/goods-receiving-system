import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ScheduleInterface } from './interfaces/scheduleInterface';
import { CompanyInterface } from './interfaces/companyInterface';

@Injectable({
  providedIn: 'any'
})
export class AppService {

  private readonly apiCompany = 'http://localhost:8080/api/company'; //server do backend
  private readonly apiSchedules = 'http://localhost:8080/api/schedule'; //server do backend
  constructor(private http: HttpClient) { }

  supplierList(): Observable<CompanyInterface[]> {
    return this.http.get<CompanyInterface[]>(this.apiCompany);
  }

  // scheduleList(){
  //   return this.http.get<SchedulesInterface[]>(this.apiSchedules);
  // }

  saveSchedule(body: ScheduleInterface){
    console.log(body);
    return this.http.post<ScheduleInterface>(this.apiSchedules, body);
  }

  scheduleList(): Observable<ScheduleInterface[]>{
    return this.http.get<ScheduleInterface[]>(this.apiSchedules);
  }

}