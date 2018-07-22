function requestApplication(e){
    var solicitud = new XMLHttpRequest();
    solicitud.addEventListener('load', requestAplicacionResponse, false);
    var aplicacion = e.target;
    var modulo = aplicacion.parentNode.parentNode;
    var sucursal = modulo.parentNode.parentNode;
    var dataset = sucursal.dataset;
    var url = 'http://' + dataset.host + ':' + dataset.port + '/sistema/aplicacion';
    var paquete = {
        'sesion':sucursal.dataset.sesion,
        'usuario':sucursal.dataset.usuario,
        'perfil': sucursal.dataset.perfil,
        'modulo': modulo.dataset.modulo,
        'aplicacion': aplicacion.dataset.aplicacion
    };
    solicitud.open('POST', url);
    solicitud.send(JSON.stringify(paquete));
}

//este metodo recibe la respuesta del servidor
function requestAplicacionResponse(e){
    var main = document.querySelector('main');//contenedor donde quiero agregar lo solicitado
    //obj es un diccionario clave valor "objeto json" que contiene el codigo que deseo agregar
    var obj = JSON.parse(e.target.responseText);
    main.innerHTML = main.innerHTML + obj.html + obj.css + obj.js;
}