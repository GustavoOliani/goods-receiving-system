import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpresaComponent } from './company/company.component';
import { AgendamentoComponent } from './schedule/schedule.component';
import { NgClass } from '@angular/common';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpresaComponent, AgendamentoComponent, NgClass, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'Recebimento de produtos';
}
