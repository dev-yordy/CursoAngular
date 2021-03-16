import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  nombre:string = "Yordy";
  
  persona:any ={
    nombre: "Andrea",
    apellido:"Davila"
  }
  image:string="https://scontent.fmga3-1.fna.fbcdn.net/v/t1.0-9/105043352_888807738296892_3482619281793359805_n.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=1jnixg_NAWEAX8pGVD9&_nc_ht=scontent.fmga3-1.fna&oh=d0d74bfff419862a131906247e410c7e&oe=6054CCD2";
  inputnew:string = "Shit on";
  texto:string="Escribe..";

  correo:string="";
  pass:string=""; 

  constructor() { }

  ngOnInit(): void {
  }
  iniciar(event:any){
    if(event.key == "Enter"){
      console.log(this.correo);
      console.log(this.pass);
    }
  }
  alerta(){
    alert("Este es el evento doble click");
  }
  escribemodelo(){
    console.log(this.texto);
  }
  colorfondo(event:any){
    event.srcElement.style.background ="red";
  }
 
}
