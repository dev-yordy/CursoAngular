import { Component, OnInit } from '@angular/core';
class Cliente{
  nombre:string = "";
  apellido:string = "";
  edad:number = 0;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clientes: Array<Cliente> = new Array<Cliente>();

  constructor() { }

  ngOnInit(): void {
    // this.clientes.push({
    //   nombre:'Yordy',
    //   apellido:'Jimenez',
    //   edad: 22
    // },
    // {
    //   nombre:"Andrea",
    //   apellido: "Davila",
    //   edad:19
    // })
  }
  
  guardarcliente(){
    localStorage.setItem('client', JSON.stringify(this.clientes))
  }
  

  getClient(){   
     let datos = localStorage.getItem('client');
     console.log(JSON.parse('datos'));
  }
}
