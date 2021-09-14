function calcularMediaArimetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado= 0 ,nuevoElemento){     
            return valorAcumulado+nuevoElemento;
        }
    );

    let promedioLista=sumaLista/ lista.length;
    return promedioLista
}
let lista=[
    100,
    200,
    300,
    40000000000,
];

let mitadLista=parseInt(lista.length/2);

function esPar(numerito){
    if( numerito %2 ===0 ){
        return true
    }
    else{
        return false
    }
}

let mediana;

if(esPar(lista.length)){
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    const promedioElemento1y2 = calcularMediaArimetica([
    elemento1,elemento2,]);
      mediana = promedioElemento1y2;
}
else{
    mediana=lista[mitadLista];
}
