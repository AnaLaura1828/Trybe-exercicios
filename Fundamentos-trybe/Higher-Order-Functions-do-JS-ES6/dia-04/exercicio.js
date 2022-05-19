const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // 1 - Dada uma matriz, transforme em um array.
  const arrays = [
      ['1', '2', '3'],
      [true],
      [4, 5, 6],
    ];
    
    function flatten() {
      return arrays.reduce((acc, curr) => acc.concat(curr), []);
    }
  
  // console.log(flatten());
//  2 - Crie uma string com os nomes de todas as pessoas autoras
const reduceNames = (array) => {
   const names = array.reduce((acc, curr, index, array) => {
   if(index === array.length -1) return `${acc}, ${curr.author.name},`;
   return `${acc} ${curr.author.name}`;
    },'');
    return names
}
// console.log(reduceNames(books));


//🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge(array) {
    return array.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear)/array.length, 0).toFixed(0)
}
// console.log(averageAge(books));

//🚀 4- Encontre o livro com o maior nome.
// for(ele of books) {
//   console.log(ele.name.length);
// }
function longestNamedBook() {
  return books.reduce((acc, curr) => {
    if(acc.length < curr.name.length) {
      acc = curr.name
    }
    return acc;
  })
}
// console.log(longestNamedBook());

//🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
let acumulador = 0
function containsA() {
return names.reduce((acc, palavra) => {
  for(letra of palavra.toLowerCase()) {
    if(letra === 'a') {
      acc +=1
    }
  }
  return acc
})
}
console.log(containsA());
//🚀 6.**- Agora mediaAgevamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

  const media = (grade) => {
    const mediaFinal = grades.reduce((acc,note) => acc+note,0) //soma das notas
    return Number(mediaFinal/grade.length).toFixed(2)
  }

function studentAverage () {
 return students.map((student, index) => ({name: student, average:media(grades[index])}))
}
  
// console.log(studentAverage());


// //   for(i =0; i<grades.length;i +=1){
// //     console.log(grades[i]);
// //   }
// //   //  CADA ARRAY DENTRO DE GRADES

// function studentAverage() {
//   return grades.map((grade, i) => {
//     return {name:students[i], average: grade.reduce((acc, el) =>(acc+el))/grade.length}
//   })
// }
// console.log(studentAverage());
