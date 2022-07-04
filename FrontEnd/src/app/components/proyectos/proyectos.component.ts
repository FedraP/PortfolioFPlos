import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: proyectos = new proyectos ("","","")

  proyectosList:any;


  constructor(private datosProyectos: ProyectosService) { }

  ngOnInit(): void {
    this.datosProyectos.traerProyectos().subscribe(datos =>{
      this.proyectosList = datos;
      console.log(datos);
    });
  }

}
