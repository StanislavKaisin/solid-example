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

// Open Close Principle
console.log("Open Close Principle");
