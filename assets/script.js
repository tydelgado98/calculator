const results = document.getElementById('output');
const addBtn = document.querySelector("#add")
const subBtn = document.querySelector('#sub')
const numberBtn = document.querySelectorAll('#numbers .number-btn');
const equalBtn = document.querySelector('#equalbtn')

addBtn.onclick = addStuff;
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
   if(clickCount == 1) {
      results.innerText =""
   }

      currValue = parseInt(this.innerHTML)
      
       
       results.innerText += currValue
}

function addStuff () {
  num1 = parseInt(results.innerText)
  console.log(num1);
currentOperation = ("add")
results.innerText = "Click second number";

}

function subStuff() {

}

function equalStuff() {

   // to make it equal to the numbers that are clicked

   num2 = parseInt(results.innerText)
   let result;
   if (currentOperation === "add")  {
      result = num1 + num2
      
   }
   results.innerText = result
}




subBtn.onclick = subStuff;
equalBtn.onclick = equalStuff;



