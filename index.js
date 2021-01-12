// Write your code here!

document.getElementById('main').remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
let body = document.querySelector('body')
body.appendChild(newHeader)
newHeader.innerHTML = 'Jake is the champion'