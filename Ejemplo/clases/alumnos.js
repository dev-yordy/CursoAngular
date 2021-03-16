var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    //Metodo privado para solo poder usado dentro de la clase
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola", this.nombre);
        console.log("Apellido: ", this.apellido);
    };
    Alumno.prototype.add = function (name, lastname, weigh) {
        this.nombre = name;
        this.apellido = lastname;
        this.peso = weigh;
        this.mostrarMensaje();
    };
    return Alumno;
}());
var datos = new Alumno();
var datos2 = new Alumno();
datos.add("Andreita", "Davila", 120);
datos2.add("Yordy", "Jimenez", 120);
