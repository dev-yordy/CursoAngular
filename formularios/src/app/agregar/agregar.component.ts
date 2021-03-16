import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario{
  nombre:string;
  correo:string;
  contraseña:string;
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formulariocreado: FormGroup = this.fb.group({});
  listausuarios:Array<Usuario> = new Array<Usuario>();
  esNuevo:boolean = true;
  posicionEditar:number = -1;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }
  
  crearFormulario(){
    this.formulariocreado = this.fb.group({
      nombre: ['',Validators.required],
      correo: ['',Validators.compose([
        Validators.required,Validators.email
      ])],
      contraseña: ['',Validators.compose([
        Validators.required,Validators.minLength(8)
      ])]
    })
    
  }
  agregar(){
    this.listausuarios.push(this.formulariocreado.value as Usuario);
    this.formulariocreado.reset();

    
  }
  editar(){
   this.listausuarios[this.posicionEditar].nombre = this.formulariocreado.value.nombre;
   this.listausuarios[this.posicionEditar].correo = this.formulariocreado.value.correo;
   this.listausuarios[this.posicionEditar].contraseña = this.formulariocreado.value.contraseña;

   this.formulariocreado.reset();
   this.esNuevo=true;
   this.posicionEditar=-1;
  }
  editarusuario(i:number){
 
   this.formulariocreado.setValue({
     nombre:this.listausuarios[i].nombre,
     correo:this.listausuarios[i].correo,
     contraseña: this.listausuarios[i].contraseña
   })
   this.posicionEditar=i;
   this.esNuevo=false;
  }
  eliminar(i:number){
    this.listausuarios.splice(i,1);
  }
}
