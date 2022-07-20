import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  expLab: experiencia = null;  

  constructor(private datosExperiencia: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log('Traer data', id);
    this.datosExperiencia.verExperiencia(id).subscribe(
      data => {
        this.expLab = data;
        
      }, err =>{
        // alert('Error al modificar experiencia');
        console.log('Error editar',err);
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosExperiencia.actualizarExp(id, this.expLab).subscribe(
      data => {
        alert("La experiencia laboral fue modificada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      }
    )
  }
}
