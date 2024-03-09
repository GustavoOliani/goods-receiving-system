import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpresaComponent, AgendamentoComponent, NgClass, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = '';
}
