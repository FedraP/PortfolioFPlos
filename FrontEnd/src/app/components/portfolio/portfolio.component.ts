import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']

})
export class PortfolioComponent implements OnInit {

  persona: persona = new persona ("", "", "", "", "", "", "", "", "" ,"", "");
  
  constructor(public datosPersona: PersonaService) { }

  ngOnInit(): void {
    this.datosPersona.getPersona().subscribe(datos =>{
    this.persona = datos;
    })
  };
    
  // constructor() { }

  // ngOnInit(): void {
  // }

}
