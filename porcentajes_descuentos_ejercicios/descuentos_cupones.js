// Reto con cupones 
//creo un array con mis cupones 

let coupons=[
    "lauraJR_es_quimica",
    "es_un_super_descuento",
    "es_un_secreto",
];
function calcularPrecioConDescuento(precio, descuento){
    let porcentajePrecioConDescuento= 100-descuento;
    let PrecioConDescuento= (precio* porcentajePrecioConDescuento)/100;

    return PrecioConDescuento
}


function onClickButtonPriceDiscount(){
    let inputPrice=document.getElementById("InputPrice");
    let priceValue=inputPrice.value;

    let inputCoupon=document.getElementById("InputCoupon");
    let couponValue=inputCoupon.value;
    
    let descuento=0;

    switch(couponValue) {
        case "lauraJR_es_quimica":
            descuento = 15;
            break;
        case "es_un_super_descuento":
            descuento = 30;
            break;
        case "es_un_secreto":
            descuento = 25;
            break;
      }

    let precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    let resultP=document.getElementById("ResultP");
    resultP.innerText="El precio con descuento son:$" + precioConDescuento;
}