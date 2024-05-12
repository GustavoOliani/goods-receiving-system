import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EmpresaComponent } from './company/company.component';
import { AgendamentoComponent } from './schedule/schedule.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'empresa', component: EmpresaComponent},
    {path: 'agendamento', component: AgendamentoComponent}
];