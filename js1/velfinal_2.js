function velfinal_2 (velocidad_inicial, gravedad, altura){
    var velocidad_final = ((velocidad_inicial**2) + (2 * gravedad * altura))**(1/2);
    return {"velocidad final":velocidad_final + " m/sg"};
}