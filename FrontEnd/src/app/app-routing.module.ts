import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de.component';
import { EditarDatosPersonalesComponent } from './components/datos-personales/editar-datos-personales.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarHabilidadComponent } from './components/habilidades/editar-habilidad.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent} from './components/portfolio/portfolio.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'},
  {path: 'boton-ingresar', component: IniciarSesionComponent},
  {path:'nueva-experiencia', component: NuevaExperienciaComponent},
  {path: 'editar-experiencia/:id', component: EditarExperienciaComponent},
  {path:'nueva-educacion', component: NuevaEducacionComponent},
  {path: 'editar-educacion/:id', component: EditarEducacionComponent},
  {path:'nueva-habilidad', component: NuevaHabilidadComponent},
  {path: 'editar-habilidad/:id', component: EditarHabilidadComponent},
  {path:'nuevo-proyecto', component: NuevoProyectoComponent},
  {path: 'editar-proyecto/:id', component: EditarProyectoComponent},
  {path: 'editar-acerca-de/:id', component: EditarAcercaDeComponent},
  {path: 'editar-datos-personales/:id', component: EditarDatosPersonalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }