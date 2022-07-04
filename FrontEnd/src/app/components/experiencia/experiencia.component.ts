import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  providers: [ ExperienciaService ]
})
export class ExperienciaComponent implements OnInit {

  experiencia: experiencia = new experiencia ("", "", "", "", "", "");
  
  descripcionList: any;
  experienciaList: any;

  constructor(private datosExperiencia: ExperienciaService) { }

  ngOnInit(): void {
    
    this.datosExperiencia.getExperiencia().subscribe(datos =>{
      this.experiencia = datos;
      this.experienciaList = datos;
    });
  }
}
