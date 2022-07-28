import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { BarraPpalComponent } from './components/barra-ppal/barra-ppal.component';
import { BotonIngresarComponent } from './components/boton-ingresar/boton-ingresar.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PieDePaginaComponent } from './components/pie-de-pagina/pie-de-pagina.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule}  from '@angular/common/http';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './servicios/persona.service';
import { EducacionService} from './servicios/educacion.service';
import { ExperienciaService} from './servicios/experiencia.service';
import { CursosComponent } from './components/cursos/cursos.component';
import { interceptorProvider } from './servicios/interceptor.service';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad.component';
import { EditarHabilidadComponent } from './components/habilidades/editar-habilidad.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de.component';
import { EditarDatosPersonalesComponent } from './components/datos-personales/editar-datos-personales.component';
import { EditarEncabezadoComponent } from './components/encabezado/editar-encabezado.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BarraPpalComponent,
    BotonIngresarComponent,
    DatosPersonalesComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PieDePaginaComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    CursosComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevaHabilidadComponent,
    EditarHabilidadComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    EditarAcercaDeComponent,
    EditarDatosPersonalesComponent,
    EditarEncabezadoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [PersonaService, EducacionService, ExperienciaService, interceptorProvider],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
