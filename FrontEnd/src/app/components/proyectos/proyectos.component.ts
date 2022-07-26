import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: proyectos = new proyectos ("","","")

  proyectosList:any;


  constructor(private datosProyectos: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
      this.datosProyectos.traerProyectos().subscribe(datos =>{
      this.proyectosList = datos;
      console.log(datos);
    });
  }

  borrar(id?: number){
    if(id != undefined){
      this.datosProyectos.borrarProy(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err =>{
          alert(" No se pudo borrar el proyecto");
        }
      )
    }
  }

}
