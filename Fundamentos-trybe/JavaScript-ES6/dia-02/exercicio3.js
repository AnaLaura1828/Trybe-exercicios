const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  //exercicio 1
  const addTurno = (object, key, value) => {
      object[key] = value;
  }
  addTurno(lesson2, 'turno', 'noite')

  //exercicio 2
  const listagem = (object) => Object.keys(object)
      console.log(listagem(lesson1));
  
      //exercicio 3 
      const tamanhoObj = (obj) => Object.keys(obj).length;
      console.log(tamanhoObj(lesson1));