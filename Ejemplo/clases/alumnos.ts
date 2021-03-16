class Alumno{
   private nombre:string;  //Variables privadas para ser usada dentros de la clase
    private apellido:string;
    private peso:number;
    
    //Metodo privado para solo poder usado dentro de la clase
    private mostrarMensaje() : void
    {
        console.log("Hola", this.nombre);
        console.log("Apellido: ",this.apellido);

    }

    add (name:string,lastname:string,weigh:number): void 
    {
     this.nombre=name;
     this.apellido=lastname;
     this.peso=weigh;

     this.mostrarMensaje();
    }

}

var datos:Alumno = new Alumno();
var datos2:Alumno = new Alumno();

datos.add("Andreita","Davila",120);
datos2.add("Yordy","Jimenez",120);

