// DOM EXTRACTION    <<<<==================

let textArea = document.querySelector('.inputField');
let buttonToAdd = document.querySelector('.buttonAdd');
let listOfTasks = document.querySelector('.listOfTasks');
let buttonComplete = document.querySelector('.complete');

// END DOM EXTRACTION <<<<====================



// VAR DECLARATION   
let removeSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>`
let completeSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>`
// ==============================


// $$$$$$$$$$$$$$$$$$$$    FUNCTION DEFINITION    $$$$$$$$$$$$$$$$$$
// AGGIUNGE UN OGGETTO NELLA LISTA TRAMITE addEventListener
function addingToListItem() {
  if (!textArea.value) {return;}
  let listItem = document.createElement('li');

  let paragraph = document.createElement('p');
  paragraph.innerText = textArea.value;
  
  let buttonRemove = document.createElement('button');
  buttonRemove.classList.add('remove');
  buttonRemove.innerHTML = removeSVG;
  
  let buttonComplete = document.createElement('button');
  buttonComplete.classList.add('complete');
  buttonComplete.innerHTML = completeSVG;
  
  listOfTasks.appendChild(listItem);
  listItem.appendChild(paragraph);
  listItem.appendChild(buttonRemove);
  listItem.appendChild(buttonComplete);
  // add event listener for removing added here because do not exist any .remove class before this point 
  let clickRemove = document.querySelectorAll('.remove');
  clickRemove.forEach(button => button.addEventListener('click', deleteAnItem));

  let clickComplete = document.querySelectorAll('.complete');
  clickComplete.forEach(button => button.addEventListener('click', completeAnItem));

  textArea.value = '';
}

// REMOVE AN ITEM FOREVER
function deleteAnItem() { 
  let liToRemove = this.parentNode;
  this.parentNode.parentNode.removeChild(liToRemove);
}

// FUNZIONE CHE SPOSTA I TASKS TRA LE DUE UL
function completeAnItem() {
  // se ul contiene completed sposta in non completa altrimenti sposta in completa 
  if (this.parentNode.parentNode.id==="completed") {
    console.log('maramao')
    
    let liToMove = this.parentNode;
    let otherUl = document.querySelector(".listOfTasks");
    otherUl.appendChild(liToMove);


    // ripristino svg colore 
    this.parentNode.setAttribute('style', "");
    this.children[0].setAttribute('style', '');
    this.previousSibling.children[0].setAttribute('style', '');  
  } else {
    
  
  let liToMove = this.parentNode;
  let otherUl = document.querySelector('#completed');
  otherUl.appendChild(liToMove);
  
  // adding other css inline for render grey the button 
  this.parentNode.setAttribute('style', "color: grey; text-decoration: line-through; background: none");
  this.children[0].setAttribute('style', 'fill: grey; border: 1px solid rgba(105,105,105,0.5)');
  this.previousSibling.children[0].setAttribute('style', 'fill: rgba(105,105,105,0.5');
  }
  

  
  

  // ricordarsi di ricalcolare i remove o complete altrimenti non event listener e attaccato a undefined

}
// $$$$$$$$$$$$$$$$$$$$  END FUNCTION DEFINITION $$$$$$$$$$$$$$$$$$$$$$$



buttonToAdd.addEventListener('click', addingToListItem);

