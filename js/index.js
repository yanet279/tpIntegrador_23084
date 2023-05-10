
function calcularPrecioFinal() {
    let cantEnt=document.getElementById("cantEntradas").value;  
    let descuento=document.getElementById("porcDescuento").value;

    let descTotal=(cantEnt*1000)*descuento/100;
    let precioFin=(cantEnt*1000)-descTotal;

    document.getElementById("precioFinal").value=precioFin;
    document.getElementById("precioFinal2").innerHTML=precioFin;
    document.getElementById("precioFinal2").style.display="none";
}