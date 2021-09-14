function trianguloIsosceles(lado1,lado2,base){
    if(lado1===lado2 && lado1 != base){
        return Math.sqrt (lado1*lado2) - ((base * base)/4)
    }
}
trianguloIsosceles

function trianguloIsosceles(lado1,lado2,base){
    if(lado1===lado2 && lado1!= base){
        return Math.sqrt ((lado1*lado2) - ((base * base)/4))
    }
    else {
    console.log(" no es un triangulo isosceles")
    }
}

trianguloIsosceles(4,4,2)

