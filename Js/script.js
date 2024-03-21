const value = document.querySelector("#value")
const btnDesc = document.querySelector("#btnDesc")
const btnReset = document.querySelector("#btnReset")
const btnInc = document.querySelector("#btnInc")

// Initial(Başlangıç) Value
let count = 0; 

// Functions
function setValue() {
    value.textContent = count
}

function changeColor() {
    if(count < 0){
        value.style.color = "red"
    } else if (count > 0) {
        value.style.color = "green"
    } else {
        value.style.color = "black"
    }
}

function desc() {
    count--;
    setValue()
    changeColor()
}

function reset() {
    value.style.color = "#000000"
    count = 0;
    setValue()
    changeColor()
}

function inc() {
    value.style.color = "#3fff00"
    count++;
    setValue()
    changeColor()
}

btnDesc.addEventListener("click",desc)
btnInc.addEventListener("click",inc)
btnReset.addEventListener("click",reset)