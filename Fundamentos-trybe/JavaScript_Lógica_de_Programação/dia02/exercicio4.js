
let numbers = [ 5, 50, 105, 90];
let maiorNumero = numbers[0];

for(let index = 1; index < numbers.length; index +=1) {
    if(numbers[index] > maiorNumero ) {
    maiorNumero = numbers[index];
        console.log(maiorNumero);
    }
}