function maior ( array) {
    let  maiorValor = 0;
    for(let index in array) {
        if(array[maiorValor] < array[index]) {
         maiorValor = index;
         
        }
    }
    return maiorValor;
}
console.log(maior([2, 3, 6, 7, 10, 1]));