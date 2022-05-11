const myFizzBuzz = require('./script');

describe('testa a função myFizzBuzz', () => {
    it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
      expect(myFizzBuzz(3)).toBe('fizz');
      expect(myFizzBuzz(5)).toBe('buzz');
      expect(myFizzBuzz(1)).toBe(1);
      expect(myFizzBuzz('2')).toBe(false);
    })
  });


//1-exercicio do dia 
 test('adicionando 4 + 5 igual a 9', () => {
     expect(sum(1,2)).toBe(3);
});


// const sum = require('./script');

//exemplo da aula
 test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
 });
//exemplo da aula
 test('Somando 5.1 + 6.55 igual a -44', () => {})
 expect(sum(5.1, -6.55)).toBe (11.65) //js nao usa numero flutuando, o tobe tem que ser exato, usar outro matchers!!

//exemplo da aula
 test('Somando 5.1 + 6.55 igual a 44', () => {})
 expect(sum(5.1, 6.55)).toBeCloseTo (11.65) 


//testando se o retorno de sum é 0 exercico da aula 2
test ('se 0 + 0 é igual a 0', () => {
    expect(sum(0,0)).toBe(0)
})

// teste caso receba uma string no parametro
it ('mandar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4,"5")).toThrow();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
});

//outro exercicio
const myRemove = require('./script');
describe('testa a função myRemove', () => {
    it ('deve retornar um array', () => {
        expect(myRemove([1, 2, 3, 4],3)).toEqual([1,2,4]);
        expect(myRemove([1, 2, 3, 4],3)).not.toEqual([1,2,3,4],3);
        expect(myRemove([1, 2, 3, 4],5)).toEqual([1,2,3,4],3);
    })
})
//outro exercicio
const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;