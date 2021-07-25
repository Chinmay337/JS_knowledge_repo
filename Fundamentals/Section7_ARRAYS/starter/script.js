'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

console.log('hello');

// const calcAverageHumanAge = ages => {
//   const humanAge = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     // .map(age => {
//     //   if (age <= 2) {
//     //     return 2 * age;
//     //   } else if (age > 2) {
//     //     return 16 + age * 4;
//     //   }
//     // })
//     .filter(a => {
//       return a >= 18;
//     });
//   console.log(humanAge);
// };

// const array1 = [5, 2, 4, 1, 15, 8, 3];
// calcAverageHumanAge(array1);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((elem, index) => {
  elem.recommendedFood = Math.round(elem.weight ** 0.75 * 28);
});

console.log(dogs);

const sarahDog = dogs.find((elem, index) => elem.owners.includes('Sarah'));

console.log(sarahDog);
console.log(
  `${
    Number(sarahDog.curFood) > Number(sarahDog.recommendedFood)
      ? 'Sarahs dog is eating enough food'
      : 'Sar dog is not enough food'
  }`
);

console.log(sarahDog.recommendedFood);

const dogEatHigh = dogs.filter(elem => elem.curFood > elem.recommendedFood);
console.log(dogEatHigh);
const dogEatLow = dogs.filter(elem => elem.curFood < elem.recommendedFood);

const dogEat = dogEatHigh.concat(dogEatLow);
console.log(dogEat);

const dogNewArray = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogNewArray);
