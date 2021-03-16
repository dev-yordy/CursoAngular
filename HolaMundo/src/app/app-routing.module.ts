import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticulodetallesComponent } from './articulodetalles/articulodetalles.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina504Component } from './pagina504/pagina504.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AgregarusuariosComponent } from './usuarios/agregarusuarios/agregarusuarios.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'', component: TitulosComponent
  },
  {
   path:'agregaruser', component: EjemploComponent
  },
  {
    path:'directivas', component: DirectivasComponent
  },
  {
  path:'usuarios', component: UsuariosComponent, children: [
    {
      path:'agregar', component: AgregarusuariosComponent
    },
    {
      path:'editar', component: EditarusuariosComponent 
    }
  
  ]
  },
  {
    path:'articulo', component: ArticuloComponent
  },
  {
    path:'articulodetalle', component: ArticulodetallesComponent
  },
  {
    path:'**', component: Pagina504Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
