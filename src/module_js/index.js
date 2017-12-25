import '../less/index.less';
import './student.js';
var abc = 123;
console.log(123);

let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
 
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}