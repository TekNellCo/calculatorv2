let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.screen');
let screenTwo = document.querySelector('.screentwo');
let operatorScreen = document.querySelector('.operator');
let operator = "";
let variable = "";

// GRABS EACH BUTTON AND INPUTS IT INTO THE SCREEN DIV NOT INCLUDING IF BUTTONS. RESETS +/- TO EMPTY
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let inputText = button.dataset.input;
        if(inputText === "/"){
             divide();
             variable = ""
        }else if( inputText === "*"){
             multiply();
             variable = ""
        }else if(inputText === "+"){
            addition();
            variable = ""
       }else if( inputText === "-"){
            subtraction();
            variable = ""
       }else if(inputText === 'CLEAR'){
             clear();
             variable = ""
        }else if(inputText === 'BACKSPACE'){
            return backspace();
        }else if(inputText === 'OPPOSITE'){
            return plusOrMinus();
        }else if (inputText === "="){
             equal();
             variable = ""
        }else{return screen.textContent += inputText;}
    })
})
// PUSHES SCREEN ONE TO TWO THEN CLEARS IT AND ADDS THE OPERATOR
function divide(){
    screenTwo.textContent += screen.textContent;
    screen.textContent = "";
    operatorScreen.textContent = "/";
    return operator = "/"
}
// SAME AS DIVIDE
function multiply(){
    screenTwo.textContent += screen.textContent;
    screen.textContent = "";
    operatorScreen.textContent = "*";
    return operator = "*"
}
// SAME AS DIVIDE
function addition(){
    screenTwo.textContent += screen.textContent;
    screen.textContent = "";
    operatorScreen.textContent = "+";
    return operator = "+"
}
// SAME AS DIVIDE
function subtraction(){
    screenTwo.textContent += screen.textContent;
    screen.textContent = "";
    operatorScreen.textContent = "-";
    return operator = "-"
}
// ERASES TEXT ON ALL SCREEN DIVS
function clear(){
    screen.textContent = "";
    screenTwo.textContent = "";
    operatorScreen.textContent = "";
}
// TURNS SCREEN STRING INTO AN ARRAY THEN POPS OFF END THEN JOINS IT BACK
function backspace(){
   let yo = Array.from(screen.textContent);
   yo.pop();
   screen.textContent = yo.join("");
}
// PLUS OR MINUS BUTTON// ADDS "-" TO SCREEN STRING. IF ALREADY IS NEGATIVE DOES THE SAME AS backspace() BUT uses shift() INSTEAD;
function plusOrMinus(){
    if(variable === ""){
       variable = "-" 
       screen.textContent = variable + screen.textContent
    }else if(variable === "-"){
        let yo = Array.from(screen.textContent);
        yo.shift();
        screen.textContent = yo.join("");
        variable = "";
    }else{}
}
// EVALUATES ALL THE FUNCTIONS
function equal(){
    let a = screenTwo.textContent;
    let b = screen.textContent;

    if(operator === "/"){
        console.log(a/b);
    }else if(operator === "*"){
        console.log(a*b);
    }else if(operator === "+"){
        console.log(parseInt(a)+parseInt(b));
    }else if(operator === "-"){
        console.log(a-b);
    }else{}
}
