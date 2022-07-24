import { Component, OnInit } from '@angular/core';
import { redes } from 'src/app/model/redes.model';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {

  redes?: redes = new redes ("","");
  redesList?: any;
  unaRed?: any;

  constructor(private datosRedes: RedesService) { }

  ngOnInit(): void {

    this.datosRedes.traerRedes().subscribe(datos =>{
      this.redes = datos;
      this.redesList = datos;
    });

      this.datosRedes.traerUnaRed().subscribe(datos =>{
        this.unaRed = datos;

    });
  
  }
}
