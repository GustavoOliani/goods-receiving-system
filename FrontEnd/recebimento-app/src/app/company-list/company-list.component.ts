import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CompanyInterface } from '../interfaces/companyInterface';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { CompanyComponent } from '../company/company.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [HttpClientModule, MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, CompanyComponent, NgIf, RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  supplier : Array<CompanyInterface> = [];
  displayedColumns: string[] = ['name', 'date','actions'];

  @Output() edit = new EventEmitter();

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.service.supplierList().subscribe( (supplier) => {
      // supplier.forEach(element => {
      //   element.receiptDate = element.receiptDate.toLocaleDateString('pt-BR');
      // });
      this.supplier = supplier;
    });
    console.log("GET: " + this.supplier);
  }

  // formatDateToString(date: Date){
  //   console.log(date);
  //   return new Date(date).toLocaleString('pt-BR', {timeZone: 'UTC'});
  // }

  onEdit(company: CompanyInterface){
    console.log("edit: page(company-list) company.id: " + company.id);
    this.router.navigate(['/empresa', company.id], {relativeTo:this.route});
  }

  onDelete(company: CompanyInterface){
    console.log("delete page(company-list) company.id: " + company.id);
    this.service.deleteCompany(company).subscribe({
      next: (result) => {console.log("Delete sucess: " + company.id)},
      error: (error) => {console.log('Falha ao deletar empresa')}
    });
    window.location.reload();
  }

}
