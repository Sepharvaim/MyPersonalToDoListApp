// DOM EXTRACTION    <<<<==================
let laData = new Date();
let hours = laData.getHours();
let minutes = laData.getMinutes();
let domData = document.querySelector('.data');

let option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
domData.innerText = laData.toLocaleDateString("it-US", option) + "    " + hours + ":" + minutes;


let textArea = document.querySelector('.inputField');
let buttonToAdd = document.querySelector('.buttonAdd');
let listOfTasks = document.querySelector('.listOfTasks');
let buttonComplete = document.querySelector('.complete');

// END DOM EXTRACTION <<<<====================

// VAR DECLARATION   
let removeSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>`
let completeSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>`
// ==============================


// LOCAL Storage
let data =  (localStorage.getItem('todolist')) ? JSON.parse(localStorage.getItem('todolist')) : {
  todo: [],
  completed: []
};

console.log(data);
renderTheLocalStore();


// $$$$$$$$$$$$$$$$$$$$    FUNCTION DEFINITION    $$$$$$$$$$$$$$$$$$

function addToLocalStore() {
  
// add to local data for localstorage
  data.todo.push(textArea.value);
  localStorage.setItem('todolist',JSON.stringify(data));
  
}
function renderTheLocalStore() {
  if (data.todo.length || data.completed.length) {
      for (let i = 0; i < data.todo.length; i++) {
      let value = data.todo[i];
      addingToListItem(value, false)
      
    }
    for (let j = 0; j< data.completed.length; j++) {
      let value = data.completed[j];
      addingToListItem(value, true);
      

      
    }
  }
  textArea.value = '';
}


// this.parentNode.setAttribute('style', "color: grey; text-decoration: line-through; background: none");
//   this.children[0].setAttribute('style', 'fill: grey; border: 1px solid rgba(105,105,105,0.5)');
//   this.previousSibling.children[0].setAttribute('style', 'fill: rgba(105,105,105,0.5');

// AGGIUNGE UN OGGETTO NELLA LISTA TRAMITE addEventListener
function addingToListItem(value, completed) {
  if (!value) {return;}
  
  let ulToSelect = (completed) ? document.querySelector('#completed') : document.querySelector('.listOfTasks');
  
  if (ulToSelect.id === 'completed') {
    let listItem = document.createElement('li');
    console.log(listItem)
    listItem.setAttribute('style', "color: grey; text-decoration: line-through; background: none");
    let paragraph = document.createElement('p');
    paragraph.innerText = value;
    
    
    let buttonRemove = document.createElement('button');
    buttonRemove.classList.add('remove');
    buttonRemove.innerHTML = removeSVG;
    buttonRemove.children[0].setAttribute('style', 'fill: rgba(105,105,105,0.5');
    
    let buttonComplete = document.createElement('button');
    buttonComplete.classList.add('complete');
    buttonComplete.innerHTML = completeSVG;
    buttonComplete.children[0].setAttribute('style', 'fill: grey; border: 1px solid rgba(105,105,105,0.5)');
    
    ulToSelect.appendChild(listItem);
    listItem.appendChild(paragraph);
    listItem.appendChild(buttonRemove);
    listItem.appendChild(buttonComplete);

  } else {
    let listItem = document.createElement('li');

    let paragraph = document.createElement('p');
    paragraph.innerText = value;
    
    
    let buttonRemove = document.createElement('button');
    buttonRemove.classList.add('remove');
    buttonRemove.innerHTML = removeSVG;
    
    let buttonComplete = document.createElement('button');
    buttonComplete.classList.add('complete');
    buttonComplete.innerHTML = completeSVG;
    
    ulToSelect.appendChild(listItem);
    listItem.appendChild(paragraph);
    listItem.appendChild(buttonRemove);
    listItem.appendChild(buttonComplete);
  }

  // add event listener for removing added here because do not exist any .remove class before this point 
  let clickRemove = document.querySelectorAll('.remove');
  clickRemove.forEach(button => button.addEventListener('click', deleteAnItem));

  let clickComplete = document.querySelectorAll('.complete');
  clickComplete.forEach(button => button.addEventListener('click', completeAnItem));
  textArea.value = '';
  
}

// REMOVE AN ITEM FOREVER
function deleteAnItem() { 
  let item = this.parentNode.parentNode;
  let id = item.id
  let value = this.previousSibling.innerText
  
  if ( id === 'todo') {
    data.todo.splice(data.todo.indexOf(value),1);
    localStorage.setItem('todolist',JSON.stringify(data));
  } else {
    console.log('hi')
    data.completed.splice(data.completed.indexOf(value),1);
    localStorage.setItem('todolist',JSON.stringify(data));
  }
  

  let liToRemove = this.parentNode;
  this.parentNode.parentNode.removeChild(liToRemove);

}

// FUNZIONE CHE SPOSTA I TASKS TRA LE DUE UL
function completeAnItem() {
  // se ul contiene completed sposta in non completa altrimenti sposta in completa 

  if (this.parentNode.parentNode.id==="completed") {
    
    
    let liToMove = this.parentNode;
    let otherUl = document.querySelector(".listOfTasks");
    otherUl.appendChild(liToMove);


    // ripristino svg colore 
    this.parentNode.setAttribute('style', "");
    this.children[0].setAttribute('style', '');
    this.previousSibling.children[0].setAttribute('style', '');  

    
    let value = this.previousSibling.previousSibling.innerText
    data.completed.splice(data.completed.indexOf(value), 1);
    data.todo.push(value);
    localStorage.setItem('todolist',JSON.stringify(data));
    
  } else {
    
  
  let liToMove = this.parentNode;
  let otherUl = document.querySelector('#completed');
  otherUl.appendChild(liToMove);
 

  
  // adding other css inline for render grey the button 
  this.parentNode.setAttribute('style', "color: grey; text-decoration: line-through; background: none");
  // console.log(this.parentNode)
  this.children[0].setAttribute('style', 'fill: grey; border: 1px solid rgba(105,105,105,0.5)');
  // console.log(this.children[0])
  this.previousSibling.children[0].setAttribute('style', 'fill: rgba(105,105,105,0.5');
  // console.log(this.previousSibling.children[0])
    // cancellaro dalla data todo e metterlo in data completed  peseudo code 
    
    let value = this.previousSibling.previousSibling.innerText
    data.todo.splice(data.todo.indexOf(value), 1);
    data.completed.push(value);
    localStorage.setItem('todolist',JSON.stringify(data));
  }
  

  
  

  // ricordarsi di ricalcolare i remove o complete altrimenti non event listener e attaccato a undefined

}
// $$$$$$$$$$$$$$$$$$$$  END FUNCTION DEFINITION $$$$$$$$$$$$$$$$$$$$$$$



buttonToAdd.addEventListener('click', addToLocalStore);
buttonToAdd.addEventListener('click', function() {
  addingToListItem(textArea.value);
});
