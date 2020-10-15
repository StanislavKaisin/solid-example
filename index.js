// Single Responsibiity Principle
/*
console.log("Single Responsibiity Principle");
class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }
  // wrong !!!
  // toHTML() {
  //   return `
  //   <div>
  //   <h1>${this.title}</h1>
  //   <p>${this.text}</p>
  //   </div>
  //   `;
  // }
  // toJSON() {
  //   return JSON.stringify(
  //     {
  //       title: this.title,
  //       text: this.text,
  //       modified: this.modified,
  //     },
  //     null,
  //     2
  //   );
  // }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }
  html() {
    return `
    <div>
      <h1>${this.news.title}</h1>
      <p>${this.news.text}</p>
    </div>
    `;
  }
  json() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified,
      },
      null,
      2
    );
  }
  xml() {
    return `
    <news>
      <title>${this.news.title}</title>
      <text>${this.news.text}</text>
    </news>
    `;
  }
}

const news = new News("died", "putin died with other moscovites");

const printer = new NewsPrinter(news);

console.log("news=", news);
// console.log("news.toHTML()=", news.toHTML());
// console.log("news.toJSON()=", news.toJSON());
console.log("printer=", printer);
console.log("printer.html()=", printer.html());
console.log("printer.xml()=", printer.xml());
console.log("printer.json()=", printer.json());
*/
/*
// Open Close Principle
console.log("Open Close Principle");

class Shape {
  area() {
    throw new Error("Area method should be implemented");
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    // this.type = "square";
    this.size = size;
  }
  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    // this.type = "circle";
    this.radius = radius;
  }
  area() {
    return this.radius ** 2 * Math.PI;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    // this.type = "rectangle";
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class RectTriangle extends Shape {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }
  area() {
    return 0.5 * this.a * this.b;
  }
}

const circle = new Circle(5);
console.log("circle=", circle);

class AreaCalcuator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }
  sum() {
    return this.shapes.reduce((acc, shape) => {
      //wrong!!!
      // if (shape.type === "circle") {
      //   acc += shape.radius ** 2 * Math.PI;
      // } else if (shape.type === "square") {
      //   acc += shape.size ** 2;
      // } else if (shape.type === "rectangle") {
      //   acc += shape.width * shape.height;
      // }
      acc += shape.area();
      return acc;
    }, 0);
  }
}

const calc = new AreaCalcuator([
  new Square(10),
  new Circle(1),
  new Circle(5),
  new Rectangle(10, 1),
  new RectTriangle(30, 40),
]);

console.log("calc.sum()=", calc.sum());
*/

// Liskov Substitution Principle

console.log("Liskov Substitution Principle");
/*
class Person {
  // wrong !!!
  // access() {
  //   console.log("You have access");
  // }
}

class Member extends Person {
  access() {
    console.log("You have access");
  }
}

class Guest extends Person {
  isGuest = true;
}

// class Frontend extends Person {
class Frontend extends Member {
  canCreateFrontend() {}
}

// class Backend extends Person {
class Backend extends Member {
  canCreateBackend() {}
}

// class PersonFromDifferentCompany extends Person {
class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error("You have not access!");
  }
}

function openSecreteDoor(person) {
  person.access();
}

openSecreteDoor(new Frontend());
openSecreteDoor(new Backend());
// wrong !!!
// openSecreteDoor(new PersonFromDifferentCompany());
*/

class Component {
  // wrong !!!
  // render() {
  //   return `<div>Component</div>`;
  // }
  isComponent = true;
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`;
  }
}

class HigherOrderComponent extends Component {}

// class HeaderComponent extends Component {
class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

// class FooterComponent extends Component {
class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

// class HOC extends Component {
class HOC extends HigherOrderComponent {
  render() {
    throw new Error("Render is impossible");
  }

  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }
}

function renderCoponent(component) {
  // return component.render();
  console.log(component.render());
}

renderCoponent(new HeaderComponent());
renderCoponent(new FooterComponent());
renderCoponent(new HOC());
