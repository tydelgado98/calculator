const results = document.getElementById('output');
const addBtn = document.querySelector("#add")
const subBtn = document.querySelector('#sub')
const numberBtn = document.querySelectorAll('#numbers .number-btn');

addBtn.onclick = addStuff;
let currValue = 0
let clickCount = 0
const buttonText = numberBtn.innerHTML


numberBtn.forEach(button => {
   button.addEventListener("click", handleClick )
   })

function handleClick() {
      currValue += parseInt(this.textContent)
       console.log(currValue);
       
       clickCount++;
       results.innerText = " "
       results.innerText += currValue


       if (clickCount === 1) {
         numberBtn.forEach(button => {
            button.removeEventListener("click", handleClick)
            addBtn.style.boxShadow = "5px 2px 5px red";
         })
       }
}

function addStuff () {
   
}

function subStuff() {
   results.innerText--
}

subBtn.onclick = subStuff;

















