const count = document.getElementById('count')
const add = document.getElementById('plus')
const subtract = document.getElementById('minus')
console.log(count, add, subtract)
add.addEventListener('click', () => {
    count.innerText = parseInt(count.innerText) + 1
})

subtract.addEventListener('click', () => {
    count.innerText = parseInt(count.innerText) - 1
})

// function add() {
//     count.innerText = parseInt(count.innerText) + 1
// }

// function subtract() {
//     count.innerText = parseInt(count.innerText) - 1
// }