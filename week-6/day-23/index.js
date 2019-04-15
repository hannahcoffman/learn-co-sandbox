// <div>red</div>
// <div>orange</div>

function makeColorfulDiv(color) {
  // 1. make a div

// red = <div></div>
// 2. <div>red</div>
// OR is || 
// AND is && 

let newDiv = document.createElement('div')

if (color === 'red' || color === 'orange') {
  newDiv.innerHTML = color + ' color'
} else {
  newDiv.innerHTML = color
}

// 3. div's background color is red
// <div style="background-color: red">
newDiv.style.backgroundColor = color
// 4. <div id="colors"> <div> red </div> </div>

// 1. find #colors div
const colors = document.getElementById('colors')
// 2. Append the child to the #colors div
colors.appendChild(newDiv)
}


makeColorfulDiv('red')
makeColorfulDiv('orange')
makeColorfulDiv('yellow')
makeColorfulDiv('green')
makeColorfulDiv('blue')
makeColorfulDiv('indigo')
makeColorfulDiv('purple')
makeColorfulDiv('cadetblue')
makeColorfulDiv('mistyrose')
makeColorfulDiv('goldenrod')

// function 
// return is the 'equals' of the function 


// perameters are between parentheses 
function addPercentage(discount1) {
  discount1 + '%'
}

addPercentage(50)
addPercentage(30)
addPercentage(10)