function tiempo (velocidad_final, velocidad_inicial, gravedad){
    var etiempo = ((velocidad_final - velocidad_inicial ) / gravedad);
    return {"el tiempo es":etiempo + " sg"};
}