import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.miPortfolio = {};
    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      this.miPortfolio =datos;
    });
  }
}
