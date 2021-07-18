 # Table of Contents
 1. [Variables](#Vars)
 2. [Operator Precedence](#operator-precedence)
 3. [Template Literal](#template-literal)
 4. [If Else](#if-else)
 5. [Type Conversion & Coercion](#type-conversion--coercion)
 6. [ Equality Operators ](#equality-operators)
 7. [Switch](#switch-statement)
 8. [Ternary Operator](#ternary-operator)


<br />

# Vars
## **Var was introduced in ES5, Const and Let was introduced in ES6**

## Const
~~~
Cannot declare empty const variable.
const job; #Returns SyntaxError
~~~

### **Never use var to declare variables.**  <br />
<br />

### If we simply declare a variable such as:
> lastName = 'Test';

### This will create a property on the global object. BAD
<br />

# Operator Precedence

[Operator Precedence](http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html)

~~~
Assignment right right to left. 
Ex: 
x = y = 5 + 10;
Evalues to !5 first, then y = 15, then x = 15
~~~

# Template-Literal
~~~
Usage:
const jonasNew = `I'm ${firstName}`;
console.log(jonasNew);
~~~

### Newline with template literals
~~~
Without literals:
console.log('String with \n\
multiple \n\
lines');

Using Literals:
console.log(`String 
multiple
lines`)
Simply write it with the newline!
~~~


# If Else

~~~

if (condition) { code block }
If the (condition) is true, then code gets executed

if (condition) { code block }
else {code block} 

The else block gets executed if (condition) evaluates to False

~~~

Example of correct usage of let and wrong usage:

~~~
const birthYear = 1999;
if (birthYear <=2000){
    let century = 20;
}
else {
    let century=21;
}
console.log(century) # will return error as century is limited to the if-else block

#Correct usage:
const birthYear = 1999;

let century;
if (birthYear <=2000){
    century = 20;
}
else {
    century=21;
}
console.log(century)
~~~

# Type Conversion & Coercion
## Type Conversion
**Converting string to number**
``` 
Use Number(var) function.
Usage: Number(var); returns converted number

const inputYear = '1991'
console.log(Number(inputYear)); #returns 1991

console.log(Number('Chinmay')); # returns NaN - Not a Number 
```
**Converting number to string**
```
Use String() function
Usage:
console.log(String(23)); # Returns '23'
```

## Type Coercion

```
console.log('I am ' + 23 + ' years old');

console.log('23' - '10' - 3); # Returns 10 because conversion happens from string to Num
console.log('23' + '10' + 3); # Returns 23103 because + operator has special behavior, converts all numbers to strings

console.log('23'/'2'); returns 11.5 because strings are converted to numbers for divison, multiplication, comparsion
```

*Whenever there is an operation between a string and a number, JS converts the result into a string.*
<br/>

## Truthy and Falsy Values

### In JS, there are 5 falsy values:
~~~
1. 0
2. ''
3. Undefined
4. null
5. NaN
~~~

**Definition of Falsy Value - Values that are converted to false when we try to convert them to a BOOLEAN.**

~~~
console.log(Boolean(0));  #returns  False
console.log(Boolean(undefined));  #returns  False
console.log(Boolean({}));  #returns  True
console.log(Boolean(''));  #returns  False
~~~  

Example of Falsy in action:
~~~
const money = 0;
if (money) {
    console.log("Dont spend it all");
}
else {
    console.log("Get a job!");
}

The else block is executed if money = 0. For other blocks, the if block is executed.
~~~

Example 2:
~~~
let height;
if (height){
    console.log("Defined!");
}
else {
    console.log("Undefined");
}

The else block is executed because height is undefined and undefied is Falsy.
~~~

# Equality Operators

**=== : Strict equality. *Always Recommended* <br/>  == : Loose equality.**

## Boolean Logic

*Applies not only to JS, but all programming.*
<br/>

~~~
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); returns TRUE. 
true && true = true

true && false = false

true || false = true 

false || false = false , true || true = true

!var inverts value of var from TRUE/FALSE.
console.log(!hasDriversLicense); returns FALSE 

~~~

# Switch Statement
~~~
let varName = 1;
switch (varName) {
    case value1:
        console.log('condition good');
        break;
    case value2:
        console.log('cool');
        break;
    default:
        console.log('This is the default case');
}

# To share cases for outcomes

switch (varName){
    case 1:
    case 2:
    case 3:
        console.log('Nice');
        break;
}
~~~

# Statements and Expression

~~~
Expressions : Give us values
3+4 
1991 
true && false && !false 

Statements : Does not give us a value. 
if..else block and switch block is a STATEMENT. 
~~~

# Ternary Operator

~~~
const age = 23;
age >= 18 ? console.log('I am 😊') : console.log('Pepefeels 👌')

(expression) ? code if true : code if false 
~~~

```
Example of assignment with Ternary

const drink = age >= 18 ? 'wine' : 'water' ;
console.log(drink); Will return 'wine'
```

### **We can use Ternary operators in Template literals. We cannot use if-else statement in template literal.**<br/>
### *Ternary operator is an expression, whereas if else block is a statement.*

~~~
console.log(`I like to drink ${age>=18 ? 'wine' : 'Water'} !`);
~~~








