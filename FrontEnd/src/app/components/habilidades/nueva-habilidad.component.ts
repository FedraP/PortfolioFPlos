import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {

  nombre: String ='';
  valor: number = 0;
  tipo: String = '';
  lista: String[]=["tecnica", "personal"];
  unTipo: String;

  constructor(private datosHabilidad: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  selectTipo(){ this.unTipo =this.tipo; }

  onCreate(): void{
    const habi = new habilidades(this.nombre, this.valor, this.tipo);
    this.datosHabilidad.guardarHabi(habi).subscribe(data =>{
      alert("La habilidad fue creada correctamente");
      this.router.navigate(['']);
    }
    , err =>{
      alert("Falló");
      // console.log('error de carga',err);
      this.router.navigate(['']);
    })
  }

}
