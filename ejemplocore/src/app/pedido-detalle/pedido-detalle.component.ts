import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoDetalle } from '../models/pedidos-detalles';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.scss']
})
export class PedidoDetalleComponent implements OnInit {
 @Input()  pedidodetalle: PedidoDetalle[] = new Array<PedidoDetalle>();
 @Output() seElimino = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  eliminar(i:number){
   this.seElimino.emit({id:i})
  }
}
