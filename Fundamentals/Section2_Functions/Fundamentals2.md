# Fundamentals - Functions + more

- [Fundamentals - Functions + more](#fundamentals---functions--more)
  - [Activating Strict Mode](#activating-strict-mode)
- [Functions](#functions)
  - [Arrow functions](#arrow-functions)
    - [Explicitly include the return keyword When we need multi lines of code and need to choose what to return:](#explicitly-include-the-return-keyword-when-we-need-multi-lines-of-code-and-need-to-choose-what-to-return)
- [Arrays](#arrays)
  - [Array Methods](#array-methods)
- [Objects](#objects)
  - [Object Methods](#object-methods)
- [For Loops](#for-loops)
  - [**Continue Statement**](#continue-statement)
  - [Looping Backwards](#looping-backwards)
  - [Nested For Loops](#nested-for-loops)
- [While Loop](#while-loop)
  - [**_Using a while loop to simulate dice rolls:_**](#using-a-while-loop-to-simulate-dice-rolls)

### Activating Strict Mode

```
As the first statement, include :
'use strict';

Ensures security and easier debugging. Prevents us to do certain things.
ex: const interface = 'Audio'; will return a SyntaxError because JS is reserving the interface keyword for future use. (without strict mode the code will not return an error)
```

# Functions

```
Ways of writing functions

1. Without assignment : FUNCTIONAL DECLARATION
function calcAge (age) {
    return 2050-age;
}

2. With assignment : FUNCTION EXPRESSION (anonymous function- no name)
const calcAge = function (age) {
    return 2050-age;
}
# Calling above functions : calcAge(num);
Function 1 can be called before it is defined.
F'n 2 cannot be called before it is defined.
```

## Arrow functions

```
const calcAge = birthYear => 2050 - birthYear; SPECIAL FUNCTION EXPRESSION

The return is implicit. In above f'n, 2050 - birthYear is returned.
```

### Explicitly include the return keyword When we need multi lines of code and need to choose what to return:

```
const calcAge = birthYear => {
    const age = 2050 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

If we have multiple params, we need to include a round bracket around params
const yearsUntilRetirement = (birthYear, firsTName) => {
        const age = 2050 - birthYear;
        const retirement = 65 - age;
        return `${firstName} retires in ${retirement} years.` ;
}
```

**Arrow functions do not get a THIS keyword.**

**Calling functions from a function:**

```
const cutPieces = function (fruitPieces) {
    return fruitPieces * 4;
}

const fruitProcessor = function (apples , oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    return `You have ${applePieces} apple pieces and ${orangePieces} orange pieces.`
}
```

**Return statement can be conditionally rendered.**

> The return statement also instantly exits the function after it is invoked.
> **Example**

```
const yearsUntilRetirement = function (years,firstName) {
    const age = 2050 - years;
    const retirement = 65 - age;

    if (retirement>0) {
        return retirement;
    }
    else {
        return -1; # standard in programming languages to specify invalid
    }
}
```

# Arrays

```
Array notation:

const array_name = ['elem1','elem2','elem3'];

Alternate notation:

const array_name = new Array('elem1', 'elem2');
```

**Arrays can be mutated even if they are declared with const. Only primitive values are immutable in JS**

```
If we have array such as arr_name=[1,10,5]; and then do const x = arr_name + 10 the result will be:
"1,10,,510".
The + operator converts the array to a string and adds 10 to the end :(
```

## Array Methods

---

**push.()** : adds an element to the end of an array
<br/> The push function returns the length of the new array.

---

**unshift()** : adds an element to the beginnning of an array

> arr*name.unshift('John');
> \_Also returns the length of the new array*

---

**pop()** : removes the last element of an array

---

**shift()** : removes the first element of an array

---

**.indexOf(value)** : returns the index of the provided value from the array
<br/> If the element is not present, the function returns -1
<br/>

**.includes(value)** : returns a Boolean if the value is a part of the array. <br/> **_Uses strict equality for comparison (==) Does not do type conversion_**

```
const array_name = ['elem1','elem2','elem3'];
array_name.indexOf('elem1'); will return 0

array_name.includes('elem2'); will return True
```

---

**.concat** : Combines two arrays

> array3 = array1.concat(array2);

---

---

# Objects

**The order of the keys does not matter in objects.**

```
const object_name = {name: 'Chinmay' , lastName: 'Bhelke' };

Accessing lastName value :
console.log(object_name.lastName)  # dot notation
console.log(object_name['lastName']) # bracket notation

For bracket notation, we can include expressions in the []
example:
nameKey = 'Name';
console.log(object_name['`first+${nameKey}`'])
```

**For bracket notation, we need to specify the key as a STRING.**

**If we try to access an object property that does not exist, the result is undefined**

```
const object_name = {name: 'Chinmay' , lastName: 'Bhelke' };

console.log(object_name['address']); returns undefined
```

## Object Methods

**Objects can also contain functions as a property.**

```
# We need to specify the function as an expression assigned to the object key
const chin = { name: 'Chinmay',
lastName : 'Bhelke',
calcAge : function(birthYear) { return 2050-birthYear; }
}

Calling the function:
chin.calcAge(1996);  # dot notation
chin['calcAge'](1996);  # bracket notation
```

**_This_ keyword refers to the object calling the function**

```
Ex:
We have an object with a function:

const chin = { name: 'Chinmay',
lastName : 'Bhelke',
birthYear : 1996,
calcAge : function() { return 2050- this.birthYear; }
}

We can call the function by using :
chin.calcAge();
In order for the function expression defined in the key to reference birthYear, we need to include the this keyword!
```

```
We can also use the function and 'this' to compute a property and add it to our object:

const chin = { name: 'Chinmay',
lastName : 'Bhelke',
birthYear : 1996,
calcAge : function() {
    this.age = 2050- this.birthYear; }
}

chin.calcAge();

# Our new object will be:

const chin = { name: 'Chinmay',
lastName : 'Bhelke',
birthYear : 1996,
age: 25,
calcAge : function() {
    this.age = 2050- this.birthYear; }
}
```

# For Loops

```
for (let i=0; i<5 ; i++){
    console.log(i);
}
```

## **Continue Statement**

<br/>
We can specify a condition to make sure our for loop continues through the iteration but does not return errors for code.
Ex:

```
birthYears = ['a','b','c', 4];
for (let i =0; i<birthYears.length; i++) {

    if (typeof(birthYears[i]) !== 'string' ) continue;

    console.log(birthYears[i]);
}

Here, if the type of birthYear[i] is not a string, then we move on to the next iteration of the loop and the console.log() does not get executed!

In our array when it reaches the last value which is a number 4 , since it is not a string the code after the continue block will not get executed.
```

- Here, if the type of birthYear[i] is not a string, then we move on to the next iteration of the loop and the console.log() does not get executed!

- In our array when it reaches the last value which is a number 4 , since it is not a string the code after the continue block will not get executed.

**Break Statement**
<br/>
We can include a break statement to end the loop.

```
birthYears = [1,5,10];
for (let i =0; i<birthYears.length; i++) {

    if (typeof(birthYears[i]) === 'string' ) break;

    console.log(birthYears[i]);
}
```

## Looping Backwards

```
namesIndex = ['Chin','God','Pog'];

for (i = namesIndex.length-1; i >=0; i--) {
    console.log(namesIndex[i]);
}
```

## Nested For Loops

```
namesIndex = ['Chin','God','Pog'];

for (i = namesIndex.length-1; i >=0; i--) {
    console.log(namesIndex[i]);

    for (let k=namesIndex.length; k>0;i--)
    console.log(`${i} ${k}`)
}

This will return:
Pog 3
Pog 2
Pog 1
God 3
God 2
God 1
Chin 3
Chin 2
Chin 1
```

# While Loop

```
let rep = 1;

while (rep<=10) {
    console.log(rep);
    rep++;
}
```

**Generating Random Number**

```
Math.random() generates random decimal between 0 - 1
Math.trunc(number) rounds number to nearest integer

let dice = Math.trunc(Math.random() * 6) +1;
console.log(dice);

Math.random() * 6 generates a number between 1-5
```

**Math.random()** generates random decimal between 0 - 1 <br/>
**Math.trunc(number)** rounds number to nearest integer
<br/>

---

### **_Using a while loop to simulate dice rolls:_**

```
let dice = Math.trunc(Math.random() * 6) + 1  # gives us number between 1-6

while (dice !== 6) {
    console.log(`You rolled a ${dice});

    if (dice === 6) console.log(`Congrats on the 6!`);
}
```
