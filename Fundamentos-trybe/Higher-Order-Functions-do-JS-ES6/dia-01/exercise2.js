const sorteio = (myNumber, checkout) => checkout === myNumber;

const result = (myNumber, callback) => {
    const checkout = Math.floor((Math.random()* 5) +1);
   //usando operador ternario
    return callback(myNumber,checkout) ? 'Parabens você ganhou!!' : 'Tente novamente !'

    //usando if/else
    // if( myNumber === checkout) {
    //     return callback= 'Parabens você ganhou'
    // }else {
    //    return callback = 'Tente novamente'
    // }
}
console.log(result(4,sorteio));
