import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { NgClass } from '@angular/common';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompanyComponent, NgClass, HttpClientModule, MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'Recebimento de produtos';
}
