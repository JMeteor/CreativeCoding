## Rysowanie kształtów

`rect(x, y , w, h)` - rysuje prostokąt za pomocą parametrów x, y, w i h. Parametry x oraz y określają położenie jej środka, natomiast parametry w i h ustalają jej szerokość i wysokość.
Jeśli nie zostanie określona wysokość, wartość szerokości zostanie użyta zarówno dla szerokości, jak i wysokości.

`ellipse(x, y, w, h)` - rysyuje elipse jak wyżej

**Tryby pozycjonowania**
- `rectMode(CENTER)`/`ellipseMode(CENTER)` - tryb w którym współrzędne `x` i `y` określają środek prostokąta/okręgu
- `rectMode(RADIUS)`/`ellipseMode(RADIUS)` - tryb w którym parametry `x` i `y` określają środek prostokąta/okręgu. Natomiast parametry `w` i `h` będą traktowane jako promień (czyli wielkość figury się podwoi).
- `rectMode(CORNER)`/`ellipseMode(CORNER)` - tryb w którym parametry `x` i `y`  określają lewy górny róg rysowanego kształtu.
- `rectMode(CORNERS)`/`ellipseMode(CORNERS)` - tryb w którym parametry `x` i `y` określają lewy górny róg, natomiast parametry `w` `h` zamieniają się na współrzędne punktu leżącego po przekątnej (jak .

`square(x, y, s)` - rysuje kwadrat w którym parametry `x` i `y` określają lewy-górny róg. Parametr `s` ustala długość boku kwadratu.

`circle(x, y , d)` - okrąg w którym parametry `x` i `y` określają położenie jego środka. Parametr `d` ustala średnice okręgu.

`line(x1, y1, x2, y2)` - rysuje linię między dwoma punktami na płótnie. - Parametry **`x1`** i **`y1`** określają współrzędne początkowego punktu linii. Parametry **`x2`** i **`y2`** określają współrzędne końcowego punktu linii.

`strokeWeight(weight)` - ustawia grubość linii obrysu w pikselach używanego dla punktów, linii i konturów kształtów.

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 0, 220);
  fill(255);

  rectMode(RADIUS);
  rect(200, 200, 100, 100);
  fill(200);
  ellipseMode(RADIUS);
  ellipse(200, 200, 100, 100);

  rectMode(CORNER);
  rect(100, 100, 200, 200);
  ellipseMode(CORNER);
  fill(200);
  ellipse(100, 100, 100, 200);

  fill(255);
  rectMode(CORNERS);
  rect(25, 25, 200, 200);

  fill(200);
  ellipseMode(CORNERS);
  ellipse(25, 25, 200, 200);
  line(25, 25, 200, 200);
}
```

## Kolory

Domyślnie parametry Number dla fill(), stroke(), background() i color() są definiowane przez wartości od 0 do 255 przy użyciu modelu kolorów RGB. Jest to równoważne wywołaniu colorMode(RGB, 255). Czysta czerwień to color(255, 0, 0) w tym modelu.

### Formaty kolorów

#### RGB
Podobnie jak większość formatów kolorów, **rgb** to akronim. Oznacza **czerwony, zielony i niebieski**

Spośród wszystkich formatów kolorów, które dziś omówimy, rgb jest najmniej abstrakcyjnym. Wyświetlacz Twojego komputera/telefonu to w rzeczywistości zbiór milionów malutkich diod LED w kolorach czerwonym, zielonym i niebieskim, ułożonych w piksele. Format kolorów rgb pozwala nam bezpośrednio regulować jasność tych świateł.

Każda wartość — czerwona, zielona i niebieska — nazywana jest **kanałem** (ang. channel). Każdy kanał ma zakres od 0 do 255. Mieszając te kanały w różnych proporcjach, możemy stworzyć ponad 16 milionów różnych kolorów.

Ciekawą rzeczą w kolorze RGB jest to, że opiera się na fizyce światła. Możemy mieszać czerwone, zielone i niebieskie światło, aby uzyskać dowolny kolor. Jeśli ustawimy wszystkie kanały na 255, uzyskamy biały. Jeśli wszystkie będą ustawione na 0, zostaniemy z czarnym.

Format rgb pozwala nam również określić opcjonalny czwarty parametr dla **kanału alfa**, który kontroluje przezroczystość. Parametr alfa przyjmuje wartość od 0 do 255.

**Przykład**
Użyj suwaków żeby sprawdzić jak zmienia się tło
```javascript
let slider, slider2, slider3;

function setup() {
  createCanvas(400, 400);
  
  slider = createSlider(0, 255);
  slider2 = createSlider(0, 255);
  slider3 = createSlider(0, 255);
  slider4 = createSlider(0, 255);
}

function draw() {
  let r = slider.value();
  let g = slider2.value();
  let b = slider3.value();
  let a = slider4.value();
  
  background(r, g, b);
  
  fill(255, 255, 255, a);
  circle(200, 200, 100);
}
```

#### Nazwane kolory

HTML zawiera 140 nazwanych kolorów. Są to specjalne słowa kluczowe (keywords), takie jak `dodgerblue` `hotpink` i `tomato`:

[Web Color Wheel by Anthony Lieuallen](https://arantius.github.io/web-color-wheel/)

### HSL

Niestety, większość oprogramowania do projektowania graficznego używa ściśle powiązanego formatu kolorów o nazwie HSL. Hue (odcień) Saturation (nasycenie) Lightness (Jasność).

- **Hue** (odcień) - jest pigment, którego chcemy użyć. Prawidłowe wartości mieszczą się w zakresie od 0 do 360 i określamy go w stopniach, ponieważ skala jest kołowa (0 stopni i 360 stopni oznaczają ten sam odcień czerwieni).
- **Saturation** (nasycenie) - ile pigmentu jest w kolorze? Prawidłowe wartości mieszczą się w zakresie od 0% do 100%. Przy 0% kolor nie zawiera pigmentu i jest całkowicie w skali szarości. Przy 100% kolor jest tak żywy, jak to tylko możliwe.
- **Lightness** (jasność) -  jak jasny/ciemny jest kolor? Prawidłowe wartości mieszczą się w zakresie od 0% do 100%. Przy 0% kolor jest czarny jak smoła. Przy 100% kolor jest czysto biały.

W HSL „jasność” to skala między czernią a bielą. 0% jasności to zawsze czerń, 100% jasności to zawsze biel. Jeśli chcemy uzyskać jasny, żywy, nasycony kolor, powinniśmy zablokować jasność na 50%, w połowie drogi między czernią a bielą.

W HSB sprawy są nieco bardziej skomplikowane. „Jasność” to nadal miara jasności, a 0% nadal będzie dawać czerń, ale 100% nie zawsze daje biel. Zależy to od nasycenia: przy pełnej jasności nasycenie 0% to biel, a nasycenie 100% to nasz jasny, żywy kolor.

```javascript
let slider;
let slider2;
let slider3;

function setup() {
  createCanvas(400, 400);
  
  slider = createSlider(0, 360);
  slider2 = createSlider(0, 100);
  slider3 = createSlider(0, 100);
}

function draw() {
  let h = slider.value();
  let s = slider2.value();
  let l = slider3.value();
  
  colorMode(HSL);
  
  background(h, s, l);
}
```

### HSB

**HSB** (Hue, Saturation, Brightness) to format kolorów podobny do **HSL**, jednak różni się w definicji jasności (Brightness). W HSB, **Hue** (odcień) określa kolor w skali 0-360 stopni, **Saturation** (nasycenie) określa intensywność koloru od 0% (szarość) do 100% (pełny kolor), a **Brightness** (jasność) mierzy, jak jasny jest kolor. W HSB, **Brightness** nie zawsze daje biel przy wartości 100%. Zależy to od nasycenia: przy pełnej jasności, nasycenie 0% daje biel, a nasycenie 100% daje pełny, żywy kolor. W HSL natomiast jasność 100% zawsze daje biel, co czyni ten format bardziej bezpośrednim w kontekście skali między czernią a bielą.

HSB vs HSL
![[Pasted image 20241017155733.png]]
### Hex Color
Kolor szesnastkowy to najczęściej używany format kolorów w sieci. Wygląda tak:

`#FF9000`
![[Zrzut ekranu 2024-10-7 o 09.06.34.png]]

6-cyfrowy kod szesnastkowy zawiera trzy 2-cyfrowe wartości, po jednej dla każdego kanału (czerwony / zielony / niebieski). Zamiast używać 10-cyfrowego systemu dziesiętnego, używa 16-cyfrowego systemu szesnastkowego.

### Nowoczesne formaty kolorów

Wszystkie formaty kolorów, które do tej pory wymieniłem istnieją od wielu, wielu lat. HSL był już obsługiwany w Internet Explorerze 9 (z 2011 roku). Od pewnego czasu standard webowy otrzymał nowe formaty kolorów (dla CSS).

- **Display P3** - standard stworzony przez Apple, który rozszerz
- **LCH (Lightness Chroma Hue)** - format koloru, który ma być najbardziej zbliżony do percepcji ludzkiego oka. Dwa kolory o równoważnej wartości „jasności” powinny wydawać się równie jasne.

---
### Funkcje kolorystyczne

`background()` - ustawia kolor tła dla całego obszaru rysowania

`fill()` - ustawia kolor wypełnienia kształtów

`stroke()` - ustawia kolor linii obrysowujących kształty.

`noFill()` - wyłącza wypełnienie dla rysowanych kształtów

`noStroke()` - wyłącz obrys dla rysowanych kształtów

## Debugowanie i komentowanie w p5.js
### Konsola w edytorze p5.js

Edytor p5.js zawiera wbudowaną konsolę znajdująca się na dole edytora. Jest ona przydatna do wyświetlania komunikatów o błędach i sprawdzania wyników `print()` i `console.log()`.

### Przydatne funkcje do debugowania

1. **`print()`**- używaj `print()`, aby wyświetlić informacje w konsoli. Może być używany do wyświetlania wartości zmiennych lub komunikatów.
   ```javascript
   let x = 10;
   print('Wartość x to:', x);
   ```

2. **`console.log()`** - podobnie jak `print()`, `console.log()` wyświetla informacje w konsoli przeglądarki. Jest przydatny do bardziej szczegółowego debugowania. To natywna metoda javascript.
   ```javascript
   let y = 20;
   console.log('Wartość y to:', y);
   ```

3. **`noLoop()`**- zatrzymuje funkcję `draw()` przed ciągłym wykonywaniem. Przydatne do debugowania stanów statycznych.
   ```javascript
   function setup() {
     createCanvas(400, 400);
     noLoop();
   }
   ```

4. **`loop()`** - wznawia funkcję `draw()`, jeśli została zatrzymana przez `noLoop()`.
   ```javascript
   function mousePressed() {
     loop();
   }
   ```

5. **`frameRate()`**- ustawia liczbę wyświetlanych na sekundę klatek. Obniżenie liczby klatek może ułatwić debugowanie animacji.
   ```javascript
   function setup() {
     createCanvas(400, 400);
     frameRate(10); // 10 klatek na sekundę
   }
   ```
### Komentarze

Komentarze w edytorze p5.js są używane do dodawania notatek i wyjaśnień w kodzie, które nie są wykonywane przez program. Pomagają zrozumieć logikę kodu, dokumentować funkcje oraz ułatwiają współpracę w zespołach. W JavaScript, można używać dwóch rodzajów komentarzy: jednoliniowych i wieloliniowych. Komentarze jednoliniowe zaczynają się od `//` i obejmują tekst do końca linii, natomiast komentarze wieloliniowe są otoczone przez `/*` i ` */`, co pozwala na komentowanie większych bloków kodu.

```javascript
// komentarz jednoliniowy
console.log('komentarz')

/*
Komentarz
console.log('komentarz')
wielo 
liniowy
*/
```

### Średniki w JavaScript

W JavaScript średniki (`;`) są używane do zakończenia instrukcji. Chociaż JavaScript posiada funkcję automatycznego wstawiania średników (Automatic Semicolon Insertion), która może dodawać średniki tam, gdzie ich brakuje, zazwyczaj dobrą praktyką jest ich jawne używanie, aby uniknąć potencjalnych problemów.

### Autoformatowanie w edytorze p5.js

Edytor p5.js zawiera funkcję "Tidy Code"  która formatuje kod
Mac: `cmd +shift + F`
Windows: `ctrl + shift + F`

## Zmienne

Jakikolwiek kod umieścimy wewnątrz funkcji `draw()` będzie on wykonywany w nieskończoność aż do zamknięcia przeglądarki/karty. Ten flow jest bardzo powszechny dla programów graficznych.
Abyśmy mogli lepiej zrozumieć, jak naprawdę działa ten przepływ danych, potrzebujemy
czegoś, co zmienia się w czasie, czyli **zmiennej** :)

funkcja `draw()` wykonuje się  ok. 60 razy na sekundę i jest to jej domyślna wartość. Można to zmienić przy pomocy funkcji `frameRate()`.

`mouseX` i `mouseY` - zmienne reprezentujące pozycję (współrzędne) na których znajduję się kursor w przeglądarce względem lewego-górnego rogu canvas

`mousePressed()` - funkcją wywoływana przy każdym kliknięciu myszy

### Deklaracja własnych zmiennych

W JavaScript możemy deklarować zmienne na trzy sposoby: za pomocą `var`, `let` i `const`. Oto kluczowe różnice między nimi:

- **`var`**: zakres funkcyjny, możliwość ponownej deklaracji, starszy sposób.
- **`let`**: zakres blokowy, brak ponownej deklaracji, bezpieczniejszy od `var`.
- **`const`**: zakres blokowy, nie można ponownie przypisać wartości.

**!!! Na potrzeby naszych ćwiczeń będziemy deklarować zmienne używając `let` !!!**

#### Zakres blokowy

**Dotyczy `let` i `const`**
Zmienne mające **zakres blokowy** są dostępne tylko wewnątrz bloku kodu, w którym zostały zadeklarowane. Blokiem może być np. ciało funkcji, pętli, instrukcji warunkowej (`if`, `for`, `while`), czyli wszystko, co znajduje się między `{}`.

```javascript
if (true) {
  let x = 10;  // zmienna x istnieje tylko w tym bloku
  const y = 20; // zmienna y także istnieje tylko w tym bloku
  console.log(x);  // 10
  console.log(y);  // 20
}

console.log(x);  // Błąd! Zmienna x nie jest dostępna poza blokiem
console.log(y);  // Błąd! Zmienna y nie jest dostępna poza blokiem

```

#### Zakres funkcyjny

- **Dotyczy `var`**
- Zmienne mające **zakres funkcyjny** są dostępne wewnątrz całej funkcji, w której zostały zadeklarowane, niezależnie od tego, w jakim bloku znajdują się w ramach tej funkcji. Jeśli zadeklarujesz zmienną `var` wewnątrz np. pętli lub instrukcji warunkowej, będzie ona widoczna również poza tym blokiem

```javascript
function myFunction() {
  if (true) {
    var z = 30;  // zmienna z ma zakres funkcyjny, więc jest widoczna w całej funkcji
    console.log(z);  // 30
  }

  console.log(z);  // 30 - zmienna z jest dostępna także poza blokiem if
}

myFunction();
console.log(z);  // Błąd! Zmienna z nie jest dostępna poza funkcją

```

**Przykład**
Deklarowanie własnych zmiennych
```javascript
let circleX;
let circleY;

function setup() {
  createCanvas(500, 500);
  circleX = 25;
  circleY = 250;
}

function draw() {
  background(0);
  
  noStroke();
  fill(250);
  
  circleX = circleX + 2;
  
  ellipse(circleX, circleY, 50); 
}
```

## Incrementation operators

```javascript
let x;

function draw() {
  x = x + 1;
  x += 1;
  x++;
}

```

Ciekawostka: C++ został tak nazwany ze względu na to, że był ulepszoną, następną wersją języka C.

## Funkcja `random()`

funkcja `random()` odblokuję wiele ciekawych możliwości do tworzenia. To funkcja jak każda inna w bibliotece p5.js. Przyjmuje dwa parametry `min` i `max` i zwraca losowy numer z zakresu między tymi wartościami.

```javascript
random(10,50)
```

**Przykład 1**
Nudna statyczna kulka
```javascript
let circleSize;
let lineWidth

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER)
  circleSize = random(15, 200)
  // lineWidth = random(4, 50)
  background(10);
}

function draw() {
  // circleSize = random(5, 200);
  // background(10)
  strokeWeight(lineWidth);
  stroke(0, 0, 255, 10)
  // fill(0, 255, 0);
  ellipse(200,200, circleSize)
}

```

**Przykład 2**
Nudna statyczna ciapka na środku ekranu
```javascript
function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  r = 255;
  g = 0;
  b = 250;
  // r = random(0, 255);
  // g = random(0, 255);
  // b = random(0, 255);

  x = 300;
  y = 200;
  
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24)
}
```

Funkcji `random()` możemy przekazać tylko jeden argument. W tym przypadku założy że wartością minimalną jest 0.

P5.js zawiera wbudowane zmienne `width` i `height` które odpowiadają argumentom przekazanym w funkcji `createCanvas()`.

```javascript
function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {

  r = random(255);
  g = 0;
  b = random(255);

  x = random(width);
  y = random(height);
  
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24)
}
```

Oprócz tego są dwie wbudowane zmienne `windowWidth` i `windowHeight`, które dynamicznie wyciągają wartość dostępnej przestrzeni dla canvas.

```javascript 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}
```

Przydatne jeżeli chcemy zobaczyć

**Zadanie**
Spróbujcie uatrakcyjnić ten program dodając trochę kolorów , spróbujcie użyć do tego zmiennych.
```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(255);
  circle(mouseX, mouseY, 20)
}

function mousePressed() {
  background(0);
}
```

Przykładowe rozwiązanie:
```javascript
let size, r, g, b;

function setup() {
  createCanvas(400, 300);
  background(0);
}

function draw() {
  noStroke();
  fill(r,g,b, random(100));
  circle(mouseX, mouseY, size)
}

function mousePressed() {
  size = random(50);
  r = random(255);
  g = random(255);
  b = random(255);
}
```

### Funkcja `map()`

Bardzo często w grafice komputerowej spotykamy scenariusz w którym funkcja map jest bardzo przydatna. Mamy canvas który ma background(0) albo background(255). Załóżmy że chcemy przełączać kolory w zależności od wartości `mouseX`. Jak możemy przekonwertować wartości tej zmiennej (0, 600), tak żeby odpowiadały zakresowi koloru (0, 255)

0 - 600 => 0 - 255

funkcja map bierze dowolny zakres i na ich podstawie kalkuluje proporcjonalna wartość w tym przedziale.
`map(value, start1, stop1, start2, stop2)`
1. `value` - wartość którą chcemy zmapować
2. `start1` - dolna granica zakresu wejściowego
3. `stop1` - górna granica zakresu wejściowego
4. `start2`- dolna granica zakresu wyjściowego
5. `stop2` - górna granica zakresu wyjściowego

**Przykład**
```javascript
let color = 0;
let r = 0;
let b = 255;


function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  r = map(mouseX, 0, width, 0, 255);
  b = map(mouseX, 0, width, 255, 0)
  background(r, 0, b);
  
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64)
}
```

### Instrukcje warunkowe

wyrażenie logiczne (ang. boolean expression) to podstawa programowania
Przejdźmy do najważniejszej kwestii programowania czyli instrukcjach warunkowych (ang. conditional statements). Instrukcje warunkowe umożliwiają podejmowanie decyzji w programie na po dstawie wyrażeń logicznych. Najczęściej używane to:

- `if` : wykonuje kod ,jeśli warunek jest prawdziwy
- `else if`: sprawdza kolejny warunek, jeśli pierwszy był fałszywy
- `else` wykonuje kod, jeśli żaden z warunków nie został spełniony

W programowaniu kreatywnym wyrażenia logiczne i instrukcje warunkowe pozwalają wprowadzić **inteligencję** i **dynamiczność** do projektów artystycznych, animacji czy interaktywnych wizualizacji. Dzięki nim możemy tworzyć dzieła, które **reagują** na użytkownika, zmieniają się w czasie lub reagują na dane, tworząc bardziej **interaktywne i angażujące** doświadczenia.

**Przykład 1**
```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0)
  
  stroke(255);
  strokeWeight(5)
  noFill();
  
  if (mouseX > 300) {
    fill(255,0 ,200)
  }
  
  ellipse(300, 200, 100)
}
```

W JavaScript operatorzy `=`, `==` i `===` mają różne funkcje i zachowują się inaczej:

**`=`**: operator przypisania (ang. assignment operator) służy do przypisania wartości.
```javascript
let x = 5; // Przypisanie wartości 5 do zmiennej x
```

**`==`**: operator luźnego porównania (ang. loose equality operator) porównuje wartości po konwersji typów (luźne porównanie).
 ```javascript
 console.log(5 == "5"); // true (JavaScript konwertuje string "5" na liczbę 5 przed porównaniem) 
 console.log(true == 1); // true (JavaScript konwertuje true na 1)
```

**`===`**: operator ścisłego porównania (ang. strict equality operator) porównuje wartości **i** typy (ścisłe porównanie).

```javascript
console.log(5 === "5"); // false (różne typy: liczba i string) 
console.log(5 === 5); // true (wartość i typ są takie same) 
console.log(true === 1); // false (różne typy: boolean i liczba)
```

W naszym przypadku ponieważ będziemy pracować na zakresach będziemy często korzystać z
`<`, `>`, `>==`, `<==`

Przy pomocy `else if` i `else` możemy tworzyć złożone.

- **`else`** jest używane, gdy pierwszy (lub wcześniejsze) warunek nie zostanie spełniony. Oznacza to, że gdy żadne inne warunki nie są prawdziwe, blok kodu w `else` zostanie wykonany.

- **`else if`** umożliwia sprawdzenie dodatkowych warunków, gdy pierwszy nie został spełniony. Możesz dzięki temu sprawdzać wiele scenariuszy.

**Przykład** 2
```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0)
  stroke(255);
  strokeWeight(5)
  noFill();
  
  if (mouseX > 300) {
    ellipse(300, 200, 100, 100);
  } else {
    rect(300, 200, 100, 100);
  }
}
```

**Przykład 3**
- Dlaczego rect i line nie pokazują się?
```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);
  noFill();

  if (mouseX > 100) {
    ellipse(300, 200, 100);
  } else if (mouseX > 150) {
    rect(300, 200, 100);
  } else if (mouseX > 250) {
    line(0, 0, width, height);
  } else {
    point(300, 200);
  }
}
```
Problem w tym kodzie wynika z kolejności warunków `else if`, które są sprawdzane w bloku warunkowym. W przypadku `if`, `else if`, i `else`, program przestaje sprawdzać kolejne warunki po znalezieniu pierwszego, który jest spełniony.

`&&` - AND operator
`||` - OR operator

```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);
  noFill();

  if (mouseX > 300 && mouseX < 400) {
    fill(255, 0, 200)
  }
  
  rect(300, 200, 100, 100)
}
```


**Zadanie**
Spraw żeby piłka odbijała się od krawędzi canvasa

```javascript
let x = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0)
  stroke(255);
  strokeWeight(5)
  noFill();
  ellipse(x, 200, 100)
  
  // TODO: Spraw by piłka odbijała się od krawędzi ekranu
  // WSKAZÓWKA: Przydadzą się dodatkowe zmienne
  // BONUS: Spraw żeby odbijałą się od obrysu a nie środka okręgu.
  
  if (x > width) {
    print("POZA EKRANEM!")
  }
  
  x+=5;
}
```


## Coding Challenge - Random Walker

**Random Walk** (losowy spacer) to klasyczny problem stochastyczny, który bada ruch obiektu, który w każdym kroku zmienia swoją pozycję losowo. To podejście bazuje na przypadkowości, co oznacza, że każdy krok w danym kierunku jest wynikiem losowego wyboru. **Random Walk** jest szeroko wykorzystywany w modelowaniu procesów fizycznych, biologicznych i finansowych, a także jako podstawowy element generatywnej sztuki i animacji komputerowej.

**Random Walk** jest jednym z najprostszych przykładów procesów losowych, które można wykorzystać do modelowania ruchu (np. jak zwierzęta poszukują pożywienia), notowań giełdowych, ewolucji form i innych zjawisk.

**Stochastyczność** (czyli losowość) w programowaniu kreatywnym polega na wprowadzaniu elementów nieprzewidywalnych do algorytmów, które pomagają tworzyć bardziej organiczne, niepowtarzalne i naturalne efekty.

#### Random Walk w p5.js

W kontekście **p5.js**, implementacja "Random Walk" jest bardzo prosta, ponieważ ta biblioteka ułatwia rysowanie i animowanie obiektów, a także oferuje funkcje do losowego generowania liczb, takie jak **`random()`**.

Każda klatka animacji wybiera jedną z dostępnych opcji
1. Ruch do góry
2. Ruch do dołu
3. Ruch w lewo
4. Ruch w prawo

Komputer potrafi wybrać tylko pseudolosowe wartości

**Pseudolosowość** odnosi się do generowania liczb, które **wydają się losowe**, ale w rzeczywistości są wynikiem działania deterministycznego algorytmu. W programowaniu mówimy o liczbach pseudolosowych, ponieważ komputer nie może wygenerować prawdziwej losowości – wszystko w komputerze musi być wynikiem przetwarzania danych, co oznacza, że liczby te są determinowane przez określony algorytm.

Funkcja `random()` daję  równomierny rozkład

```javascript
let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(5);
  

  let r = floor(random(4));

  switch (r) {
    case 0:
      x = x + 1;
      break;
    case 1:
      x = x - 1;
	  break;
    case 2:
      y = y + 1;
      break;
    case 3:
      y = y - 1;
      break;
  }
  
  point(x, y);
}

```

Koncept jest bardzo prosty ale prowadzi do naprawdę wspaniałych dzieł

[Random Walker by Louis Hoebregts](https://codepen.io/Mamboleoo/pen/jObedYN)