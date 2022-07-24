import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent} from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'},
  {path: 'boton-ingresar', component: IniciarSesionComponent},
  {path:'nueva-experiencia', component: NuevaExperienciaComponent},
  {path: 'editar-experiencia/:id', component: EditarExperienciaComponent},
  {path:'nueva-educacion', component: NuevaEducacionComponent},
  {path: 'editar-educacion/:id', component: EditarEducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }