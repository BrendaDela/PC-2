function alerta() {
    var mensaje;
    var opcion = prompt("Introduzca su nombre:", "Brenda De La Cruz");
    if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
    } else {
        mensaje = "Hola " + opcion;
    }
    document.getElementById("ejemplo").innerHTML = mensaje;

}

function horoscopo() {
    dia = prompt("Introduce día");
    mes = prompt("Introduce mes");
    switch (mes) {
        case "enero": // 01
            if (dia >= 21){
                alert("acuario");
                document.getElementById("signo").innerHTML = "acuario";}
            break;
        case "febrero": // 02
            if (dia <= 19){
                alert("acuario");
                document.getElementById("signo").innerHTML = "acuario"}
            else{
                alert("piscis");
                document.getElementById("signo").innerHTML = "piscis"}
            break;
        case "marzo": // 03
            if (dia <= 20){
                alert("piscis");
                document.getElementById("signo").innerHTML = "piscis"}
            else{
                alert("aries");
                document.getElementById("signo").innerHTML = "aries"}
            break;
        case "abril": // 04
            if (dia <= 20){
                alert("aries");
                document.getElementById("signo").innerHTML = "aries"}
            else{
                alert("tauro");
                document.getElementById("signo").innerHTML = "tauro"}
            break;
        case "mayo": // 05
            if (dia <= 21){
                alert("tauro");
                document.getElementById("signo").innerHTML = "tauro"}
            else{
                alert("geminis");
                document.getElementById("signo").innerHTML = "geminis"}
            break;
        case "junio": // 06
            if (dia <= 21){
                alert("geminis");
                document.getElementById("signo").innerHTML = "geminis"}
            else{
                alert("cancer");
                document.getElementById("signo").innerHTML = "cancer"}
            break;
        case "julio": // 07
            if (dia >= 23){
                alert("cancer");
                document.getElementById("signo").innerHTML = "cancer"}
            else{
                alert("leo");
                document.getElementById("signo").innerHTML = "leo"}
            break;
        case "agosto": // 08
            if (dia <= 23){
                alert("leo");
                document.getElementById("signo").innerHTML = "leo"}
            else{
                alert("virgo");
                document.getElementById("signo").innerHTML = "virgo"}
            break;
        case "septiembre": // 09
            if (dia <= 23){
                alert("virgo");
                document.getElementById("signo").innerHTML = "virgo"}
            else{
                alert("libra ssss");
                document.getElementById("signo").innerHTML = "libra"}
            break;
        case "octubre": // 10
            if (dia <= 23){
                alert("libra   gggggggg");
                document.getElementById("signo").innerHTML = "libra"}
            else{
                alert("escorpio");
                document.getElementById("signo").innerHTML = "escorpio"}
            break;
        case "noviembre": // 11
            if (dia <= 22){
                alert("escorpio");
                document.getElementById("signo").innerHTML = "escorpio"}
            else{
                alert("sagitario");
                document.getElementById("signo").innerHTML = "sagitario"}
            break;
        case "diciembre": // 12
            if (dia <= 21){
                alert("sagitario");
                document.getElementById("signo").innerHTML = "sagitario"}
            else{
                alert("capricornio");
                document.getElementById("signo").innerHTML = "capricornio"}
            break;
        default:
            alert("No Existe, escribiste: en dia" + dia + " y en mes: " + mes)

    }
}