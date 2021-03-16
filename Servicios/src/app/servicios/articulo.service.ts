import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../Models/articulo';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  articulo: Articulo = new Articulo();
  constructor(private http:HttpClient) { 

  }
  leerNoticia() : Observable<Articulo[]>
  {
   return this.http.get<Articulo[]>('https://jsonplaceholder.typicode.com/posts')
  }
  leerUsuario(iduser:number) : Observable<User>{
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+iduser);
  }
  guargarServicio(articulo: Articulo) : Observable<Articulo>
  {
   return this.http.post<Articulo>('https://jsonplaceholder.typicode.com/posts',articulo);
  }
  leerTodosLosUsuarios(): Observable<User[]>{
     return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/');
  }
  borrarArticulo(id:number) : Observable<any>{
  return this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/'+id);
  }
  updateArticulo(articulo:Articulo): Observable<Articulo>{
   return this.http.put<Articulo>('https://jsonplaceholder.typicode.com/posts/'+articulo.id, articulo);
  }
}
