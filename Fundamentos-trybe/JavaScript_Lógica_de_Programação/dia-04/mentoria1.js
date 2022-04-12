function calculaArea (altura, base) {

    let objeto = {
    area: base * altura,
    perimetro: (base *2) + (altura *2),
 
    }
    return objeto;
}
console.log(calculaArea(2,4))