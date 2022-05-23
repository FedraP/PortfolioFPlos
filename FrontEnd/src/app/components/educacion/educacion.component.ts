import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  miPortfolio: any;
  educacionList: any;
  cursosList: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.miPortfolio = {};
    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      this.educacionList =datos.educacion;
    });
  }

}