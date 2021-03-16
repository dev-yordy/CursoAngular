import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './servicios/usuario.service';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ArticulodetalleComponent } from './articulodetalle/articulodetalle.component';
import { ArticuloService } from './servicios/articulo.service';
import { HttpClientModule} from '@angular/common/http';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    PerfilComponent,
    ArticulodetalleComponent,
    AgregarArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    ArticuloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
