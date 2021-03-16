interface Alumno {
    id:number;
    nombre:string;
}

var lista: Alumno[] = []

lista.push({id:1,nombre:"Yordy"});
lista.push({id:2,nombre:"Andrea"});
lista.push({id:3,nombre:"Ruben"});

//Find se utiliza para buscar un dato mediante el ID

var buscador = lista.find((alumnos)=>
{
return alumnos.id == 3;

}
)
console.log(buscador);