'use strict';

document
  .querySelector('.check')
  .addEventListener('click', () =>
    console.log(document.querySelector('.guess').value)
  );

document
  .querySelector('.again')
  .addEventListener(
    'click',
    () =>
      (document.querySelector('.number').textContent = Math.trunc(
        Math.random() * 20
      ))
  );

document.addEventListener('keydown', e => {
  console.log(e);
});

console.log('Hello World');
const obj = {
  name: 'hi',
  openingHours: {
    thu: {
      open: 12,
      close: 15,
    },
    fri: {
      open: 12,
      close: 11,
    },
  },
};

// const { name, openingHours } = obj;
// console.log(name, openingHours);

// const {
//   thu: { open, close },
// } = openingHours;
// console.log(open, close);

// const testfn = ({ name, openingHours: { thu, fri } }) => {
//   console.log(name, thu, fri);
// };

// testfn(obj);

const obj1 = { name: 'Chinmay', menu: ['a', 'b', 'c', 'd', 'e'] };

const [x, y, ...restex] = [...obj1.menu];
console.log(restex);

console.log(obj1.menu);
console.log(...obj1.menu);
