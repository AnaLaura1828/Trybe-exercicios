// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres

export default class Subject {
    constructor(private name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
    setName(value: string) {
        if(value.length < 3) throw new Error('O name tem que possuir no mínimo 3 caracteres')
    }
}