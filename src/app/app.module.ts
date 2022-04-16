import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { BarraPpalComponent } from './components/barra-ppal/barra-ppal.component';
import { BotonIngresarComponent } from './components/boton-ingresar/boton-ingresar.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BarraPpalComponent,
    BotonIngresarComponent,
    DatosPersonalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
