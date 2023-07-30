let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.screen');



// GRABS EACH BUTTON AND INPUTS IT INTO THE SCREEN DIV NOT INCLUDING IF BUTTONS
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let inputText = button.dataset.input;
        if(inputText === 'CLEAR'){
            return clear()
        }else if(inputText === 'BACKSPACE'){
            return backspace()
        }else if(inputText === 'OPPOSITE'){
            return opposite()
        }else{return screen.textContent += inputText;}
    })
})


// ERASES TEXT IN SCREEN DIV
function clear(){
    screen.textContent = ""
}

// TURNS SCREEN TEXT INTO AN ARRAY THEN POPS OFF END THEN JOINS IT BACK
function backspace(){
   let yo = Array.from(screen.textContent);
   yo.pop();
   screen.textContent = yo.join("");
  
}
