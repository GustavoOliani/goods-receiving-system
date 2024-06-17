import { Time } from "@angular/common";
import { CompanyInterface } from "./companyInterface";

export interface ScheduleInterface{
    supplier : CompanyInterface;
    fiscalNote : string;
    receiptDate: Date;
  }