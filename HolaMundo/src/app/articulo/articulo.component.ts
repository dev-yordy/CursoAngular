import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  listadearticulos:Array<Articulo> = new Array<Articulo>();

  constructor(private ruta:Router) { }

  ngOnInit(): void {
    this.listadearticulos.push({
      nombre: "Xiaomi Redmi Note 9",
      precio: 200,
      stock: 32,
      preciomayorista: 150,
      descripcion: "El Xiaomi Redmi Note 9, incluye una batería de 5.020 mAh y un procesador MTK G85 acompañado de 128 GB de memoria interna. Posee 4 cámaras principales, la primera de 48 megapíxeles, la ultra gran angular de 8 megapíxeles, las de profundidad y macro cada una de 2 megapíxeles.",
      img: "https://i.blogs.es/a04066/xiaomi-redmi-note-9-y-9-pro/450_1000.jpg",
    },
    {
      nombre: "Iphone 7",
      precio: 150,
      stock: 22,
      preciomayorista: 100,
      descripcion: "Procesador: Apple A10 Fusion de cuatro núcleos a 2.34 GHz. Pantalla: LED-backlit IPS LCD de 5.5 pulgadas y con 1080 x 1920 píxeles de resolución. Cámara trasera: dual de 12 MP, autofoco, zoom, flash; cámara frontal de 7 MP. Memoria Interna: dependiendo del modelo puede venir con 32, 128, o 256 GB.",
      img: "https://i.pcmag.com/imagery/reviews/01qtoVJbe1bVdGcjq0jYvRT-7..1569469928.jpg"
    },
    {
      nombre:"Iphone X",
      precio: 500,
      stock: 10,
      preciomayorista: 400,
      descripcion: "Las prestaciones de accesibilidad del iPhone X ayudan a las personas con discapacidad a sacarle el máximo partido. Gracias a sus funciones para usuarios con problemas de visión, audición, aprendizaje, lectoescritura y habilidades físicas y motoras, el dispositivo más personal del mundo está al alcance de todos",
      img: "https://www.worten.es/i/f5633bd5416787813fd7a9a649cc4bc265c22556.jpg"
    })
  }
  pasarparametro(articuloRecibido: Articulo){
   console.log(articuloRecibido)
   this.ruta.navigate(['articulodetalle',{articulo: JSON.stringify(articuloRecibido)}])
  }

}
