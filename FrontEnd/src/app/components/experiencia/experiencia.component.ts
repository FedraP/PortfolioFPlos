import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  providers: [ ExperienciaService ]
})
export class ExperienciaComponent implements OnInit {

  experiencia: experiencia = new experiencia ("", "", "","","","");
  
  descripcionList: any;
  experienciaList: any;

  constructor(private datosExperiencia: ExperienciaService, private tokenService: TokenService ) { }
  isLogged = false;

  ngOnInit(): void {

    this.datosExperiencia.traerExperiencia().subscribe(datos =>{
      this.experiencia = datos;
      this.experienciaList = datos;
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }
}


