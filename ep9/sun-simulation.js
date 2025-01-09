let house
let field
let cam

const camDistance = 400
const sunDistance = 100

let camX = 0
let camY = -100
let camZ = camDistance

let sunX = sunDistance;
let sunY = 0
let sunZ = 0

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(RADIANS)
  
  cam = createCamera()
  
  cam.setPosition(camX, camY, camZ)
  
  cam.lookAt(0, 0, 0)
  
  createGeometries()
}

function draw() {
  background(220);
  orbitControl()

  // Ważne by korzystać z wartośći wyrażonej w radianach jeśli chodzi o obliczenia trygonometryczne
  const sunRadians = frameCount * PI/180

  // sunDistance stanowi tutaj promień okręgu po którym się porusza względem osi Z
  sunX = sunDistance * cos(-sunRadians)
  sunY = sunDistance * sin(-sunRadians)
    
  pointLight(255, 255, 255, sunX, sunY, sunZ)
  
  model(house)
  model(field)
}

function createGeometries() {
  house = buildGeometry(() => {
    // Ściany
    push()
    fill('yellow')
    box(50)
    pop()
    
    // Dach
    push()
    fill('brown')
    translate(0, -50, 0)
    rotateY(PI/4)
    cone(50, -50, 5)
    pop()
  })
  
  field = buildGeometry(() => {
    push()
    fill('green')
    translate(0, 26, 0)
    box(200, 2, 200)
    pop()
  })
}