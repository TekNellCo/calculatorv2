let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.screen');
let screenTwo = document.querySelector('.screentwo');
let operatorScreen = document.querySelector('.operator');
let operator = "";
let variable = "";


// EVENT LISTENER FOR EACH BUTTON ONSCREEN THAT INPUTS INTO calculatorInput()
buttons.forEach((b)=>{
    b.addEventListener('click',()=>{
        let input = b.dataset.input;
        calculatorInput(input)}
)})

// EVENT LISTENER FOR KEYBOARD THAT INPUTS INTO calculatorInput()'
document.addEventListener('keydown',(e)=>{
    calculatorInput(e.key)
})

// MAIN CALCULATOR FUNCTION THAT RECIEVES ALL INPUTS AND ACTS ACCORDINGLY
function calculatorInput(input){
    if(input === "/"){
        divide();
        variable = ""
   }else if( input === "*"){
        multiply();
        variable = ""
   }else if(input === "+"){
       addition();
       variable = ""
  }else if( input === "-"){
       subtraction();
       variable = ""
  }else if(input === 'CLEAR' || input === "ArrowDown"){
        clear();
        variable = ""
   }else if(input === 'BACKSPACE' || input === "ArrowLeft"){
       return backspace();
   }else if(input === 'OPPOSITE' || input === "ArrowRight"){
       return plusOrMinus();
   }else if (input === "=" || input === "Enter"){
        equal();
        variable = "";
   }else{return screen.textContent += input;}
}

// PUSHES SCREEN CONTENT TO SCREENTWO THEN CLEARS ONE AND ADDS THE OPERATOR TO OPERATOR SCREEN
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
// TURNS SCREEN STRING INTO AN ARRAY THEN REMOVES(POPS OFF) LAST DIGIT THEN JOINS IT BACK TO STRING
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
// EVALUATES ALL THE FUNCTIONS AND PUSHES EXPRESSION TO SCREENTWO THEN MAKES OPERATORS SCREEN "=" AND PLACES EVALUATED EXPRESSION IN SCREEN ONE
function equal(){
    let a = screenTwo.textContent;
    let b = screen.textContent;
    // clear() dont need?
    screenTwo.textContent = `${a}${operator}${b}`
    operatorScreen.textContent = "="
    if(operator === "/"){
        screen.textContent = `${a/b}`;
    }else if(operator === "*"){
        screen.textContent = `${a*b}`;
    }else if(operator === "+"){
        screen.textContent = parseInt(a)+parseInt(b);
    }else if(operator === "-"){
        screen.textContent = `${a-b}`;
    }else{}
}
