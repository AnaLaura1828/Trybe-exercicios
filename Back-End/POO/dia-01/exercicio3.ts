class Escola {
    private _matricula: string;
    private _nome: string;
    private _notasDeProva: number[];
    private _notasDeTrabalho: number[];

    constructor(matricula: string, nome: string) {
        this._matricula = matricula;
        this._nome = nome;
        this._notasDeProva = [];
        this._notasDeTrabalho = [];
    }

    get matricula(): string {
        return this._matricula;
    };
    set matricula(value: string) {
        this._matricula = value;
    }

    get name(): string {
        return this._nome;
    }
    set name(value: string) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mÃ­nimo 3 caracteres.');
        }
        this._nome = value;
    }

    get notasDeProva(): number[] {
        return this._notasDeProva;
    }
    set notasDeProva(notas: number[]) {
        if (notas.length > 4) {
            throw new Error('Estudante so pode possuir 4 notas de prova')
        }
        this._notasDeProva = notas
    }

    get notasDeTrabalho(): number[] {
        return this._notasDeTrabalho;
    }
    set notasDeTrabalho(notas: number[]) {
        if (notas.length > 2) {
            throw new Error('Estudante so pode possuir 2 notas de trabalho')
        }
    }

    sumGrades(): number {
        return [...this._notasDeProva, ...this._notasDeTrabalho]
            .reduce((previousNote, note) => {
                const nextNote = note + previousNote;

                return nextNote;
            }, 0);
    }
    calculaMedia(): number {
        const some = this.sumGrades();
        const media = this._notasDeProva.length + this._notasDeTrabalho.length;

        return Math.round(some / media);
    }
};

// Para testar!
const personOne = new Escola('202001011', 'Maria da Silva');
const personTwo = new Escola('202001012', 'Ana Laura Santos');

personOne.notasDeProva = [25, 20, 23, 23];
personOne.notasDeTrabalho = [45, 45];

personTwo.notasDeProva = [30, 10, 20, 24];
personTwo.notasDeTrabalho = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('MÃŠdia de todas as notas: ', personOne.calculaMedia());

console.log(personTwo);
console.log('Soma de todas as notas: ', personTwo.sumGrades());
console.log('MÃŠdia de todas as notas: ', personTwo.calculaMedia());