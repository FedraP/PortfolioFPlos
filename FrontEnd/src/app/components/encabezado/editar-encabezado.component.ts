import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-encabezado',
  templateUrl: './editar-encabezado.component.html',
  styleUrls: ['./editar-encabezado.component.css']
})
export class EditarEncabezadoComponent implements OnInit {

  persona: persona = null;
  
  constructor(private datosPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log('Traer data', id);
    this.datosPersona.verPersona(id).subscribe(
      data => {
        console.log("Data: ", data);
        this.persona = data;
        
      }, err =>{
        alert('Error al modificar encabezado');
        //console.log('Error editar',err);
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosPersona.actualizarPer(id, this.persona).subscribe(
      data => {
        alert("El encabezado fue modificado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar encabezado');
        this.router.navigate(['']);
      }
    )
  }

}
