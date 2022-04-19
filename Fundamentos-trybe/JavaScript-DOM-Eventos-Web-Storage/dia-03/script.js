function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function days() {
      let daysList = document.getElementById("days");

      for(let index = 0; index < dezDaysList.length; index +=1) {
      let day = dezDaysList[index];
      let dayItem = document.createElement("li");

      if(day === 24 || day === 31) {
          dayItem.className = "day holiday"
          dayItem.innerHTML= day; 

          daysList.appendChild(dayItem);
      }else if (day === 4 || day === 11|| day === 18) {
          dayItem.className = "day friday";
          dayItem.innerHTML = day;
          daysList.appendChild(dayItem);
      }else if(day === 25) {
          dayItem.className = "day holiday friday";
          dayItem.innerHTML = day;
          daysList.appendChild(dayItem);
      }else {
          dayItem.innerHTML = day;
          dayItem.className = "day";
          daysList.appendChild(dayItem);
      }
      };
  };
  days();



//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function newButton(string) {
let button2 = document.querySelector(".buttons-container");
let buttonId ="btn-holiday";
let button1 = document.createElement("button");

button1.innerHTML = string;
button1.id = buttonId;
button2.appendChild(button1)

};

newButton("Feriados")


window.onload = function () {   //funcao anonima!!
    let mudaCor = document.querySelector("#btn-holiday");
    let classHoli = document.querySelectorAll(".holiday");
    let color = "yellow";
    let background = "rgb(238,238,238)";

    mudaCor.addEventListener("click", function() {
      console.log(classHoli)
    for(let index = 0; index < classHoli.length; index +=1) {
    if(classHoli[index].style.backgroundColor === color) {
       classHoli[index].style.backgroundColor =background;
    }else{
        classHoli[index].style.backgroundColor = color
}
}
    })
};
//window.onload = corClicklet

function buttonFriday(string) {
  let otherButtonId = "btn-friday";
  let daughterTag = document.querySelector(".buttons-container");
  let secondButton = document.createElement("button");

  secondButton.innerHTML = string;
  secondButton.id = otherButtonId;
  daughterTag.appendChild(secondButton)
}
buttonFriday("Sexta-Feira");



function clickButtonFriday(array) {
  let changeLetter = document.querySelector('#btn-friday');
  let daysFriday = document.getElementsByClassName('friday');
  let newFridayText = 'Sextoooou!!';

  changeLetter.addEventListener('click', function() {
  for (let index = 0; index < daysFriday.length; index += 1) {
    if (daysFriday[index].innerHTML !== newFridayText) {
        daysFriday[index].innerHTML = newFridayText;
    } else {
        daysFriday[index].innerHTML = array[index];
      }
    }
  })
};

let arrays = [ 4, 11, 18, 25 ];
clickButtonFriday(arrays);


function zoomNumber() {
  let days = document.getElementById("days")

  days.addEventListener("mouseover", function() {
  event.target.style.fontSize = "30px";
  event.target.style.fontWeigth = "500"
  })
};