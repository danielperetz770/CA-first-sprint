'use strict'

// get Random integer variations
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRndIntExcMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//colors

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  var color = '#'

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

