import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';



@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  habilidad: habilidades = new habilidades ("",0, "");

  miPortfolio: any;
  habilidadesList: any;

  constructor(private datosHabilidad: HabilidadesService, private tokenService: TokenService) { }
   isLogged = false;

  ngOnInit(): void {

    this.datosHabilidad.traerHabilidades().subscribe(datos =>{
      this.habilidadesList = datos;
      console.log(datos);
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
   
  }

}
