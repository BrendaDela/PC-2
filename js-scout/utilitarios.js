function ver(n) {
    document.getElementById("subseccion" + n).style.display = "block"
}

function ocultar(n) {
    document.getElementById("subseccion" + n).style.display = "none"
}

function actual() {
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

    fecha = new Date(); //Actualizar fecha.
    hora = fecha.getHours(); //hora actual
    minuto = fecha.getMinutes(); //minuto actual
    segundo = fecha.getSeconds(); //segundo actual
    dia = diasSemana[fecha.getDay()];//hola
    numero = fecha.getDate();
    mes =  meses[fecha.getMonth()];
    anio = fecha.getFullYear();
    if (hora < 10) { //dos cifras para la hora
        hora = "0" + hora;
    }
    if (minuto < 10) { //dos cifras para el minuto
        minuto = "0" + minuto;
    }
    if (segundo < 10) { //dos cifras para el segundo
        segundo = "0" + segundo;
    }
    //devolver los datos:
    mireloj = hora + " : " + minuto + " : " + segundo;
    return mireloj +" del " +dia +" "+ numero +" de "+mes +" del "+anio;
}
// function fecha() {
//     var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
//     var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
//     f =  new Date();
//     dia = diasSemana[f.getDay()];
//     mes =  meses[f.getMonth()];
//     anio = f.getFullYear();
//     mifecha = dia + ", de "+ mes + " del "+anio;
//     return mifecha;
// }


function actualizar() { //función del temporizador
    mihora = actual(); //recoger hora actual
    mireloj = document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML = mihora; //incluir hora en elemento
}
setInterval(actualizar, 1000); //iniciar temporizador


//Fecha completa


