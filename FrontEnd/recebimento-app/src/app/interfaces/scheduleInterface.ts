import { Time } from "@angular/common";
import { CompanyInterface } from "./companyInterface";

export interface ScheduleInterface{
    id: number;
    supplier : CompanyInterface;
    fiscalNote : string;
    receiptDate: Date;
  }