var nombres = ["Andrea", "Ruben", "Benita"];

//Metodo Splic --> nombres.splice(Posicion a eliminar, cantidad siguiente a eliminar)
// nombres.splice(1,1); ->se eliminaria ruben nada mas
//nombres.splice(0,2); --> se eliminaria Andrea y Ruben, ya que comienza a eliminar de la posicion 0 y luego elimina la posicion siguente
nombres.splice(0,1);
console.log(nombres);
