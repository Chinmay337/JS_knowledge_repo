'use strict';

// document
//   .querySelector('.check')
//   .addEventListener('click', () =>
//     console.log(document.querySelector('.guess').value)
//   );

// document
//   .querySelector('.again')
//   .addEventListener(
//     'click',
//     () =>
//       (document.querySelector('.number').textContent = Math.trunc(
//         Math.random() * 20
//       ))
//   );

// document.addEventListener('keydown', e => {
//   console.log(e);
// });

// console.log('Hello World');
// const obj = {
//   name: 'hi',
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 15,
//     },
//     fri: {
//       open: 12,
//       close: 11,
//     },
//   },
// };

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

// const obj1 = { name: 'Chinmay', menu: ['a', 'b', 'c', 'd', 'e'] };

// const [x, y, ...restex] = [...obj1.menu];
// console.log(restex);

// console.log(obj1.menu);
// console.log(...obj1.menu);
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// console.log(Object.entries(game.players[0]));

// const playerIndex = Object.entries(game.players[0]);
// for (const [i, k] of playerIndex) console.log(i, k);

// //Task 1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];

// console.log(players1);
// console.log(players2);

// //Task 2
// const [gk, ...fieldPlayers] = [players1];
// console.log(gk);

// //Task 3
// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log('Task 3', allPlayers);

// //Task 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log('Task 4', players1Final);

// //Task 5
// const { team1, x: draw, team2 } = game.odds;
// console.log('Task 5', team1, draw, team2);

// // Destructuring Scores
// const [...scores] = [...game.scored];

// //Task 6
// const printGoals = (...players) => {
//   console.log(scores);
//   console.log(players);
//   console.log('The following players scored goals :');
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
//   console.log(`The total numbers of goals scored was ${players.length}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...scores);

// // Task 7

// const winner = team1 < team2;

// const trueWinner = winner || 'Team 2 is ';

// const menu = ['Peppers', 'Onions', 'Tomatoes', 'Garlic'];

// for (const x of menu.entries()) {
//   const [i, k] = x;
//   console.log(`Item num ${i} is ${k} `);
// }

// const testarray = [1, 2, 3, 4, 5, 6];
// const [a, b, c] = testarray;
// console.log(a);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// console.log(game.scored);

// //Task 1
// const loop1 = Object.entries(game.scored);

// for (const [goal, player] of loop1) {
//   console.log(`Goal ${Number(goal) + 1} : ${player}`);
// }

// // Task 2
// const loop2 = Object.values(game.odds);
// let total = 0;
// for (let x = 0; x < loop2.length; x++) {
//   total += loop2[x];
// }
// console.log(total / loop2.length);

// // Task 3
// const loop3 = Object.entries(game.odds);
// for (const [key, value] of loop3) {
//   const tempvar = 'game' + '.' + key;
//   console.log(tempvar);
//   console.log(`Odds of victory ${tempvar} `);
// }
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key} : ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key} : ${value}`);
//   }
// }

// const stringx = 'aaaaa';
// const upstring = stringx.replaceAll('a', 'b');
console.log('hello');
document.body.append(document.createElement('textarea'));
const text1 = document.querySelector('textarea');
text1.textContent =
  'underscore_case\nfirst_name\nSome_Variable\n calculate_AGE\ndelayed_departure';
document.body.append(document.createElement('button'));

// const samplearray = text1.textContent.split('\n');
// console.log(samplearray);

// for (const z of samplearray) {
//   const q = z.split('_');
//   console.log(q);
//   const k = q[0] + q[1][0].toUpperCase() + q[1].slice(1);
//   console.log(k);
// }

document.querySelector('button').addEventListener('click', () => {
  const solution1 = text1.textContent.split('\n');
  const newArray = [];
  const finalArray = [];
  for (const x of solution1) {
    const a = x.trim().toLowerCase();
    newArray.push(a);
  }
  for (const z of newArray) {
    const q = z.split('_');
    console.log(q);
    const k = q[0] + q[1][0].toUpperCase() + q[1].slice(1);
    console.log(k);
    finalArray.push(k);
  }

  return finalArray;
});
