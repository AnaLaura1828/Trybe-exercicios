// const create = (data) => {
//     const filtar = data.filter((ele) => ele.rank <=10)
//     return console.log(filtar);
// }

//PEGAR COM O INDEX
// const create = (data) => {
//     const filtar = data.filter((ele, index) => index <=10)
//     return console.log(filtar);
// }

//DESESTRUTURANDO
const create = (data) => {
    const filtrar = data.filter(({rank}) => rank <=10)
    const tratar = filtrar.map(({name, priceUsd, symbol}) => ({name,priceUsd, symbol}))

    const body = document.querySelector('body')
    tratar.forEach(({name, priceUsd, symbol}) => {
        const div = document.createElement('div')
        div.innerHTML = `A moeda ${name} que tem o preço em dolar ${ priceUsd} e que tem o simbolo ${symbol}`
        body.appendChild(div)
    });
}

const apis = async () => {
    try {
 const response = await fetch('https://api.coincap.io/v2/assets')
 const dados = await response.json()
 console.log(dados);
  create(dados.data);
    }catch (error) {
        console.log(error);
    }
}
window.onload = () => apis()