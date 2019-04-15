const subtract = document.getElementById('subtract')
const add = document.getElementById('add')
const total = document.getElementById('total')

subtract.addEventListener('click', () => {
  const currentNumber = total.innerHTML
  if (currentNumber >= 1) {
    const newNumber = currentNumber -1 
    total.innerHTML = newNumber 
  } 
})

add.addEventListener('click', () => {
  const currentNumber = parseInt(total.innerHTML)
  const newNumber = currentNumber +1
  total.innerHTML = newNumber
})