function maiorCaracter(array) {
    let maiorNome = array[0];
    for(let index in array ) {
    if(maiorNome.length < array[index].length) {
            maiorNome = array[index]
        }
    }
        return maiorNome
    }

console.log("Maior nome é:" + maiorCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


