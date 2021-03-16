import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  pedido: Pedidos = new Pedidos()
  
  constructor() { }

  ngOnInit(): void {
  }

  agregarproducto(){
    this.pedido.pedidodetalle.push({
      cantidad: 10,
      precio: 5,
      producto: 'agua',
      total: 20
    })
  }
  elHijoElimina(event:any){
    console.log(event);
    this.pedido.pedidodetalle.splice(event,1);
  }
}
