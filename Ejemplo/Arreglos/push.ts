var nombres:Array<string> = ["Andrea","Yordy"];

console.log(nombres);

nombres.push("Manuel"); //Metodo push para agregar al arreglo.
console.log(nombres);

interface alumnos{
    nombre:string;
    edad:number;
}
var alum:Array<alumnos> = [
    {
        nombre:"Yordy",
        edad:22
    }
]
console.log(alum);
alum.push({nombre: "Ruben", edad: 19});
console.log(alum);