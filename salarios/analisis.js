const salariosCol = colombia.map(
    function (personita){
       return personita.salary; 
    }
);

const salariaColSorted =salariosCol.sort(
    function (salaryA, SalaryB) {
        return salaryA - SalaryB;
    }
);


/* if (numerito % 2 === 0 ){
    return true;
} else {
    return false 
} */ // este analisis nos genera un true o false en el caso de si numerito al dividirlo entre dos da cero
// solo con esa parte  tenemos para saber si es verdadero o falso 

function esPar (numerito) {
    return (numerito % 2 === 0)   
}

function calcularMediaArimetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado= 0 ,nuevoElemento){     
            return valorAcumulado+nuevoElemento;
        }
    );

    let promedioLista=sumaLista/ lista.length;
    return promedioLista
}

// mediana  

function medianaSalarios(lista) {
   const mitad = parseInt (lista.length / 2);
   
   if(esPar(lista.length)) {
       const personitaMitad1 =lista[mitad - 1];
       const personitaMitad2 =lista[mitad];

       const mediana = calcularMediaArimetica([personitaMitad1, personitaMitad2]);
       return mediana;
   } else {
       const personitaMitad =lista[mitad];
       return personitaMitad;
   }
}

console.log(
    medianaSalarios(salariaColSorted)
);




//[500,1500, 1800,1000,2200,200,500,1500,1300,2400,3400,400,400,400,600,1600,2600,1000,2000,100000000]