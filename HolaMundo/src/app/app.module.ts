import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina504Component } from './pagina504/pagina504.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { AgregarusuariosComponent } from './usuarios/agregarusuarios/agregarusuarios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticulodetallesComponent } from './articulodetalles/articulodetalles.component';


@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivasComponent,
    EjemploComponent,
    Pagina504Component,
    EncabezadoComponent,
    UsuariosComponent,
    EditarusuariosComponent,
    AgregarusuariosComponent,
    ArticuloComponent,
    ArticulodetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
