import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css'],
  providers: [ PersonaService ]
})

export class DatosPersonalesComponent implements OnInit {
  
  persona: persona = new persona ("", "", "", "", "", "", "", "", "" ,"", "");
  
  constructor(private datosPersona: PersonaService, private tokenService: TokenService) { }
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
  }
  
  
  // miPortfolio: any;

  // constructor(private datosPortfolio:PortfolioService) { }

  // ngOnInit(): void {
    // this.miPortfolio = {};
  //   this.datosPortfolio.obtenerDatos().subscribe(datos =>{
  //     this.miPortfolio =datos;
  //   });
  // }
}
