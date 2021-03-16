import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';
import { ArticulodetalleComponent } from './articulodetalle/articulodetalle.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
{
 path:'', component: HomeComponent
},
{
 path:'perfil', component: PerfilComponent
},
{
  path:'detalle-articulo', component: ArticulodetalleComponent
},
{
 path:'agregarArticulo/:esNuevo', component: AgregarArticuloComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
