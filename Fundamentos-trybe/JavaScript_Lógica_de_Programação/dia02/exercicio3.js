let array = [82, 50, 20, 10,50,2,11];
let novoValor = 0;

for(let index = 0; index < array.length; index +=1) {
    novoValor += array[index]
}
let media = novoValor / array.length;
console.log(media)
console.log("Valor maior que 20! " + media);

