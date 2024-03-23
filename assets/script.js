const results = document.getElementById('output');
const addBtn = document.querySelector("#add")
const subBtn = document.querySelector('#sub')
const numberBtn = document.querySelectorAll('#numbers .number-btn');
const equalBtn = document.querySelector('#equalbtn')
const clearBtn = document.getElementById('clearbtn')

let currValue = 0
let num1 = 0
let num2 = 0
let clickCount = 0
let currentOperation = null; // To track the current operation



const buttonText = numberBtn.innerHTML


numberBtn.forEach(button => {
   
   button.addEventListener("click", handleClick )

   })

function handleClick() {
   if (results.innerText === "Click second number") {
      results.innerText = "";
  }
   clickCount++;
   if(results.innerText === "Click Below") {
      results.innerText =""
   }

      currValue = parseInt(this.innerHTML)
      
       
       results.innerText += currValue
}



const clearStuff = () => {
   results.innerText = "Click Below"
   currValue = 0;
}


function addStuff () {
  num1 = parseInt(results.innerText)
  console.log(num1);
currentOperation = ("add")
results.innerText = "Click second number";

}

function subStuff() {
   num1 = parseInt(results.innerText)
   console.log(num1);
 currentOperation = ("sub")
 results.innerText = "Click second number";
}

function equalStuff() {

   // to make it equal to the numbers that are clicked

   num2 = parseInt(results.innerText)
   console.log(num2);
   let result;
   if (currentOperation === "add")  {
      result = num1 + num2
      
   } else if (currentOperation === "sub") {
      result  = num1 - num2
   }
   results.innerText = result
   console.log(result);
}




addBtn.onclick = addStuff;
clearBtn.onclick = clearStuff;
subBtn.onclick = subStuff;
equalBtn.onclick = equalStuff;



