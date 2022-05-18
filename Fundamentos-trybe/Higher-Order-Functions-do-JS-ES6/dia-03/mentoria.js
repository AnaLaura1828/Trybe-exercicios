// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByName = (name, listStudents) =>
//   listStudents.filter((student) => student !== name);
//   // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

// const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
// console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]



const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 56,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 69,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];

 // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
let array = [];
const idPar = () => {
  techProducts.forEach((produtos) => {
  if(produtos.id % 2 === 0) {
    array.push(produtos.name)
  }
  })
  return array
}
// console.log(idPar());



 // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
 const product300 = () => techProducts.some((produto) => produto.price > 300)
 
//  console.log(product300());

 // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// ex: id: 8 e quantidade: 2 preço total: 432
const precoTotal = (quantidade, id2) =>  techProducts.find((produto) => produto.id === id2).price * quantidade

console.log(precoTotal(7,2));
