import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css'],
  providers: [ PersonaService ]
})

export class DatosPersonalesComponent implements OnInit {
  
  persona: persona = new persona ("", "", "", "", "", "", "", "", "" ,"", "");
  
  constructor(public datosPersona: PersonaService) { }

  ngOnInit(): void {
    this.datosPersona.getPersona().subscribe(datos =>{
    this.persona = datos;
    console.log(datos)})
  };
  
  
  // miPortfolio: any;

  // constructor(private datosPortfolio:PortfolioService) { }

  // ngOnInit(): void {
    // this.miPortfolio = {};
  //   this.datosPortfolio.obtenerDatos().subscribe(datos =>{
  //     this.miPortfolio =datos;
  //   });
  // }
}
