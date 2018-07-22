function MRU(posicion_inicialA,posicion_inicialB,tiempoA,tiempoB,velocidad_inicialA, velocidad_inicialB){
    var velocidadA = posicion_inicialA + velocidad_inicialA;
    var tiempo_rel = velocidadA - velocidad_inicialB;
    var tiempo_final = posicion_inicialB/tiempo_rel;
    var posicion_final = velocidad_inicialA * tiempo_final;
    return {"tiempo final":tiempo_final + " m/sg",
        "posicion final":posicion_final + " m"};
}








console.log(MRU(0,36,1,1,2,-4));

console.log(velfinal_2(0,9.81,44.145));
console.log(velfinal(0,9.81,44.145));
console.log(tiempo(1425,0,44));
