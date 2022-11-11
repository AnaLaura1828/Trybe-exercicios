import Person from "./exercicio1";
import Student from "./exercicio2";
import Employee from "./exercicio3";
import Subject from "./exercicio4";

const person1 = new Person('Ana Laura', new Date('2002/04/28'));
const person2 = new Person('Guilherme', new Date('2002/01/06'));
const person3 = new Person('Adriana', new Date('1994/04/18'));
console.log(person1);
console.log(person2);
console.log(person3);

// ---------------------------------------------------------------------------------//

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const isabelly = new Student('Isabelly Costa', new Date('1995/02/29'));

carolina.examsGrades = [25, 30, 10, 15];
carolina.worksGrades = [25, 30];
isabelly.examsGrades = [25, 10, 22, 15];
isabelly.worksGrades = [22, 15];
console.log(carolina);
console.log(isabelly);

//-------------------------------------//
const interfaceEmployee: Employee = {
    registration: 'FNC1234567891011',
    salary: 1500.00,
    admissionDate: new Date(),

    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `STU${randomStr}`;
    }
}
console.log(interfaceEmployee);

//-------------------------------------//

const materia1 = new Subject('Matemática');
console.log(materia1);


