import { Component, OnInit } from '@angular/core';
import { redes } from 'src/app/model/redes.model';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-barra-ppal',
  templateUrl: './barra-ppal.component.html',
  styleUrls: ['./barra-ppal.component.css']
})
export class BarraPpalComponent implements OnInit {

  redes: redes = new redes ("","");
  redesList: any;

  constructor(private datosRedes: RedesService) { }

  ngOnInit(): void {

    this.datosRedes.traerRedes().subscribe(datos =>{
      this.redes = datos;
      this.redesList = datos;

    });
  }

}
