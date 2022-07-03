import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { CursoService } from 'src/app/servicios/curso.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  providers: [ EducacionService]
})

export class EducacionComponent implements OnInit {

  educacion: educacion = new educacion ("", "", "","","","");
 
  educacionList: any;
  

  constructor(private datosEducacion: EducacionService) { }

  ngOnInit(): void {
    
    this.datosEducacion.traerEducacion().subscribe(datos =>{
      this.educacion = datos;
      this.educacionList = datos;
      console.log(datos);

    });

    }
  }

