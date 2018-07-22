function altura_caida_libre() {
    var velocidad_inicial= document.getElementById(velocidad_inicial).valueOf();
    var tiempo= document.getElementById(tiempo).valueOf();
    var gravedad= document.getElementById(gravedad).valueOf();
    var velinicial=velocidad_inicial;
    var fintiempo= tiempo;
    var totalgravedad=gravedad;
    var altura = velinicial * fintiempo + (1 / 2) * totalgravedad * (fintiempo ** 2);
    return {"altura": altura + " m"};
    console.log('altura');

}


