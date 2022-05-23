import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  title:string = 'PortfolioFPlos';
  miPortfolio: any;
  
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.miPortfolio = {};
    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      this.miPortfolio = datos;
    });
  }

}
