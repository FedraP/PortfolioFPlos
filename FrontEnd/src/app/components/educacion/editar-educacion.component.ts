import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  edu: educacion = null;  

  constructor(private datosEducacion: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    // console.log('Traer data', id);
    this.datosEducacion.verEducacion(id).subscribe(
      data => {
        //console.log("Data: ", id, data);
        this.edu = data;
        
      }, err =>{
        alert('Error al modificar experiencia');
        //console.log('Error editar',err);
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosEducacion.actualizarEdu(id, this.edu).subscribe(
      data => {
        alert("La educación fue modificada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar educación');
        this.router.navigate(['']);
      }
    )
  }

}
