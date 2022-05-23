import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
  miPortfolio: any;
  habilidadesTecnicasList: any;
  habilidadesPersonalesList: any;

  constructor(private datosPortfolio: PortfolioService) {
    
   }

  ngOnInit(): void {
    this.miPortfolio = {};
    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      this.habilidadesTecnicasList = datos.habilidadesTecnicas;
      this.habilidadesPersonalesList = datos.habilidadesPersonales;
      
    });
   
  }

}
