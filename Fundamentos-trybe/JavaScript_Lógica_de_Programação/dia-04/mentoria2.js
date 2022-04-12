let array = [5, 3, 2, 20, 40];

function imparesPares(valores) {
    let resultado = {
        pares: 0,
        impares: 0,
    }
    for(let index = 0; index < valores.length; index +=1) {
        if(valores[index]% 2 === 0) {
            resultado.pares +=1;
        }else {
            resultado.impares +=1;
        }
    }
    return resultado
}
    

