import { Component, OnInit } from '@angular/core';
class Cliente{
  nombre:string;
  apellido:string;
  exelente:boolean;

  constructor(){
    this.nombre = "";
    this.apellido="";
    this.exelente=true;
  }

}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})

export class EjemploComponent implements OnInit {
  cliente: Cliente = new Cliente();
   listcliente:Array<Cliente> = new Array<Cliente>();
  constructor() {

   }

  ngOnInit(): void {
  }

  add(){
    this.listcliente.push({
      nombre:this.cliente.nombre,
      apellido:this.cliente.apellido,
      exelente:this.cliente.exelente
    })
    this.cliente.nombre=" "
    this.cliente.apellido=" "
    console.log(this.listcliente);
  }

}
