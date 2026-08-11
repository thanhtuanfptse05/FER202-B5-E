export class Shape {
  constructor(color) {
    this.color = color;
  }

  getArea() {
    return 0;
  }

  toString() {
    return `Shape[color=${this.color}]`;
  }
}

export class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `Rectangle[color=${this.color}, length=${this.length}, width=${this.width}]`;
  }
}

export class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }

  toString() {
    return `Triangle[color=${this.color}, base=${this.base}, height=${this.height}]`;
  }
}

export const rectangle = new Rectangle("red", 10, 5);
export const triangle = new Triangle("blue", 8, 6);
