import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { PersonaService } from 'src/app/servicios/persona.service';
import { persona } from 'src/app/model/persona.model';
import { DatosPersonalesComponent } from '../datos-personales/datos-personales.component';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
  providers: [ PersonaService ]
})
export class AcercaDeComponent implements OnInit {

  persona: persona = new persona ("", "", "", "", "", "", "", "", "" ,"", "");
  acerca_DeList: Array<string> = [];
  
  constructor(public datosPersona: PersonaService) { }

  ngOnInit(): void {
    this.datosPersona.getPersona().subscribe(datos =>{
    this.persona = datos;
    this.acerca_DeList = datos.acercaDe.split("\n");
    console.log(this.acerca_DeList);
    console.log(datos.acercaDe)})
  };

  // miPortfolio: any;

  // constructor(private datosPortfolio: PortfolioService) { }

  // ngOnInit(): void {
  //   this.miPortfolio = {};
  //   this.datosPortfolio.obtenerDatos().subscribe(datos =>{
  //     this.miPortfolio =datos;
  //   });
  // }

}
