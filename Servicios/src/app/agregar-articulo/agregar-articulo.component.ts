import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../Models/articulo';
import { User } from '../Models/user';
import { ArticuloService } from '../servicios/articulo.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios: Array<User> = new Array<User>();
  formularioArticulo: FormGroup = this.fbGenerador.group({});
  articulo: Articulo = new Articulo();
  esNuevo:boolean = true;
  constructor(public ArticuloInyectados: ArticuloService, private fbGenerador: FormBuilder, private RutaActiva: ActivatedRoute) { }
 
   
  ngOnInit(): void {
    this.esNuevo = JSON.parse(this.RutaActiva.snapshot.params.esNuevo); 
    
     this.formularioArticulo = this.fbGenerador.group({
       title:['',Validators.required],
       body:['',Validators.required],
       userId:['',Validators.required]
     })

     if(!this.esNuevo){
       this.articulo=this.ArticuloInyectados.articulo;
       this.formularioArticulo.setValue({
         title: this.articulo.title,
         body: this.articulo.body,
         userId: this.articulo.userId
       })
     }
     
    this.ArticuloInyectados.leerTodosLosUsuarios().subscribe((usuariosdelaApi)=>{
      this.usuarios=usuariosdelaApi;
    })
  }
  agregar(){
    this.articulo = this.formularioArticulo.value as Articulo;

    this.ArticuloInyectados.guargarServicio(this.articulo).subscribe((articulorecibido)=>{
      console.log(articulorecibido);
      this.formularioArticulo.reset();
    })
  }
  editar(){
    this.articulo = this.formularioArticulo.value as Articulo;
    this.articulo.id = this.ArticuloInyectados.articulo.id;
    this.ArticuloInyectados.updateArticulo(this.articulo).subscribe((articuloupdate)=>{
      console.log(articuloupdate);
      this.formularioArticulo.reset();
    })
  }

}
