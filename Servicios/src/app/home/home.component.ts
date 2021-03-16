import { convertMetaToOutput } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../Models/articulo';
import { ArticuloService } from '../servicios/articulo.service';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulo:Array<Articulo>= new Array<Articulo>();

  constructor(public usuarioInyectado:UsuarioService, public articuloInyectado:ArticuloService, private ruta:Router) { }

  ngOnInit(): void {
    this.articuloInyectado.leerNoticia().subscribe((articuloDesdeApi)=>{
      this.articulo=articuloDesdeApi;
    });
    let articuloEnviar:Articulo = new Articulo();
    articuloEnviar.body= "Este es el cuerpo del articulo";
    articuloEnviar.title ="Es una prueba";
    articuloEnviar.userId= 4
    this.articuloInyectado.guargarServicio(articuloEnviar).subscribe((articulocreado)=>{
      this.articulo.push(articulocreado);
    })
  }
  
    
  IrAlDetalle(articulo:Articulo){
        this.articuloInyectado.articulo=articulo;
        this.ruta.navigateByUrl('/detalle-articulo')
  }
  borrar(id:number){
   this.articuloInyectado.borrarArticulo(id).subscribe((datoExtraido)=>{
     console.log(datoExtraido)
   })
  }
  update(articulo:Articulo){

  this.articuloInyectado.articulo = articulo;  
  this.ruta.navigateByUrl('agregarArticulo/false')
  }
}
