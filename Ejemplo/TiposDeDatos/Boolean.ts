var n1:string = 'juan';
var n2:string = 'juan';

var sonnombresiguales:boolean = (n1==n2);
var aceptadescuentos:boolean = (3 + 5 == 8);

console.log('El Booleano de nombres iguales es: '+ sonnombresiguales);
console.log('El booleano del descuento es: '+ aceptadescuentos);

var sonambosverdadero:boolean = (sonnombresiguales && aceptadescuentos);

console.log("El resultado de si ambos son verdaderos es: "+ sonambosverdadero);