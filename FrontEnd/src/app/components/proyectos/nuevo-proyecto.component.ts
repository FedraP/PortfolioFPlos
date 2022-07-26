import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

    nombre: String ='';
    descripcion: String = '';
    urlProyecto: String = '';

  constructor(private datosProyecto: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new proyectos(this.nombre, this.descripcion, this.urlProyecto);
    this.datosProyecto.guardarProy(proy).subscribe(data =>{
      alert("El proyecto fue creado correctamente");
      this.router.navigate(['']);
    }
    , err =>{
      alert("Falló");
      // console.log('error de carga',err);
      this.router.navigate(['']);
    })
  }
}
