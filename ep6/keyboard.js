let osc;

let currentNote = 0;
let tempo = 120

let myFreq = 264; // C

let keyWidth = 400/8

// Array of frequencies in C Major.
let frequencies = [
  myFreq, // C
  myFreq * 9/8, // D
  myFreq * 5/4, // E
  myFreq * 4/3, // F
  myFreq * 3/2, // G
  myFreq * 5/3, // A
  myFreq * 15/8, // H
  myFreq * 2 // C
];

let notes = []
let melody = []

let tempoInput;

// p5.js events:

function setup() {
  createCanvas(400, 400);
  
  frequencies.forEach(freq => {
    notes.push(new p5.Oscillator(freq))
  })
  
  melodyButton()
  melodyReset()
  createTempoInput()
}

function draw() {
  background(220);
  drawKeyboard()
}

function mousePressed() {
  playKey()
}

function mouseReleased() {
  stopNote(currentNote)
}

// Keyboard:

function playNote(index) {
  notes[index].start()
}

function stopNote(index) {
  notes[index].stop()
}

function playMelody(index) {
  if(index < melody.length) {
    notes[melody[index]].start()
  
    setTimeout(() => {
      notes[melody[index]].stop()
      currentNote++
      playMelody(currentNote)
    }, 60 / tempo * 1000)
  } else {
    currentNote = 0
  }
}

function drawKey(noteIndex) {
  let x = noteIndex * keyWidth
  let y = keyWidth * 3
  
  rect(x, y, keyWidth, keyWidth*2, 10)
}

function drawKeyboard() {
  notes.forEach((note, index) => {
    if(note.started) {
      fill(255, 0, 0)
    } else {
      fill(255, 255, 255)
    }
    drawKey(index)
  })
}

function playKey() {
  for(let i = 0; i < notes.length; i++) {
    
    let x = i * keyWidth;
    let y = keyWidth * 3
    
    if(mouseX > x && mouseX < x + keyWidth && mouseY > y && mouseY < y + keyWidth * 2) {
      stopNote(currentNote)
      currentNote = i;
      melody.push(i)
      playNote(currentNote)
    }
  }
}

function melodyButton() {
  let button = createButton("Play melody")
  button.mouseClicked(() => {
    currentNote = 0
    playMelody(currentNote)
  })
  button.position(300, 300)
}

function melodyReset() {
   let button = createButton("Reset melody")
  button.mouseClicked(() => {
    melody = []
  })
  button.position(200, 300)
}

function createTempoInput() {
  tempoInput = createInput(tempo.toString())
  tempoInput.position(90, 300)
  tempoInput.size(100)
  tempoInput.changed(setTempo)
}

function setTempo() {
  tempo = tempoInput.value()
}