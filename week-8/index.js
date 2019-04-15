// events always has two parts 
// 1. find the element that you need 
// you can skip step 1 if you want all the events on your page to be this 
// document.querySelector('#click-me')

const button = document.getElementById('click-me')

// 2. add the event listener to the thing you care about 
// tell it what kind of evene it is that we're listening for 
// what should be triggered when the event happens 
//document.addEventListener('click')
// add a function with name onclick 
//function onClick() {
// anonymous functions () => {} are good for functions you don't think you're going to reuse
// use console.log to debug 

button.addEventListener('click', () => {
console.log('hell ya')
})

const myArray = [4,5,6,7,8]


// non destructive - .slice() creates copy 

const myArrayCopy = .slice()
myArrayCopy.push(3) 


// destructive 
myArray.push(5)
myArray.push(10)

console.log(myArray[0])
console.log(myArray[myArray.length - 1])

// arrays start from zero so the index 2 will be 6 

// arrays - a grouping of variables = [] - related in a way to group them together as some type of list 
// pop - deletes from the end myArray.pop()
// push - adds to the end 
// shift - deletes from the beginning myArray.shift()
// unshift - adds to the beginning

