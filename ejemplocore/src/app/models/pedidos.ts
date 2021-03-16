import { PedidoDetalle } from "./pedidos-detalles"

export class Pedidos{
    cliente: string
    direccion:string
    pedidodetalle: Array<PedidoDetalle>

    constructor(){
        this.cliente = ""
        this.direccion = ""
        this.pedidodetalle =  new Array<PedidoDetalle>();
    }
}