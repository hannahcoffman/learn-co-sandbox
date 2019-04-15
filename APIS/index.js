let myData = null 

fetch('https://api.github.com/users/hannahcoffman')
.then((data)=> {return data.json()})
.then((json) => {console.log(json)})

console.log('hi')

// JavaScript Object Notation 

// always the first then is going to be taking something and return the conversion of json 

// old syntax 
// function onFetch(){}
// asynchronous = a way to do multiple things at once and react to them whenever they finish 
// asynchronous is one at a time in order = how we write code previously 
// hands would be tied for any long operation/unknown duration 
