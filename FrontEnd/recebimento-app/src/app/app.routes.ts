import { RouterModule, Routes } from '@angular/router';;

import { CompanyComponent } from './company/company.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { CompanyListComponent } from './company-list/company-list.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'empresa', component: CompanyComponent},
    {path: 'empresa/:id', component: CompanyComponent},
    {path: 'empresas', component: CompanyListComponent},
    {path: 'agendamento', component: ScheduleComponent}
];