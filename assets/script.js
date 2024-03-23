const results = document.getElementById('output');
const addBtn = document.querySelector("#add")
const subBtn = document.querySelector('#sub')
const numberBtn = document.querySelectorAll('#numbers .number-btn');

addBtn.onclick = addStuff;
let currValue = 0

const buttonText = numberBtn.innerHTML


numberBtn.forEach(button => {
   button.addEventListener("click", () => {
     currValue += parseInt(button.textContent)
      console.log(currValue);
      results.innerText = " "
      results.innerText += currValue
   })
})

let x = numberBtn
let y = numberBtn

function addStuff () {
   
}

function subStuff() {
   results.innerText--
}

subBtn.onclick = subStuff;

















