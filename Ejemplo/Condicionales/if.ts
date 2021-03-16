var descuento:number,Monto:number,productos:number;

descuento=0.1;
Monto=20;
productos=5;

if(Monto>15){
    console.log("Se le aplicara un descuento del 10%")
    Monto=Monto-(Monto*descuento);
    console.log("Monto total: "+ Monto);
}
if(Monto>10){
    if(productos>5){
        console.log("Se le aplicara un descuento del 15%");
        Monto=Monto-(Monto*descuento);
        console.log("Monto total: "+ Monto);
    }
}
