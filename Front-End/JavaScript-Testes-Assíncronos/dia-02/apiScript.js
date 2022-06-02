// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const obj = {
  method:"GET" ,
  headers:{ 'Accept': 'application/json' } ,
}
const createdDiv = (data) => {
  const body = document.querySelector('body')
const joke = data.joke
const myDiv = document.createElement('div')
myDiv.innerHTML = joke
 body.appendChild(myDiv)
}

const fetchJoke = () => {
  fetch(API_URL, obj)
  .then((response) => response.json())
  .then((data) => createdDiv(data))
  .catch((error) => console.log(error))
};


window.onload = () => fetchJoke();









// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   fetch(API_URL, { headers: { Accept: 'application/json' } })
//     .then(response => response.json())
//     .then(data =>
//       document.getElementById('jokeContainer').innerText = data.joke
//     );
// }

// window.onload = () => fetchJoke();
