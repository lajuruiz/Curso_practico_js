const lista=[1,2,3,1,2,3,4,2,2,2,1];

const listaCount={};

lista.map(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] +=1;
        } 
        else{
            listaCount[elemento]=1
        }
    });

const listaArray=Object.entries(listaCount).sort(
    function (elemenentoA, elemenentoB) {
        return elemenentoA[1]-elemenentoB[1];
    }
);

const moda=listaArray[listaArray.length - 1];

//forEach

const lista=[1,2,3,1,2,3,4,2,2,2,1];

const listaCount={};
lista.forEach(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] +=1;
        } 
        else{
            listaCount[elemento]=1
        }
    });

    const listaArray=Object.entries(listaCount).sort(
        function (elemenentoA, elemenentoB) {
            return elemenentoA[1]-elemenentoB[1];
        }
    );
    
    const moda=listaArray[listaArray.length - 1];


// funcion 

function calcularModa(lista){
    let listaCount={};
    lista.forEach(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] +=1;
        } 
        else{
            listaCount[elemento]=1
        }
    });

    let listaArray=Object.entries(listaCount).sort(
        function (elemenentoA, elemenentoB) {
            return elemenentoA[1]-elemenentoB[1];
        }
    );
    
    let moda=listaArray[listaArray.length - 1];
    return moda
}

calcularModa([1,2,3,1,2,3,4,2,2,2,1])


//using reduce by Nelson

const lista=[1,2,3,1,2,3,4,2,2,2,1];

const listaCount= lista.reduce(
    (acc, currentValue) => ({...acc, [currentValue]: (acc[currentValue] || 0) + 1}),
    {}
)

const listaArray=Object.entries(listaCount).sort(
    function (elemenentoA, elemenentoB) {
        return elemenentoA[1]-elemenentoB[1];
    }
);

const moda=listaArray[listaArray.length - 1];

//retooo//
//media geometrica
