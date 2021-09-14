//perimetro de un cuadrado de 5 cm 

//console.group("cuadrado")
//const ladoCuadrado=5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

//const perimetroCuadrado= ladoCuadrado*4;
//console.log("el perimetro cuadrado es : " + perimetroCuadrado + "cm");

//const areaCuadrado= ladoCuadrado*ladoCuadrado;
//console.log("el area del cuadrado es : " + areaCuadrado + " cmˆ2")
//console.groupEnd  

//funcion 

function perimetroCuadrado(lado){
    return lado *4;  
}
perimetroCuadrado(8)

function areaCuadrado(lado){
    return lado * lado
}
areaCuadrado(10)
console.groupEnd();

//codigo del triangulo

//console.group("triangulo")
//const ladoTriangulo1=6;
//const ladoTriangulo2=6;
//const baseTriangulo=4;

//console.log("los lados del triangulo miden: " + ladoTriangulo1  + " cm " + ladoTriangulo2 + " cm " + baseTriangulo + " cm ");

//const alturaTriangulo=5.5;
//console.log("la altura del triangulo es: " + alturaTriangulo + " cm ");

//const perimetroTriangulo=ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo es: " + perimetroTriangulo);

//const areaTriangulo=(baseTriangulo * alturaTriangulo)/2;
//console.log("el area del triangulo es: " + areaTriangulo + " cmˆ2 ");

//console.groupEnd

//console.group("circulos")

//funcion 

function perimetroTriangulo(lado1,lado2,lado3){
    return lado1+lado2+lado3
}
perimetroTriangulo()

function areaTriangulo(base, altura){
    return (base * altura)/2
}

//radio
const radioCirculo=4;
console.log("el radio del circulo es " + radioCirculo);

//diametro
const diametroCirculo=radioCirculo * 2;
console.log("el diametro del circulo es: " + diametroCirculo);

//PI
const PI= Math.PI;
console.log("pi es: " + PI);

//Circunferencia
const perimetroCirculo=diametroCirculo * PI
console.log("el perimetro del circulo es: " + perimetroCirculo);

//area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es : " + areaCirculo);
console.groupEnd


// funciones 
// aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;
    
    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;
    
    const area=areaCuadrado(value);
    alert(area);
}
