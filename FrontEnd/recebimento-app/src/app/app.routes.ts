import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CompanyComponent } from './company/company.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'empresa', component: CompanyComponent},
    {path: 'agendamento', component: ScheduleComponent}
];