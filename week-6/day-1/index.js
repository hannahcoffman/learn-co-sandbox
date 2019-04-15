//  Arrays && Objects 
// Arrays = series of data, list of data - start from 0 

// chats 
// data structures -- structure/make sense of your data 
// count from zero 

const messages = ["hi","hello","whats up"]
messages.push("heyy") // put things at the end
messages.pop() // pop will remove things at the end - don't have to add a (parameter)
console.log(messages[0])
messages.shift()
messages.unshift('yoooo')

// destructive method - changes the original 
// mutative method 
// 1. push - add to the end 
// 2. pop - removes from the end 
// 3. shift - will do the same thing as pop but in the front (remove from the beginning)
// 4. unshift - takes whatever you add in (paramter) and places it at the 
// 5. splice - add in middle 

// non-destructive methods
// non-mutative methods 
// 1. slice 

let messages = ["hi", "hello"," what's up"]
let messagesCopy = messages.slice()
messagesCopy.pop()

const anotherCopy = [...messages]

// spread operator (...) same as .slice() to make a copy 

// splice - Put something in the middle of an array 
let messages = 
messages.splice(number where you want to start, number insert element 0 to not remove)


// search array 
console.log(messages.indexOf('hello'))
if (messages.indexOf('hello') > -1 {
  else 
})

// Objects share metadata 
// keys & values 
// left: key right: value

const user = {
  name: 'Hannah' ,
  city: 'New York',
}

(user.name)
(user.city)

const moonsArray = [{},{},{}]

// destructively added a new key 
user['newKey'] = 'myValue'
//delete key destructively 
delete user['newKey']

// non-destructively delete and add 
const driversCopy = [...drivers]

const userCopy = {...user}
delete userCopy['email']

// old way object.assign({}, user)
