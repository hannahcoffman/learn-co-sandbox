// let red = document.createElement('div')
//red.innerHTML = 'red'
//red.style.backgroundColor = 'red'
//const colors = document.getElementById('colors')
//colors.appendChild(red)


function makeColorfulDiv(color) {
  let newDiv = document.createElement('div')
  newDiv.innerHTML = color
  newDiv.style.backgroundColor = color
  const colors = document.getElementById('colors')
  colors.appendChild(newDiv)
}

makeColorfulDiv('red')
makeColorfulDiv('orange')
makeColorfulDiv('yellow')
makeColorfulDiv('green')
makeColorfulDiv('blue')
makeColorfulDiv('indigo')
makeColorfulDiv('cadetblue')
makeColorfulDiv('mistyrose')
makeColorfulDiv('goldenrod')
