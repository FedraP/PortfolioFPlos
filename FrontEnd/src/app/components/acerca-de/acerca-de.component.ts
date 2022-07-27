import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { PersonaService } from 'src/app/servicios/persona.service';
import { persona } from 'src/app/model/persona.model';
import { DatosPersonalesComponent } from '../datos-personales/datos-personales.component';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
  providers: [ PersonaService ]
})
export class AcercaDeComponent implements OnInit {

  persona: persona = new persona ("", "", "", "", "", "", "", "", "" ,"", "");
  acerca_DeList: Array<string> = [];
  
  constructor(public datosPersona: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarPersona():void{
    this.datosPersona.getPersona().subscribe(datos =>{
    this.persona = datos;
    this.acerca_DeList = datos.acercaDe.split("\n");
    // console.log(this.acerca_DeList);
      //console.log(datos.acercaDe);
    });
  }
}


  

  // miPortfolio: any;

  // constructor(private datosPortfolio: PortfolioService) { }

  // ngOnInit(): void {
  //   this.miPortfolio = {};
  //   this.datosPortfolio.obtenerDatos().subscribe(datos =>{
  //     this.miPortfolio =datos;
  //   });
  // }