import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proy: proyectos = null;  

  constructor(private datosProyecto: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    //console.log('Traer data proyecto', id);
    this.datosProyecto.verProyecto(id).subscribe(
      data => {
        this.proy = data;
        
      }, err =>{
        alert('Error al modificar proyecto');
        //console.log('Error editar',err);
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosProyecto.actualizarProy(id, this.proy).subscribe(
      data => {
        alert("El proyecto fue modificado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar proyecto');
        this.router.navigate(['']);
      }
    )
  }

}
