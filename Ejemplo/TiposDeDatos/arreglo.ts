var listaname:Array<string> = ["Yordy","Ruben","Andrea","David","Yahoska"];

console.log(listaname);
//Para accesar a un nombre especifico
console.log(listaname[2]);
//Arreglo tipo interface u Objeto
 interface alumno{
    nombre:string;
    edad:number;
}
var listadealumnos: Array<alumno>=[
   {
      nombre: "Juan",
      edad: 20 
   },
   {
       nombre: "Sarai Lopez",
       edad: 19
   } 

]

console.log(listadealumnos[1]); //Llamando a una posicion especifica, se le quita los corchete para un llamado a todo el arreglo.

