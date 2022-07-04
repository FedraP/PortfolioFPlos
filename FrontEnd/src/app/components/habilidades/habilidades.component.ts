import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';



@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  habilidad: habilidades = new habilidades ("",0, "");

  miPortfolio: any;
  habilidadesList: any;
  habilidadesTList: any;
  habilidadesPList: any;

  constructor(private datosHabilidad: HabilidadesService) {
    
   }

  ngOnInit(): void {

    this.datosHabilidad.traerHabilidades().subscribe(datos =>{
      this.habilidadesList = datos;
      // this.habilidadesTecnicasList = datos.habilidadesTecnicas;
      // this.habilidadesPersonalesList = datos.habilidadesPersonales;
      console.log(datos);
    });
   
  }

}
