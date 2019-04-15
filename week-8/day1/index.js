fetch('https://api.github.com/users/hannahcoffman')
.then((data) => data.json())
.then(dataJson => console.log(dataJson))

// async aka asynchronous programming 
// non-blocking programming 
