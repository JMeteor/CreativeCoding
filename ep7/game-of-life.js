let columnCount
let rowCount
const cellSize = 20

let currentCells = []
let nextCells = []

let maxAge = 5
let maxNeighboursCount = 2
let minNeighboursCount = 1

function setup() {
  createCanvas(720, 400);
  frameRate(1)
  
  columnCount = floor(width / cellSize)
  rowCount = floor(height / cellSize)
  
  for(let column = 0; column < columnCount; column++) {
    currentCells[column] = []
  }
  
  for(let column = 0; column < columnCount; column++) {
    nextCells[column] = []
  }
  
  generate()
}

function draw() {
  for (let column = 0; column < columnCount; column++) {
    for(let row = 0; row < rowCount; row++) {
      let cell = currentCells[column][row]
      
      fill(floor((maxAge - cell)/maxAge * 255))
      stroke(0)
      rect(column * cellSize, row * cellSize, cellSize, cellSize)
    }
  }
  
  nextDay()
}

function generate() {
  for (let column = 0; column < columnCount; column++) {
    for(let row = 0; row < rowCount; row++) {
      currentCells[column][row] = random([0, 1])
    }
  }
}

function nextDay() {
  for (let column = 0; column < columnCount; column++) {
    for(let row = 0; row < rowCount; row++) {
      const left = (column - 1 + columnCount) % columnCount
      const right = (column + 1) % columnCount
      const above = (row - 1 + rowCount) % rowCount
      const below = (row + 1) % rowCount
      
      let neighbours =
          min(currentCells[left][above], 1) +
          min(currentCells[column][above], 1) +
          min(currentCells[right][above], 1) +
          min(currentCells[left][row], 1) +
          min(currentCells[right][row], 1) +
          min(currentCells[left][below], 1) +
          min(currentCells[column][below], 1) +
          min(currentCells[right][below], 1)
      
      if(currentCells[column][row] >= 1) {
        if(neighbours < minNeighboursCount || neighbours > maxNeighboursCount) {
          nextCells[column][row] = 0
        } else {
          nextCells[column][row] = min(currentCells[column][row] + 1, maxAge)
        }
      } else {
        nextCells[column][row] = random([0, 1])
      }
      
      
    }
  }
  
  currentCells = nextCells
}