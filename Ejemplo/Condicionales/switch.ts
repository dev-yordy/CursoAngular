var menu:number = 2;

//1. Nombre de los estudiantes.
//2. Notas de los estudiantes.
//3. Eliminar estudiante.
/*
switch(menu){

    case 1: {
        console.log("Nombre de estudiantes");
        break;
    }
    case 2:{
        console.log("Notas de los estudiantes");
        break;
    }
    case 3:{
        console.log("Borrando estudiante");
        break;
    }
    default: {
        console.log("Digite el numero correcto");
    }
} */

//usando Enum.

enum tipomenu{
  estudiantes=1,
  notas,
  borrar
}

switch(menu){

    case tipomenu.estudiantes: {
        console.log("Nombre de estudiantes");
        break;
    }
    case tipomenu.notas:{
        console.log("Notas de los estudiantes");
        break;
    }
    case tipomenu.borrar:{
        console.log("Borrando estudiante");
        break;
    }
    default: {
        console.log("Digite el numero correcto");
    }
}