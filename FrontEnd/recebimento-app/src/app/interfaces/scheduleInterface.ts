import { Time } from "@angular/common";
import { CompanyInterface } from "../company/company.component";

export interface ScheduleInterface{
    supplier : CompanyInterface;
    fiscalNote : string;
    receiptDate: Date;
    receiptTime: Time;
  }