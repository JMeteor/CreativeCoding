# Programowanie obiektowe

Programowanie obiektowe (ang. Object Oriented Programming) to paradygmat programowania, który organizuje kod wokół **obiektów**. Obiekty to elementy, które mogą przechowywać dane (w postaci właściwości) oraz zachowania (w postaci metod). W OOP chodzi o modelowanie rzeczywistych problemów za pomocą obiektów, które mogą mieć swoje stany i mogą wchodzić w interakcje między sobą.

W JavaScript obiekty są wszędzie — są podstawowym typem danych, a **prototypy** to mechanizm dziedziczenia dla obiektów. Obiekty mają swoje właściwości i metody, a także ukryty prototyp, z którego mogą dziedziczyć dodatkowe metody i właściwości.


**ES6 (ECMAScript 6)**, znany również jako **ECMAScript 2015**, to duża aktualizacja języka JavaScript, która wprowadziła szereg nowych funkcji i składni. Jest to ważny krok w ewolucji JavaScript, który uprościł pisanie kodu, uczynił go bardziej czytelnym i lepiej zorganizowanym.

Wprowadziła m.in rzeczy o których już rozmawialiśmy jak:
- deklaracja zmiennych `let` i `const`
- funkcje strzałkowe (`arrow functions`)
- KLASY o których porozmawiamy teraz

## Klasy i obiekty w ES6

W ES6 wprowadzono składnię **klas** (ang. `class`), co uprościło tworzenie obiektów oraz zarządzanie nimi. **Klasy** to wzorce, z których tworzone są **obiekty**. Każdy obiekt jest instancją klasy i może mieć swoje właściwości oraz metody.

**Przykład: Tworzenie klasy Circle**

```javascript
class Circle {
  constructor(x, y, radius) {
    this.x = x;           // Pozycja na osi x
    this.y = y;           // Pozycja na osi y
    this.radius = radius; // Promień koła
  }

  // Metoda do rysowania okręgu
  display() {
    ellipse(this.x, this.y, this.radius * 2);
  }

  // Metoda do zmiany położenia
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}


let myCircle;

function setup() {
  createCanvas(400, 400);
  myCircle = new Circle(200, 200, 50); // Tworzenie obiektu klasy Circle
}

function draw() {
  background(220);
  myCircle.display(); // Wywołanie metody display, by narysować okrąg
  myCircle.move(1, 0); // Przesunięcie okręgu w prawo
}

```

- **Klasa** `Circle` definiuje, jak wygląda obiekt "okrąg" (ma współrzędne i promień).
- **Obiekt** `myCircle` to konkretna instancja klasy `Circle`.

### Domyślne wartości konstruktora

Konstruktor klasy może przyjmować argumenty z domyślnymi wartościami, co pozwala na większą elastyczność przy tworzeniu obiektów. Domyślne wartości są używane, jeśli przy tworzeniu obiektu nie zostaną przekazane odpowiednie argumenty.

```javascript
class Circle {
  constructor(x = 100, y = 100, radius = 50) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  display() {
    ellipse(this.x, this.y, this.radius * 2);
  }
}

let defaultCircle = new Circle(); // Używa wartości domyślnych 
let customCircle = new Circle(200, 300, 30); // Przekazuje własne wartości
```

## Dziedziczenie

**Dziedziczenie** (ang. inheritance) pozwala na tworzenie nowych klas na podstawie istniejących. Nowa klasa może dziedziczyć właściwości i metody klasy bazowej, ale także definiować swoje własne.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Ricky extends Person {
  constructor(grade) {
    super('Ricky', 29);
    this.grade = grade
  }

  introduce() {
    super.introduce();
    console.log(`I finished grade ${this.grade}`);
  }

  smokes() {
    console.log("Smokes, Lets Go")
  }
}

let ricky;

function setup() {
  ricky = new Ricky(9);
  ricky.introduce();
  ricky.smokes();
}
```

**Przykład**
Dzięki dziedziczeniu możemy poszerzyć naszą kule o klasę `MovingCircle` bez zmiany klasy `Circle`.

```javascript
let movingCircle;

function setup() {
  createCanvas(400, 400);
  movingCircle = new MovingCircle(200, 200, 50, 2, 2); // Tworzenie obiektu klasy MovingCircle
}

function draw() {
  background(220);
  movingCircle.move();    // Wywołanie metody dziedziczonej z klasy Circle oraz dodanej w MovingCircle
  movingCircle.display(); // Dziedziczona metoda display
}

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  display() {
    ellipse(this.x, this.y, this.radius * 2);
  }
}

// Klasa MovingCircle dziedziczy po klasie Circle
class MovingCircle extends Circle {
  constructor(x, y, radius, dx, dy) {
    super(x, y, radius); // Wywołanie konstruktora klasy bazowej
    this.dx = dx;
    this.dy = dy;
  }

  // Nowa metoda, która przemieszcza okrąg
  move() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.dx *= -1; // Odwrócenie kierunku na osi x
    }

    // Sprawdzenie kolizji z górną i dolną krawędzią
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy *= -1; // Odwrócenie kierunku na osi y
    }
  }
}
```

- **Klasa `MovingCircle`** dziedziczy właściwości i metody klasy `Circle` (`display()`), ale dodaje nowe (`move()`).
- Dziedziczenie pozwala na ponowne wykorzystanie kodu i jego rozszerzenie.

---

# Organizacja plików w p5.js

Kiedy projekty stają się większe i bardziej złożone, warto zacząć organizować kod w sposób, który pozwala na łatwiejsze zarządzanie, czytelność i rozszerzalność. Jednym z kluczowych sposobów organizacji projektu jest **przenoszenie klas do oddzielnych plików**. W ten sposób każdy plik zawiera tylko fragment odpowiedzialny za konkretną funkcjonalność, a nie całą logikę projektu.

**Dlaczego warto organizować kod w oddzielnych plikach?**

1. **Łatwiejsze zarządzanie kodem**: W dużym projekcie p5.js trzymanie całego kodu w jednym pliku może być niewygodne. Rozdzielenie kodu na mniejsze fragmenty ułatwia pracę i debugowanie.
2. **Modularność**: Każda klasa lub funkcjonalność może być zapisana w oddzielnym pliku, co pozwala na łatwe dodawanie nowych funkcji bez potrzeby modyfikacji całego kodu.
3. **Czytelność**: Kiedy kod jest podzielony na logiczne części, jest bardziej przejrzysty i zrozumiały, zarówno dla autora, jak i innych osób pracujących nad projektem.

## Jak przenieść klasy do oddzielnych plików?

**Krok 1**: Utwórz oddzielny plik JavaScript dla każdej klasy - circle.js

**Krok 2**: Dodaj wszystkie pliki do index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/addons/p5.sound.min.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css">
  <meta charset="utf-8" />

</head>
<body>
<main>
</main>
<script src="circle.js"></script>
<script src="movingCircle.js"></script>
<script src="sketch.js"></script>
</body>
</html>
```

W powyższym przykładzie plik `circle.js` i `myCircle.js` musi zostać dołączony **przed** plikiem `sketch.js`, aby definicja klasy była dostępna w momencie, gdy zaczniemy z niej korzystać w głównym pliku.

**Krok 3 (opcjonalny)**
Aby zachować porządek w większych projektach, warto trzymać pliki z klasami w osobnych katalogach. Typowa struktura projektu p5.js mogłaby wyglądać tak:

```bash
/projekt-p5
    /index.html      (główny plik HTML)
    /sketch.js       (główny plik JavaScript)
    /classes         (katalog na klasy)
        /circle.js   (plik klasy Circle)
        /movingCircle.js (inne klasy)
    /assets          (opcjonalnie: katalog na pliki multimedialne)

```

---

# Tablice

Tablice (ang. arrays) to fundamentalna struktura danych w JavaScript, która jest bardzo użyteczna w programowaniu graficznym i interaktywnym. W kontekście p5.js, tablice pozwalają na przechowywanie i manipulowanie dużymi ilościami danych, obiektów, kształtów i innych elementów w dynamiczny sposób

```javascript
let emptyArr = []; // Pusta tablica
let numberArr = [10, 20, 30, 40]; // Tablica number
let stringArr = ['a', 'b', 'c'];

console.log(numberArr[0]); // 10
console.log(numberArr[3]); // 40
console.log(stringArr[2]) // b
```

Można zmieniać wartości elementów tablicy

```javascript
let numberArr = [10, 20, 30, 40];
numberArr[2] = 100;
console.log(numberArr) // [10, 20, 100, 40]
numberArr[1] = 'abc';
console.log(numberArr) // [10, 'abc', 100, 40]
```

Najczęściej będzie iterować po tablicach w pętli `for()`

```javascript
let numberArr = [10, 20, 30, 40];
for (let i = 0; i < numberArr.length; i++) {
  console.log(numberArr[i]);
}

```

Tablice w p5.js mogą być używane do przechowywania wielu elementów wizualnych, np. **pozycji obiektów, kolorów czy prędkości**. Możemy na przykład przechowywać współrzędne wielu punktów, aby narysować zbiór obiektów na ekranie. Bardzo często będziemy korzystać z tablicy w towarzystwie pętli **`for()`**.

**Przykład: Przechowywanie i rysowanie wielu kół**

```javascript
let circleCount = 400;
let x = [];
let y = [];
let r = [];

function setup() {
  createCanvas(400, 400);

  // Inicjalizacja tablic
  for (let i = 0; i < circleCount; i++) {
    x[i] = random(width);  // Losowa pozycja x
    y[i] = random(height); // Losowa pozycja y
    r[i] = random(10, 50); // Losowa średnica
  }
}

function draw() {
  background(220);
  stroke(0,0,0,50);

  // Rysowanie kółek
  for (let i = 0; i < x.length; i++) {
    ellipse(x[i], y[i], r[i]);
  }
}

```

- Tablice `x[]`, `y[]` i `r[]` przechowują odpowiednio współrzędne X, Y oraz promienie kółek.
- W funkcji `setup()` używamy pętli `for`, aby zainicjować tablice losowymi wartościami.
- W funkcji `draw()` iterujemy przez wszystkie elementy tablicy i rysujemy każde kółko, korzystając z jego pozycji i rozmiaru.

## Dynamiczne dodawania elementów do tablicy

Tablice w JavaScript są dynamiczne, co oznacza, że możemy dodawać do nich nowe elementy w trakcie działania programu. W tym celu możemy użyć metody `push()`, która dodaje nowy element na końcu tablicy.

**Przykład: Dodawanie nowych kółek na kliknięcie myszy**

Zmienimy poprzedni przykład tak, aby nowe kółko było dodawane do tablicy za każdym razem, gdy klikniemy mysz.

```javascript
let circleCount = 400;
let x = [];
let y = [];
let r = [];

function setup() {
  createCanvas(400, 400);

  // Inicjalizacja tablic
  for (let i = 0; i < circleCount; i++) {
    x[i] = random(width); // Losowa pozycja x
    y[i] = random(height); // Losowa pozycja y
    r[i] = random(10, 50); // Losowa średnica
  }
}

function draw() {
  background(220);
  stroke(0, 0, 0, 50);

  // Rysowanie kółek
  for (let i = 0; i < x.length; i++) {
    
    if (i > circleCount) {
      fill(255, 0, 125);
    } else {
      fill(255, 255, 255)
    }
    
    ellipse(x[i], y[i], r[i]);
    
  }
}

function mousePressed() {
  // Dodanie nowego kółka po kliknięciu myszą
  print(mouseX, mouseY)
  x.push(mouseX);      // Pozycja X kursora myszy
  y.push(mouseY);      // Pozycja Y kursora myszy
  r.push(random(10, 50));  // Losowa średnica kółka
}

```

- Funkcja `mousePressed()` uruchamia się za każdym razem, gdy użytkownik kliknie myszką.
- Metoda `push()` dodaje nowe wartości do tablic `x[]`, `y[]`, i `r[]` - są to współrzędne kliknięcia oraz losowy rozmiar kółka.
- Po kliknięciu myszą, nowe kółko rysowane jest na ekranie.

## Operacje na tablicach

Oprócz `push()`, tablice w JavaScript obsługują wiele innych metod, które mogą być przydatne w p5.js:

- **`pop()`** – usuwa ostatni element z tablicy.
- **`shift()`** – usuwa pierwszy element z tablicy.
- **`unshift()`** – dodaje nowy element na początku tablicy.
- **`splice()`** – pozwala usuwać, dodawać lub zamieniać elementy w tablicy w dowolnym miejscu.

**Przykład: Użycie `pop()`**

```javascript
function keyPressed() {
  if (key === 'd') {
    // Usuwamy ostatnie kółko, gdy użytkownik wciśnie klawisz 'd'
    x.pop();
    y.pop();
    r.pop();
  }
}
```

## Tablice obiektów

Tablice mogą również przechowywać obiekty, co jest przydatne, gdy mamy bardziej złożone dane, takie jak obiekty reprezentujące np. kółka, prostokąty czy inne figury. Przykładowo, możemy stworzyć klasę `Circle` i przechowywać wiele obiektów tej klasy w tablicy.

**Przykład: Shaky Bubbles - Tablica obiektów**

```javascript
class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  display() {
    ellipse(this.x, this.y, this.radius * 2);
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}

let circles = [];

function setup() {
  createCanvas(400, 400);

  // Tworzymy 10 obiektów klasy Circle
  for (let i = 0; i < 10; i++) {
    let c = new Circle(random(width), random(height), random(10, 50));
    circles.push(c); // Dodajemy obiekty do tablicy
  }
}

function draw() {
  background(60);
  strokeWeight(10);
  stroke(155, 0, 200)
  
fill(255, 0, 124)
  // Rysujemy i poruszamy wszystkie obiekty w tablicy
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}

```

- Zdefiniowaliśmy klasę `Circle`, która ma metody do rysowania (`display()`) i poruszania się (`move()`).
- Tworzymy 10 obiektów `Circle` i przechowujemy je w tablicy `circles[]`.
- W pętli `draw()` wywołujemy metody dla każdego obiektu w tablicy, rysując i animując kółka.

---

Tablice to potężne narzędzie, które umożliwia przechowywanie i zarządzanie wieloma danymi. Dzięki nim możemy efektywnie zarządzać wieloma obiektami, animować je i manipulować danymi w sposób dynamiczny. Znajomość metod tablicy, takich jak `push()`, `pop()`, czy bardziej zaawansowane jak `splice()`, pozwala na elastyczne tworzenie projektów w p5.js, a tablice obiektów otwierają drzwi do bardziej złożonych animacji i interakcji.



# Komunikacja między Obiektami

Komunikacja między obiektami to istotny aspekt programowania obiektowego (Object-Oriented Programming, OOP), zwłaszcza gdy tworzymy bardziej złożone projekty w p5.js.

**Jak obiekty mogą komunikować się ze sobą?**
W JavaScript, obiekty komunikują się, wywołując nawzajem swoje metody, odwołując się do swoich właściwości lub przekazując dane za pomocą parametrów. Poniżej wyjaśnimy, jak to działa w praktyce, w kontekście p5.js.

**Przykład: Magnetyczne Kule**

```javascript
class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color(200, random(50,200), 225);
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }

  // Metoda przyciągania do innego kółka
  attract(otherCircle) {
    let dx = otherCircle.x - this.x;
    let dy = otherCircle.y - this.y;
    let distance = sqrt(dx * dx + dy * dy);

    // Jeśli są blisko, przemieść je bliżej siebie
    if (distance < 100 && distance > this.radius + otherCircle.radius) {
      this.x += dx * 0.005;
      this.y += dy * 0.005;
    }
  }
}

let circles = [];

function setup() {
  createCanvas(400, 400);
  
  // Dodajemy kilka obiektów Circle do tablicy
  for (let i = 0; i < 100; i++) {
    circles.push(new Circle(random(width), random(height), random(20, 50)));
  }
}

function draw() {
  background(220);
  noStroke();

  // Rysowanie i przyciąganie kółek
  for (let i = 0; i < circles.length; i++) {
    for (let j = 0; j < circles.length; j++) {
      if (i !== j) {
        circles[i].attract(circles[j]); // Kółko i przyciąga kółko j
      }
    }
    circles[i].display(); // Wyświetlamy każde kółko
  }
}

```

- Każdy obiekt `Circle` posiada metodę `attract()`, która przyciąga kółko do innego kółka, korzystając z prostych obliczeń wektora.
- W pętli `draw()`, każde kółko sprawdza swoją odległość do innych kółek i zbliża się do nich, jeśli jest wystarczająco blisko.
- Dzięki takiej komunikacji, obiekty „reagują” na swoje położenia względem siebie, co tworzy dynamiczną i interaktywną animację.

---

## Komunikacja przez parametry metod

Czasami obiekty muszą przekazywać dane między sobą, na przykład informacje o swojej pozycji, rozmiarze lub stanie. Możemy to zrobić, przekazując odpowiednie parametry w metodach. W ten sposób jeden obiekt może wpływać na właściwości drugiego.

**Przykład: Kolizja Kul**

```javascript
let myColor;

class Circle {
  constructor(x, y, radius, c) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.defaultColor = color(255);
    this.currentColor = this.defaultColor;
    this.collisionColor = c;
  }

  display() {
    fill(this.currentColor);
    ellipse(this.x, this.y, this.radius * 2);
  }

  changeColor(newColor) {
    this.currentColor = newColor;
  }
  
  resetColor() {
    this.currentColor = this.defaultColor;
  }

  // Sprawdzanie, czy inne kółko jest blisko
  checkProximity(otherCircle) {
    let d = dist(this.x, this.y, otherCircle.x, otherCircle.y);

    if (d < this.radius + otherCircle.radius) {
      this.changeColor(this.collisionColor); // Zmieniamy kolor, gdy są blisko
      otherCircle.changeColor(this.collisionColor);
    } else {
      this.resetColor();
      otherCircle.resetColor();
    }
  }
}

let circle1, circle2;

function setup() {
  createCanvas(400, 400);
  myColor = color(255, 0, 0);

  circle1 = new Circle(250, 200, 50, myColor);
  circle2 = new Circle(100, 100, 50, myColor);
}

function draw() {
  background(220);
  noStroke();

  circle2.x = mouseX;
  circle2.y = mouseY;

  circle1.display();
  circle2.display();

  // Sprawdzanie, czy kółka są blisko siebie

  circle1.checkProximity(circle2);
}

```


# Dodatkowo

## Prototypy

Prototypy w JavaScript to mechanizm, który pozwala obiektom dziedziczyć właściwości i metody od innych obiektów. Każdy obiekt w JavaScript ma swój ukryty prototyp, który jest innym obiektem. Jeśli szukasz jakiejś właściwości lub metody w obiekcie, a jej tam nie ma, JavaScript automatycznie sprawdza prototyp tego obiektu.

Kiedy tworzysz nową tablicę, nie widzisz tego bezpośrednio, ale każda tablica w JavaScript ma dostęp do zestawu wbudowanych metod, takich jak `push()`, `pop()`, `map()`, `forEach()` itp. Te metody pochodzą właśnie z **prototypu tablicy**, czyli `Array.prototype`, gdzie ta metoda jest zdefiniowana.