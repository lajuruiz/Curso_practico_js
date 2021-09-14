//let precioOriginal=100;
//let descuento=15;

//let porcentajePrecioConDescuento= 100-descuento;
//let PrecioConDescuento= (precioOriginal* porcentajePrecioConDescuento)/100;

//console.log({
   // precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
    //PrecioConDescuento,
//});
//funcion

function calcularPrecioConDescuento(precio, descuento){
    let porcentajePrecioConDescuento= 100-descuento;
    let PrecioConDescuento= (precio* porcentajePrecioConDescuento)/100;

    return PrecioConDescuento
}

function onClickButtonPriceDiscount(){
    let inputPrice=document.getElementById("InputPrice");
    let priceValue=inputPrice.value;

    let InputDiscount=document.getElementById("InputDiscount");
    let discountValue=InputDiscount.value;
    
    let PrecioConDescuento= calcularPrecioConDescuento(priceValue, discountValue);

    let resultP=document.getElementById("ResultP");
    resultP.innerText="El precio con descuento son:$" + PrecioConDescuento;
}
