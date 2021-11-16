// const request = new XMLHttpRequest();
// request.open("GET", "https://animechan.vercel.app/api/random");
// request.send();
// const elem = document.querySelector(".anime");

// request.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);

//   console.log(data); // data will be a JSON object of all of the info about portugal with name, flag image, etc.

//   // Creating an HTML element from the response data

//   const html = `
//     <div>
//     ${data.quote}
//     </div>
//         `;
//   elem.innerHTML = html;
// });

// const whereAmI = function (lat, long) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then((res) => {
//       console.log(res);

//       if (!res.ok) throw new Error("Too many reqs");
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       insertHtml(data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// // https://geocode.xyz/52.508,13.381?geoit=json

// whereAmI(52.508, 13.381);

// const x = document.querySelector(".oop");

// const insertHtml = (data) => {
//   x.innerHTML = data.region;
// };

// https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg

//Coding challenge 2 - importanT
const imgContainer = document.querySelector(".imgClass");

// const createImage = (imgPath) => {
//   return new Promise(function (resolve, reject) {
//     imgContainer.src = imgPath;

//     imgContainer.addEventListener("load", () => {
//       resolve(imgContainer); //this will mark the promise as successful}
//     });

//     imgContainer.addEventListener("error", () => {
//       reject(new Error("Image Not Found"));
//     });
//     //resolve('Hello');
//     //reject("Bye");
//   });
// };

// createImage(
//   "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
// ).then((msg) => console.log(msg));

// leetcode PlusOne question

// var plusOne = function (digits) {
//   let testArr = [...digits];
//   let workingNum = "";

//   testArr.forEach((int) => {
//     workingNum += String(int);
//   });

//   console.log(workingNum);

//   if (workingNum.length < 9) {
//     workingNum = Number(workingNum) + 1;
//     console.log(workingNum);

//     let testNum = String(workingNum);

//     console.log(testNum);

//     let finalArr = [];

//     for (let i = 0; i < testNum.length; i++) {
//       finalArr.push(testNum[i]);
//     }
//     console.log(finalArr);
//     return finalArr;
//   } else {
//     workingNum = BigInt(workingNum);
//     console.log(workingNum);

//     let testNum = String(workingNum + 1n);

//     console.log(testNum);
//     let finalArr = [];

//     for (let i = 0; i < testNum.length; i++) {
//       finalArr.push(testNum[i]);
//     }
//     console.log(finalArr);
//     return finalArr;
//   }
// };

// Way better solution

// var plusOne = function (digits) {
//   let testArr = [...digits];

//   // This starts with the last digit and keeps updating it to 0 if it is 9.
//   // The loop will run for consecutive 9's.
//   // As soon as it reaches a digit that is not 9, the loop hits the else and breaks and returns the solution
//   for (let i = testArr.length - 1; i >= 0; i--) {
//     if (testArr[i] === 9) {
//       testArr[i] = 0;
//     } else {
//       testArr[i]++;
//       return testArr;
//     }
//   }

//   return [1, ...testArr];
// };
// console.log(plusOne([1, 2, 3]));

// console.log(plusOne([1, 9, 9]));

// console.log(plusOne([1, 2, 9]));

// console.log(plusOne([2, 9, 9, 1, 9, 9]));

// console.log(plusOne([9, 9, 9]));

// console.log(plusOne([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// console.log(plusOne([9, 1, 9, 9, 0, 9, 9]));
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let testPrices = [...prices];
  let finalArr = [];

  let profit = 0;

  let lowPrice = Math.min(...testPrices);
  let maxPrice = Math.max(...testPrices);

  console.log(lowPrice);
  console.log(maxPrice);
};

maxProfit([7, 1, 5, 3, 6, 4]);

maxProfit([7, 2, 4, 3, 1]);

maxProfit([1, 1, 1, 1]);

maxProfit([1, 4, 3, 9]);
