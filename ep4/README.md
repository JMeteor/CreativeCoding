# Obrazki w p5.js

## Ładowanie obrazków

```ts
let img;

function preload() {
  img = loadImage(
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/F-22_Raptor_-_100702-F-4815G-217.jpg',
      () => console.log('Loaded correctly'),
      () => console.error('Error loading image')
  );
}
```
Dokumentacja: https://p5js.org/reference/p5/loadImage/

## Cwiczenie 1

1. Załaduj obrazek z internetu
2. Zaloguj w konsoli jego szerokość i wysokość (użyj `img.width` i `img.height`)


## Wyświetlanie obrazków

Podstawowy sposób wyświetlania obrazków w p5.js:
```ts
  image(img, 0, 0, width, height);
```

Dopasowywanie obrazka do rozmiaru okna:
```ts
  image(img, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN);
```

Dokumentacja: https://p5js.org/reference/p5/image/

## Cwiczenie 2
1. Wykorzystaj obrazek z poprzedniego ćwiczenia
2. Wyświetl go na ekranie
3. Spróbuj wyświetlić go w taki sposób, aby nie był rozciągnięty (wykorzystaj `CONTAIN`)
4. Spróbuj wyświetlić obrazek 4 razy, w taki sposób aby każdy zajmował 1/4 ekranu i był umiejscowiony w 4 różnych rogach ekranu


## Manipulowanie obrazami

### Tint

```ts
  // Greyscale
  tint(50);
  // Color
  tint('blue');
  // RGB Color
  tint(255, 255, 0);
```

Dokumentacja: https://p5js.org/reference/p5/tint/

### Filter

```ts
  filter(INVERT);
```

Dokumentacja: https://p5js.org/reference/p5/filter/

### Blend

```ts
  blend(img1, 0, 0, 33, 100, 67, 0, 33, 100, LIGHTEST);
```

Dokumentacja: https://p5js.org/reference/p5/blend/


### Copy

```ts
  copy(img, 7, 22, 10, 10, 35, 25, 50, 50);
```

Dokumentacja: https://p5js.org/reference/p5/copy/

### Cwiczenie 3

1. Wykorzystaj obrazki z poprzedniego ćwiczenia
2. Zastosuj wszystkie 4 poznane operacje na obrazkach:
3. Stwórz blend 2 obrazków, skopiuj jeden obrazek w dwa rogi ekranu, użyj filtra i tinta


## Manipulowanie pixelami

### get

```ts
  let c = get(0, 0, 50, 50);
  image(c, 0, 0);
```

Dokumentacja: https://p5js.org/reference/p5/get/

### set

```ts
    // Sets the color of the pixel at (30, 20) to black, etc
    set(30, 20, 0);
    set(30, 21, 0);
    set(31, 20, 0);
    set(31, 21, 0);
    
    updatePixels()
```

Dokumentacja: https://p5js.org/reference/p5/set/

### pixels

```ts
  loadPixels();
  const d = pixelDensity();
  const allPixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < allPixelsCount; i += 4) {
    pixels[i] = 255 - pixels[i];
    pixels[i + 1] = 255 - pixels[i + 1];
    pixels[i + 2] = 255 - pixels[i + 2];
  }
  updatePixels();
```

Dokumentacja: https://p5js.org/reference/p5/pixels/

### Cwiczenie 5

1. Za pomocą funkcje `get` pobierz 1/8 górnego lewego rogu obrazka i wklej go w centrum
2. Za pomocą funkcje `set` i pętli for, narysuj na canvasie przekątne prostokąta
3. Za pomocą funkcji `loadPixels` i tablicy `pixels` odwróć kolory lewej górnej ćwiartki obrazka


### Zadanie domowe

Za pomocą poznanych metod i funkcji z poprzednich zajęć, stwórz animację, która będzie manipulować obrazkiem w ciekawy sposób.

