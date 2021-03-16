import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {
    path:'', component: ClienteComponent
  },
  {
   path:'productos', component:  ProductoComponent  
  },
  {
    path:'pedidos', component: PedidosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
