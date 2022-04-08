let numbers = [6, 10, 4, 20, 72, 8, 100, 2, 36, 28];
let numeroImpar= 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numeroImpar += 1;
  }
}

if (numeroImpar === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(numeroImpar);
}
