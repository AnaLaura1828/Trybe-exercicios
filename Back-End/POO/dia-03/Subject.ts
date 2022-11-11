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