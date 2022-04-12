function retornaTrueOrFalse(string) {
    let exercicio = string.split('').reverse().join('')
    if(exercicio === string) {
        return true;
    }else {
        return false ;
    }
}
console.log(retornaTrueOrFalse('boi'));