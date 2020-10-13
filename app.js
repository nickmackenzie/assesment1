// HTML SELECTORS //

let total = document.getElementById("total");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus")
let inputBox = document.getElementById("input-box")

// App State //
let initialValue = 0;

// Event Listeners //
plus.addEventListener('click', mathFunction)
minus.addEventListener('click', mathFunction)

// Main Function //
function mathFunction(e) {
    if (e.target.id === "plus" && initialValue >= 0) {
        initialValue = Number(initialValue) + Number(inputBox.value);
        total.innerText = initialValue
        total.style.color = "black"
    }
    if (e.target.id === "minus" && initialValue >= 0) {
        initialValue = Number(initialValue) - Number(inputBox.value);
        total.innerText = initialValue
        total.style.color = "black"
        console.log('minus')
    }
    if (e.target.id === "plus" && initialValue < 0) {
        initialValue = Number(initialValue) + Number(inputBox.value);
        total.innerText = initialValue
        total.style.color = "red"
    }
    if (e.target.id === "minus" && initialValue < 0) {
        initialValue = Number(initialValue) - Number(inputBox.value);
        total.innerText = initialValue
        total.style.color = "red"
    }
    if (initialValue >= 0) {
        total.style.color = "black"
    }
}