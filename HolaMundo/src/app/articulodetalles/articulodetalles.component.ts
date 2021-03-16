import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulodetalles',
  templateUrl: './articulodetalles.component.html',
  styleUrls: ['./articulodetalles.component.scss']
})
export class ArticulodetallesComponent implements OnInit {
   
  articulo: Articulo = this.rutaActiva.snapshot.params.articulo;

  constructor( private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
   this.articulo=JSON.parse(this.rutaActiva.snapshot.params.articulo)
  }

}
