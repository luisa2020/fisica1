function velfinal (velocidad_inicial, gravedad, altura){
    var velocidad_final = (velocidad_inicial + gravedad  * altura);
    return {"velocidad final":velocidad_final + " m/sg"};
}