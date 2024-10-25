# Rozwiązanie Pracy domowej - Piłka

```javascript
let speed = 3;
let radius = 100;
let x = radius/2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0)
  stroke(255);
  strokeWeight(5)
  noFill();
  ellipse(x, 200, radius)


  if (x > width - radius/2 || x  < radius/2) {
    speed = speed * -1;
  }

  x += speed;
}
```

# Pętle

W programowaniu pętle to instrukcje pozwalające na wielokrotne wykonywanie danego fragmentu kodu. W JavaScript, podobnie jak w wielu innych językach programowania, mamy do dyspozycji różne rodzaje pętli, z których najpopularniejsze to pętla `while()` oraz `for()`. W bibliotece p5.js często używamy tych pętli do tworzenia dynamicznych i interaktywnych grafik.

Omówimy dwie główne pętle:

- **Pętla `while()`** – używana, gdy nie wiemy dokładnie ile razy pętla ma się wykonać, ale mamy pewien warunek logiczny, który musi zostać spełniony.
- **Pętla `for()`** – bardziej przewidywalna i z góry określona, świetnie nadająca się do wykonywania powtarzalnych operacji określoną liczbę razy.

**Przykład: Dlaczego potrzebujemy pętli**
```javascript
function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  ellipse(0, 200, 25, 25);
  ellipse(50, 200, 25, 25);
  ellipse(100, 200, 25, 25);
  ellipse(150, 200, 25, 25);
  ellipse(200, 200, 25, 25);
  ellipse(250, 200, 25, 25);
}
```

Każda z elips rysowana jest poprzez pojedyncze wywołanie funkcji `ellipse()`. Nie jest to błędny zapis, jeżeli potrzebujemy 6 elips, możemy tak to sobie napisać. Ale co jeżeli potrzebujemy tych elips 60 albo 600, albo chcemy wykonać na nich szereg instrukcji? Nie będziemy pisać tego dla każdej z nich. Do takich zadań służą właśnie pętle.

```javascript
function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for (let i = 0; i < 6; i++) {
    ellipse(i * 50, 200, 25, 25);
  }
}
```

## Pętla `for()`

**Pętla `for()`** – bardziej przewidywalna i z góry określona, świetnie nadająca się do wykonywania powtarzalnych operacji określoną liczbę razy. Składa się z trzech elementów: inicjalizacji, warunku oraz inkrementacji.

```javascript
for (inicjalizacja; warunek; inkrementacja) {
```

Przykład:
```javascript
let x = 100;
let r = 10;

function setup() {
  createCanvas(600, 400);
  background(0);
  noStroke();
  
  fill(255,255,255, 100)

  for (let i = 0; i < 10; i++) {
    ellipse(x, height/2, r);
    x += 30;
    r += 30
  }
}
```

## Pętla `while()`

**Pętla `while()`** – używana, gdy nie wiemy dokładnie ile razy pętla ma się wykonać, ale mamy pewien warunek logiczny (boolean), który musi zostać spełniony.

```javascript
while(warunek)
```

**Przykład**
Załóżmy, że chcemy, aby program rysował okręgi dopóki promień okręgu będzie mniejszy od 100.
```javascript
let x = 100;
let r = 10;

function setup() {
  createCanvas(600, 400);
  background(0);
  noStroke();
  
  fill(255,255,255, 20)

  while (r < 100) {
    ellipse(x, height/2, r * 2);
    r += 10;
    x += 10;
  }
}
```

---

**Kiedy używać while?**
- Gdy liczba iteracji nie jest z góry znana i zależy od zmieniającego się warunku.
- Gdy warunek jest dynamiczny (np. wynik obliczeń, wprowadzenie przez użytkownika itp.).

Trzeba uważać, aby nie stworzyć pętli nieskończonej (infinite loop). Może to się zdarzyć, jeśli warunek nigdy nie przestanie być prawdziwy, np. zapomnienie o modyfikacji zmiennej kontrolnej.

```javascript
let x = 100;  
let r = 10;  
let isPressed = false;  
  
function setup() {  
  createCanvas(600, 400);  
  background(0);  
  noStroke();  
  fill(255, 255, 255, 20);  
}  
  
function draw() {  
  while (!isPressed) { // Adjust the condition as needed  
    ellipse(x, height / 2, r * 2);  
    r += 10;  
    x += 10;  
  }  
}  
  
function mousePressed() {  
  isPressed = true;  
}
```


## Zagnieżdżone pętle

**Zagnieżdżone pętle (ang. _nested loops_)** to pętle umieszczone wewnątrz innych pętli. Oznacza to, że jedna pętla działa w ramach drugiej, co pozwala na iterowanie po wielowymiarowych strukturach danych, takich jak tablice dwuwymiarowe lub siatki (ang. grids).

Najczęściej zagnieżdżone pętle są używane do iterowania po danych w dwóch wymiarach, np. wierszach i kolumnach, jak w przypadku siatki kwadratów. Każda iteracja pętli zewnętrznej wykonuje całą pętlę wewnętrzną.

```javascript
for (let y = 0; y < 5; y++) { // pętla zewnętrzna
  for (let x = 0; x < 5; x++) { // pętla wewnętrzna
    console.log("x: " + x + ", y: " + y);
  }
}
```

Pętla w funkcji `draw()` pozwala na dynamiczne, ciągłe wykonywanie kodu, co jest kluczowe dla animacji w p5.js. Użycie zarówno pętli `for()`, jak i `while()` w może dać ciekawe efekty.

**Przykład: Kolorowa siatka kwadratów**

```javascript
function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(10)
}

function draw() {
  background(0);
  
  let gridSize = 40;
  
  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      // Pętla while() losowo zmienia kolor kwadratu
      let r, g, b;
      r = random(255);
      g = random(255);
      b = random(255);
      
      while (r + g + b < 200) {
        // Zmieniamy kolor, jeśli suma wartości RGB jest zbyt ciemna
        r = random(255);
        g = random(255);
        b = random(255);
      }
      
      fill(r, g, b);
      rect(x, y, gridSize, gridSize);
    }
  }
}
```

**Wyjaśnienie**
- Pętla `for()` jest używana do iteracji po współrzędnych X i Y, aby stworzyć siatkę kwadratów.
- Pętla `while()` w każdym kwadracie losuje kolor, sprawdzając, czy nie jest zbyt ciemny (sumę wartości RGB), aby uzyskać bardziej żywe kolory.
- Siatka kwadratów zmienia kolory w każdej klatce, co daje efekt migotania i ciągłego zmieniania się układu.

---
## Pętla `for...of`

Pętla `for...of` w JavaScript to prosty sposób, by przechodzić przez elementy w tablicy. W przeciwieństwie do zwykłej pętli `for`, gdzie musisz śledzić indeksy, `for...of` automatycznie pobiera każdy element jeden po drugim, co czyni ją prostszą w użyciu.

```javascript
for (let item of items) {
  // Operacje na item
}
```

**Przykład**
```javascript
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let x = 50;
  let y = 50;
  
  for (const color of colors) {
    fill(color);
    rect(x, y, 50, 50);
    x += 60; // Przesuwamy prostokąt w prawo
  }
}

```
- W tym przykładzie mamy tablicę `colors`, która zawiera nazwy kolorów.
- Pętla `for...of` iteruje przez każdy kolor w tablicy, używając go do wypełnienia prostokątów na ekranie.
- Zmienna `color` przyjmuje wartość każdego koloru z tablicy w każdej iteracji, co pozwala na łatwe i czytelne przetwarzanie elementów.

**Zalety**
- **Czytelność**: Kod jest bardziej zrozumiały i zwięzły.
- **Brak potrzeby indeksowania**: Nie trzeba ręcznie zarządzać indeksami, co zmniejsza ryzyko błędów.
- **Obsługuje różne typy obiektów iterable**: Może być używana do iteracji nie tylko po tablicach, ale także po ciągach tekstowych, mapach, zbiorach itp.

[Wiecej o for...of ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

---

# Funkcje

Funkcje są jednym z kluczowych elementów w JavaScript. Pozwalają na organizowanie kodu w moduły, które można wielokrotnie wywoływać, co zwiększa przejrzystość i reużywalność (sic!) kodu.

W kontekście p5.js funkcje pozwalają nam definiować logikę rysowania, reagowania na zdarzenia i tworzenia bardziej złożonych aplikacji interaktywnych.

W JavaScript funkcje mogą być definiowane na kilka sposobów.

**Funkcje deklarowane** (function declaration):
```javascript
function nazwaFunkcji(parametry) {
  // ciało funkcji
}
```

**Funkcje wyrażeniowe** (function expression):
```javascript
const nazwaFunkcji = function(parametry) {
  // ciało funkcji
}
```

**Funkcje strzałkowe** (arrow function):
```javascript
const nazwaFunkcji = (parametry) => {
  // ciało funkcji
}
```

**Funkcje wyrażeniowe** i **funkcje strzałkowe** są nowoczesnymi i bardziej zwięzłymi sposobami definiowania funkcji. Dla wygody w p5.js skupimy się na sposobie deklaratywnym.

---
## Podnoszenie deklaracji

Podnoszenie deklaracji (ang. **Hoisting**) to mechanizm w JavaScript, w którym deklaracje zmiennych i funkcji są „przenoszone” na początek swojego zakresu podczas kompilacji. Oznacza to, że funkcje deklarowane za pomocą `function` można wywołać nawet przed ich faktyczną deklaracją w kodzie.

```javascript
suma(5, 10); // działa poprawnie, zwraca 15

function suma(a, b) {
  return a + b;
}
```

Dla funkcji wyrażeniowych hoisting nie działa w ten sam sposób. Jeśli próbujemy wywołać funkcję przed jej deklaracją w formie wyrażenia lub funkcji strzałkowej, pojawi się błąd.

```javascript
let a = 10;
let b = 5;

sum(5, 10); // Błąd: Cannot access 'suma' before initialization
difference(a, b) // Błąd: Cannot access 'difference' before initialization
testPrint(a ,b);

let sum = function(a, b) {
  return a + b;
};

let difference = (a, b) => {
  return a - b;
}

function testPrint(a, b) {
  console.log(a, b)
}
```

---
## Funkcje jako pierwszorzędne obiekty (First-Class Objects)

W JavaScript funkcje są tzw. **first-class objects**, co oznacza, że można traktować je jak zwykłe dane. Wyobraźmy sobie, że funkcje w JavaScript są jak przedmioty, którymi możemy się posługiwać tak, jak liczbami, tekstami czy innymi typami danych.
- Można je przypisywać do zmiennych.
- Można je przekazywać jako argumenty do innych funkcji.
- Można zwracać funkcje z innych funkcji.

```javascript
function doOperation(operation, a, b) {
  return operation(a, b);
}

const sum = (a, b) => a + b;

const result = doOperation(sum, 5, 3);

console.log(result); // wynik: 8

```

Funkcja `doOperation` przyjmuje inną funkcję jako argument i wywołuje ją. To daje nam ogromne możliwości w zakresie programowania funkcyjnego.

**Przykład**: Dynamiczna Siatka Kół
```javascript
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255);
  
  let numCols = 10;
  let numRows = 10;
  
  let colWidth = width / numCols;
  let rowHeight = height / numRows;
  
  // Tworzymy siatkę
  createGrid(numCols, numRows, (x, y) => {
    let size = map(sin(frameCount * 0.1 + x * 0.5 + y * 0.5), -1, 1, 10, 40);
    let col = map(cos(frameCount * 0.05 + x * 0.3), -1, 1, 100, 255);
    
    fill(col, 150, 200);
    ellipse(x * colWidth + colWidth / 2, y * rowHeight + rowHeight / 2, size);
  });
}

// Funkcja wyższego rzędu do generowania siatki
function createGrid(cols, rows, callback) {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      callback(x, y);
    }
  }
}

```

Wyjaśnienie
- W funkcji `draw()` rysujemy siatkę kółek (10x10). Zamiast ręcznie ustawiać ich właściwości, używamy **funkcji wyższego rzędu** – `createGrid()`, aby generować pozycje kółek i przekazać funkcję anonimową do definiowania ich wyglądu.
- Funkcja `createGrid()` - Ta funkcja jest funkcją wyższego rzędu, ponieważ przyjmuje funkcję jako argument (`callback`). Iteruje przez współrzędne siatki i wywołuje przekazaną funkcję dla każdej pozycji (każdego kółka). Pozwala to na łatwe modyfikowanie wyglądu kółek bez zmieniania logiki samego tworzenia siatki.
- Funkcja anonimowa `(x, y) => { ... }`
  - Zamiast tworzyć osobną funkcję, do `createGrid()` przekazujemy **funkcję anonimową** jako argument. Ta funkcja kontroluje rozmiar i kolor kółka.
  - Używamy tu funkcji `sin()` i `cos()` w połączeniu z `frameCount`, aby dynamicznie zmieniać rozmiar i kolor kółek w zależności od czasu (efekt animacji).
  - Funkcja `map()` przekształca wartości zwracane przez `sin()` i `cos()` na odpowiednie rozmiary i kolory, które pasują do naszych potrzeb (np. zmiana rozmiaru od 10 do 40 pikseli).

---

## Rekurencja

**Rekurencja** to potężna technika programistyczna, w której funkcja wywołuje samą siebie. Jest szczególnie przydatna w algorytmach, które można podzielić na mniejsze, powtarzające się podproblemy, jak np. obliczanie silni czy przeszukiwanie drzewa (binary Search).

W p5.js rekurencja jest często używana do tworzenia złożonych wzorów graficznych, takich jak fraktale, drzewa czy spirale. Jest szczególnie przydatna, gdy chcemy tworzyć wielopoziomowe struktury, które powtarzają pewne wzory w różnych skalach.

**Przykład: Fraktalne Drzewo**

W tym programie rysujemy "fraktalne" drzewo, które ma właściwość samopodobieństwa. Każda gałąź drzewa składa się z dwóch mniejszych gałęzi, które same w sobie też mają mniejsze gałęzie, aż do momentu, gdy osiągniemy minimalną długość gałęzi (w tym przypadku 4).

Fraktal - to obiekt, którego fragment w powiększeniu wygląda podobnie jak całość

```javascript
let angle = 0;
let lengthFactor = 0; // Parametr do kontrolowania animacji wzrostu drzewa

function setup() {
  createCanvas(400, 400);
  angle = PI / 4; // Startowy kąt (45 stopni)
  frameRate(30);  // Ustawienie prędkości animacji
}


function draw() {
  background(255);
  stroke(0);
  
  angle = map(mouseX, 0, width, PI / 12, PI / 4); // kąt od 15 do 45 stopni
  
  // Rysowanie drzewa
  translate(width / 2, height);
  branch(100);
}

function branch(length) {
  line(0, 0, 0, -length);
  translate(0, -length);
  
  if (length > 4) {
    push();
    rotate(angle); // Dynamicznie zmieniany kąt
    branch(length * 0.67);
    pop();
    
    push();
    rotate(-angle); // Dynamicznie zmieniany kąt
    branch(length * 0.67);
    pop();
  }
}
```

Wyjaśnienie

- **Funkcja `branch()`**
  - `line()` rysuje pojedynczą linię reprezentującą gałąź drzewa, a następnie wywołuje samą siebie, tworząc mniejsze odgałęzienia.
  - Używamy funkcji `translate()`, aby zmienić punkt początkowy dla następnej gałęzi (przesunięcie do końca aktualnej gałęzi).
  - `rotate()` obraca układ współrzędnych, co pozwala na rysowanie gałęzi pod odpowiednim kątem (w tym przypadku ±30 stopni).
  - Funkcja kontynuuje rekurencję tak długo, jak długość gałęzi (`length`) jest większa niż pewna minimalna wartość (tutaj 4 piksele), co zapobiega nieskończonemu rozgałęzianiu.
- **Zastosowanie rekurencji:**
  - Kluczową częścią tego przykładu jest to, że funkcja `branch()` wywołuje samą siebie dwukrotnie: raz dla lewego odgałęzienia, a raz dla prawego.
  - Za każdym razem, gdy funkcja jest wywoływana, długość gałęzi jest zmniejszana (`length * 0.67`), co powoduje, że kolejne odgałęzienia są coraz mniejsze.
- **Struktura drzewa:**
  - Drzewo jest tworzone od dołu do góry, zaczynając od głównego pnia. Każda gałąź rozgałęzia się na dwie mniejsze, co prowadzi do powstawania coraz mniejszych gałęzi, tworząc strukturę przypominającą naturalne drzewo.
  - Dwie funkcje `push()` i `pop()` służą do zapisywania i przywracania macierzy transformacji, co zapobiega nałożeniu się transformacji obrotu między odgałęzieniami.

---
## Zakres zmiennych w funkcji (Scope)

Zmienna w funkcji istnieje tylko w jej **lokalnym zakresie**. Oznacza to, że zmienne zadeklarowane w funkcji nie są dostępne na zewnątrz.

```javascript
function przyklad() {
  let lokalnaZmienna = 10;
}

console.log(lokalnaZmienna); // Błąd, zmienna nie jest dostępna poza funkcją
```

Istnieją jednak **zmienne globalne**, które są dostępne w całym programie, jeśli zostaną zadeklarowane poza funkcją.

## Rodzaje funkcji

Funkcje mogą być klasyfikowane na dwie główne kategorie: **funkcje typu `void`** oraz **funkcje, które zwracają wartość**. Różnica między nimi polega na tym, co robią po zakończeniu swojego działania.

### Funkcja typu `void`

Funkcje te **nie zwracają żadnej wartości** po zakończeniu swojego działania. Służą głównie do wykonywania zadań, które nie wymagają zwrócenia żadnej informacji, np. rysowanie elementów na ekranie, zmiana stanu programu.

```javascript
function drawCircle(x, y, r) {
  ellipse(x, y, r, r);  // Rysowanie okręgu, bez zwracania wartości
}
```

### Funkcja zwracająca wartość

Funkcje te **zwracają wartość** (np. liczbę, tekst, obiekt) po zakończeniu działania. Wartość ta może być potem użyta w programie. Służą do wykonywania obliczeń lub przetwarzania danych, gdzie wynik tych operacji jest potrzebny w dalszej części programu.

```javascript
function sum(a, b) {
  return a + b;  // Zwraca sumę dwóch liczb
}

let result = sum(5, 10);  // Zmienna `result` przechowuje wartość 15
```

---

