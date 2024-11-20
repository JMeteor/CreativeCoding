# Budowanie aplikacji

### Tworzenie klasy InteractiveImage
```js

class InteractiveImage {
  constructor(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = img.width;
    this.height = img.height;
  }

  display() {
    image(img, this.x, this.y, width, height, 0, 0, img.width, img.height, CONTAIN);
  }
}
```

### Dodanie stanu na przyciskach
```js
class Button {
  constructor(activeTitle, inactiveTitle, x, y) {
    this.inactiveTitle = inactiveTitle;
    this.activeTitle = activeTitle;
    this.isActive = false;
    this.x = x;
    this.y = y;
    this.button = null;
  }
  
  display() {
    this.button = createButton(this.activeTitle);
    this.button.position(this.x, this.y);
  }
  
  updateTitle() {
        this.button.html(!this.isActive ? this.activeTitle : this.inactiveTitle);
  }
  
  onMousePressed(callback) {
    this.button.mousePressed(() => {
      callback();
      this.isActive = !this.isActive;
      this.updateTitle();
    })
  }
}
```

### Stworzenie Buttona + wyrenderowanie go na ekranie n razy:

```js
class Button {
  constructor(title, x, y) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.button = null;
  }
  
  display() {
    this.button = createButton(this.activeTitle);
    this.button.position(this.x, this.y);
  }
  
  updateTitle() {
        this.button.html(!this.isActive ? this.activeTitle : this.inactiveTitle);
  }
  
  onMousePressed(callback) {
    this.button.mousePressed(callback)
  }
}

... Usage:

    let grayButton = new Button('Gray Filter', 50, height - 50);
    grayButton.display();
```

### Dodanie funkcjonalności: Filter, Tint, Move Right, Move Left

```js
class InteractiveImage {
  constructor(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = img.width;
    this.height = img.height;
    this.isGray = false;
    this.tintColor = color(255, 255, 255);
  }

  display() {
    tint(this.tintColor);
    image(img, this.x, this.y, width, height, 0, 0, img.width, img.height, CONTAIN);
    
    noTint();
    if (this.isGray) {
      filter(GRAY);
    }
  }

  toggleGrayFilter() {
    this.isGray = !this.isGray;
  }

  applyRandomTint() {
    this.tintColor = color(random(255), random(255), random(255));
  }

  slideRight() {
    this.x += 100;
  }

  slideLeft() {
    this.x -= 100;
  }
  
  removeTint() {
    this.tintColor = this.initialColor;
  }
}
```

### Dodanie animacji slide left, slide right

```js
class InteractiveImage {
    constructor(img, x, y) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = img.width;
        this.height = img.height;
        this.isGray = false;
        this.initialColor = color(255, 255, 255);
        this.tintColor = this.initialColor;
        this.animation = false;
    }

    display() {
        tint(this.tintColor);
        image(img, this.x, this.y, width, height, 0, 0, img.width, img.height, CONTAIN);

        noTint();
        if (this.isGray) {
            filter(GRAY);
        }
    }

    toggleGrayFilter() {
        this.isGray = !this.isGray;
    }

    applyRandomTint() {
        this.tintColor = color(random(255), random(255), random(255));
    }

    slideRight() {
        if(this.x > width) {
            this.x = -width;
        }
        this.x += 1;
    }

    slideLeft() {
        if(this.x < -width) {
            this.x = width;
        }
        this.x -= 1;
    }

    removeTint() {
        this.tintColor = this.initialColor;
    }

    startAnimation(direction) {
        this.animation = direction;
    }

    stopAnimation() {
        this.animation = false;
    }

    isTintActive() {
        return this.tintColor === this.initialColor;
    }
}

```

### Dodanie obsługi gestów
```js
function mouseDragged(event) {
  if(event.movementX < 0) {
     imageObject.startAnimation('left');    
  }
  
  if(event.movementX > 0) {
      imageObject.startAnimation('right');    
  }
  
  return false;
}
```

### Materiały z zajęć: 
https://editor.p5js.org/DBulinski/sketches/il3JJTfMX
