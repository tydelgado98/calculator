const results = document.getElementById('output');
const addBtn = document.querySelector("#add")
const subBtn = document.querySelector('#sub')
const numberBtn = document.querySelectorAll('#numbers .number-btn');

addBtn.onclick = addStuff;




numberBtn.forEach(button => {
   button.addEventListener("click", () => {
      console.log("btn clicked is " + button.textContent);
   })
})


let x = numberBtn
let y = numberBtn

function addStuff () {
   results.innerText++
}

function subStuff() {
   results.innerText--
}

subBtn.onclick = subStuff;

















