function menorValor(array) {
    let menorValor = 0;
    for(let index in array) {
        if(array[menorValor] > array[index]) {
            menorValor= index;
        }
    }
    return menorValor;
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));