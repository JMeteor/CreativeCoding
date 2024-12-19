let columnCount
let rowCount
const cellSize = 20

let currentCells = []
let nextCells = []

let maxAge = 5
let maxNCount = 2
let minNCount = 1

let cells = []
let maxCells = 10

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
  // Rysowanie pól
  for (let column = 0; column < columnCount; column++) {
    for(let row = 0; row < rowCount; row++) {
      fill(255)
      stroke(0)
      rect(column * cellSize, row * cellSize, cellSize, cellSize)
    }
  }
  
  // Rysowanie komórek
  for(let index = 0; index < cells.length; index++) {
    let cell = cells[index]
    
    fill(floor((maxAge - cell.age)/maxAge * 255))
    stroke(0)
    rect(cell.column * cellSize, cell.row * cellSize, cellSize, cellSize)
  }
  
  nextDay()
}

function generate() {
  for (let column = 0; column < columnCount; column++) {
    for(let row = 0; row < rowCount; row++) {
      if(cells.length === maxCells) {
        return
      }
        
      const isLife = random([0, 1])
      
      if(isLife) {
        cells.push({
          column: column,
          row: row,
          age: 1
        })
      }
    }
  }
}

function nextDay() {
  for (let index = 0; index < cells.length; index++) {
    let cell = cells[index]
    
    move(cell)
  }
}

function move(currentCell) {
  const newColumn = min(max(currentCell.column + random([-1, 0, 1]), 0), columnCount - 1)
  const newRow = min(max(currentCell.row + random([-1, 0, 1]), 0), rowCount - 1)
  
  let canMove = true
  
  for (let index = 0; index < cells.length; index++) {
    let cell = cells[index]
    
    if(currentCell !== cell) {
      if(cell.column === newColumn && cell.row === newRow) {
        canMove = false
      }
    }
  }

  if(canMove) {
    currentCell.column = newColumn
    currentCell.row = newRow
  }
  
}