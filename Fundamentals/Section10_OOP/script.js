"use strict";

console.log("Coding Challenge OOP #1");

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUSA(elem) {
    this._speed = elem * 1.6;
  }
}

const bmw = new CarCl("bmw", 100);
console.log(bmw);

console.log(bmw.speedUS);
bmw.speedUSA = 100;
console.log(bmw);

// Car.prototype.accelerate = function () {
//   this.speed = Number(this.speed) + 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed = Number(this.speed) - 5;
//   console.log(this.speed);
// };

// const bmw = new Car("bmw", 100);
// const merc = new Car("mercedez", 200);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// merc.accelerate();

// const num1 = 989;
// const num2 = 1000;
// const num3 = 12200;
// const num4 = 1001;
// const num5 = 10001;

// const numPalindrome = (num) => {
//   const numWork = `${num}`;

//   if (numWork.length % 2 === 0) {
//     console.log("length is even");

//     const centerPos = Math.round(numWork.length / 2) - 1;

//     console.log(centerPos);
//   } else {
//     console.log("length is odd");

//     const centerPos = Math.round(numWork.length / 2) - 1;

//     let numIncrements = Math.floor(numWork.length / 2);
//     console.log(numIncrements);
//     console.log(numWork[1] == numWork[3]);

//     let incrementCounter = 1;

//     while (numIncrements >= 0) {
//       let i = centerPos;
//       if (numWork[i - incrementCounter] == numWork[i + incrementCounter]) {
//         numIncrements--;
//         incrementCounter++;
//       } else {
//         return console.log("Num is not a palindrome");
//       }
//     }
//     return console.log("Num is a palindrome");
//   }
// };

// numPalindrome(55551);
