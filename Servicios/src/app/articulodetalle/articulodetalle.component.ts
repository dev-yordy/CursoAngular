import { Component, OnInit } from '@angular/core';
import { Articulo } from '../Models/articulo';
import { User } from '../Models/user';
import { ArticuloService } from '../servicios/articulo.service';

@Component({
  selector: 'app-articulodetalle',
  templateUrl: './articulodetalle.component.html',
  styleUrls: ['./articulodetalle.component.scss']
})
export class ArticulodetalleComponent implements OnInit {
  articulo:Articulo = new Articulo()
  usuario: User = new User();

  constructor(public articuloInyectado:ArticuloService) {
    this.articulo=this.articuloInyectado.articulo;
   }

  ngOnInit(): void {
    this.articuloInyectado.leerUsuario(this.articulo.userId).subscribe((userApirest)=>{
     this.usuario=userApirest;

    })
  }

}
