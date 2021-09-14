
// se crea el array, se realiza el ciclo for y se crea un acumulador 
// let acumulador=0;
//acumulador= acumulador + lista[i]
//forma 1 ( cualquier lista)


// forma 1 con un array fijo.
const listaa=[0,1,2,3,4];
let acumulador=0;
for(let i=0; i<listaa.length; i++){
   acumulador=acumulador+ listaa[i];
}


// forma 2 para que sea cualquier lista y no una fija 
function calcularMediaArimetica(lista){
    let sumaLista=0;
    for(let i=0; i< lista.length; i++){
    sumaLista=sumaLista + lista[i];
    }
    let promedioLista=sumaLista/ lista.length;
    return promedioLista
}

//forma 3 con un metodo reduce de arrays 
function calcularMediaArimetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado= 0 ,nuevoElemento){     
            return valorAcumulado+nuevoElemento;
        }
    );

    let promedioLista=sumaLista/ lista.length;
    return promedioLista
}
