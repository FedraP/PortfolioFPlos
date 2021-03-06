import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
  providers: [ PersonaService ],
  
})
export class EncabezadoComponent implements OnInit {
  
  title:string = 'PortfolioFPlos';
 
  persona: persona = new persona ("", "", "", "", "", "", "", "", "","", "");
  
  constructor(public datosPersona: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.datosPersona.getPersona().subscribe(datos =>{
    this.persona = datos;
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  };

  // miPortfolio: any;
  // ngOnInit(): void {
    // this.datosPersona.getPersona().subscribe(datos =>{
    // this.persona = datos});
  
    // }

  // constructor() { 
 

  // }

  // ngOnInit(): void {
  //   // this.miPortfolio = {};
  //   // this.datosPortfolio.obtenerDatos().subscribe(datos =>{
  //     // this.miPortfolio = datos;
  //   // });
  // }

}
