// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

export default class Person {
    constructor(private name: string, private birthDate: Date) {
      this.name = name;
      this.birthDate = birthDate;
    }

    getName(): string {
        return this.name;
    };
    setName(value: string) {
        this.validateName(value);
        this.name = value;
    }

    getBirthDate(): Date {
        return this.birthDate;
    }
    setBirthDate(value: Date) {
        this.validateBirthDate(value);
        this.birthDate = value;
      }

    static getAge(value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs)
    }

    private validateName(value: string): void {
        if(value.length < 3 ){
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
    }

    private validateBirthDate(value: Date): void {
        if(value.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        }
        if (Person.getAge(value) > 120){ 
            throw new Error('A pessoa deve ter no máximo 120 anos.');
        }
    }
  }
  