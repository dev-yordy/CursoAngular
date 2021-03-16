import { Injectable } from '@angular/core';
import { Usuario } from '../Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario = new Usuario();

  constructor() {
    this.usuario.iduser=18
    this.usuario.nombre="Yordy";
    this.usuario.apellido="Jimenez"
    this.usuario.password="Derivada7"
   }
}
