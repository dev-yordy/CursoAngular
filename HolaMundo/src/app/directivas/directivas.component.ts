import { Component, OnInit } from '@angular/core';

interface Productos{
  nombre:string;
  stock:number;
  fechavence:Date;
  fabricante:string;
}

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  constructor() { }
  cargando:boolean = true;
  lista:Array<string> = ["Yordy", "Andrea","Ruben"];
  selection:string="";

  listaproductos:Array<Productos> = [
    {
      nombre: "Samsumg A50",
      stock: 25,
      fechavence: new Date ("03/20/2023"),
      fabricante: "SamsumgNorteAmerica"
    },
    {
      nombre: "iPhone X",
      stock: 25,
      fechavence: new Date ("03/20/2022"),
      fabricante: "AppleNorteAmerica"
    },
    {
      nombre: "Samsumg A51",
      stock: 25,
      fechavence: new Date ("03/20/2023"),
      fabricante: "SamsumgNorteAmerica"
    }

  ];

  ngOnInit(): void {
    
    setTimeout(() => {
      this.cargando = false;
    }, 3000);

  }
  Reanudar(){
    this.cargando = true;
  }
  cambiarVentana(pestana:string){
    this.selection = pestana;
  }

}
