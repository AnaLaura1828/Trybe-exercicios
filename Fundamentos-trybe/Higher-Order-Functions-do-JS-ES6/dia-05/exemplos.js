// Faça uma lista com as suas frutas favoritas 

//SPREND  
const specialFruit = ['Pera', 'Morango', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Strogonoff de Frango', 'Lasanha', 'HotDog'];

const fruitSalad = (fruit, additional) => {
    const eatFavorites = [...specialFruit, ...additional]
    return eatFavorites
};

// console.log(fruitSalad(specialFruit, additionalItens));

//DESTRUCTURING
  const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
//     console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
 };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

//   const { name, age, nationality} = user;
//   const {profession, squad, squadInitials} = jobInfos;

//   const userJobInfos = {...user, ...jobInfos}

// //   console.log(`hi my name is ${name}, I'm ${age} years old and I'm Brazilian. I worik as a Sofware engineer and my squard is `);
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  console.log(nationality); // Brazilian
  //desestruturar um array
  const position2d = [1.0, 2.0];
  const [x, y, z = 0] = position2d;
  
//   console.log(x); // 1
//   console.log(y); // 2
//   console.log(z); // 0

//   Default Parameters
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting('ana'); // Welcome undefined!
const greeting2 = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting2(); // // Welcome usuário!

const getPosition = (latitude =-19.8157 , longitude = -43.9542) => ({
    latitude: latitude,
    longitude: longitude});
  
//   console.log(getPosition())