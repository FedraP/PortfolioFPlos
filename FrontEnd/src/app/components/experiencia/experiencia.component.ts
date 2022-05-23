import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  miPortfolio: any;
  experienciaList:any;
  descripcionList:any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.miPortfolio = {};
    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      this.experienciaList =datos.experienciaLaboral;
    });
  }

}
