import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  habi: habilidades = null;  

  constructor(private datosHabilidad: HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log('Traer data habilidad', id);
    this.datosHabilidad.verHabilidades(id).subscribe(
      data => {
        this.habi = data;
        
      }, err =>{
        alert('Error al modificar habilidad');
        //console.log('Error editar',err);
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosHabilidad.actualizarHabi(id, this.habi).subscribe(
      data => {
        alert("La habilidad fue modificada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar habilidad');
        this.router.navigate(['']);
      }
    )
  }

}
