let dolphinsScores = [96,108,89];
let koalasScores = [109,95,123];

console.log(dolphinsScores);

let dolphinAvg = 0;
let koalasAvg = 0;

for (let i=0;i<dolphinsScores.length;i++) {
    console.log(dolphinsScores[i]);
    dolphinAvg += dolphinsScores[i];
    koalasAvg += koalasScores[i];
}


koalasAvg = koalasAvg/koalasScores.length;
dolphinAvg = dolphinAvg / dolphinsScores.length;

console.log(dolphinAvg);
console.log(koalasAvg);

if (dolphinAvg>koalasAvg){
    console.log(`The winner is Dolphins`)
}
else if (dolphinAvg<koalasAvg){
    console.log(`The winner is Koalas`)
}
else if (dolphinAvg===koalasAvg){
    console.log(`It is a draw`)
}


let bill = 275;
let tip = bill >= 50 && bill <=300 ? .15 : .20;

console.log(`The bill is ${bill} and the tip is ${tip*100}%. The final value is ${bill*tip+bill}$!`);