import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { BarraPpalComponent } from './components/barra-ppal/barra-ppal.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BarraPpalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
