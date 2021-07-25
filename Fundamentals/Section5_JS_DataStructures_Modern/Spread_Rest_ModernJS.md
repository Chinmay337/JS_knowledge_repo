# Data Structures, Modern Operators, Strings

- [Data Structures, Modern Operators, Strings](#data-structures-modern-operators-strings)
- [Array Destructuring](#array-destructuring)
- [Object Destructuring](#object-destructuring)
    - [**Destructuring Nested Objects**](#destructuring-nested-objects)
- [Spread Operator (...)](#spread-operator-)
  - [**Spread (...) on strings**](#spread--on-strings)
  - [**Spread important illustration**](#spread-important-illustration)
  - [Spread on Objects (ES2018)](#spread-on-objects-es2018)
- [Rest Pattern](#rest-pattern)
  - [**Rest / Spread operator and Functions**](#rest--spread-operator-and-functions)
- [&& and ||](#-and-)
    - [||](#)
    - [&&](#-1)
  - [**?? Nullish Coalescing Operator**](#-nullish-coalescing-operator)

# Array Destructuring

- **If we want to assign elements of an array to their own variable, we can use array destructuring.**
  Example:

```
const arrayDestructure = [1,4,5]

# To destructure elements to x , y , z

const [x,y,z] = arrayDestructure;
```

- To skip elements of an array and destructure
  <br/>
  Example:

```
const arrayx = [1,5,10]

const [a , , b] = arrayx;

console.log(a,b);
# Console log wIll return 1 10

```

- **_Trick to reassign variables_**
  <br/>

```
# assuming variables are already defined

[first , second] = [second , first]
```

- **Destructuring nested arrays**
  <br/>
  <br/>
  Example:

```
const arrayx = [1, 10 , [4,6,6] ];

const [i, , [x,y,z]] = arrayx;

console.log(i, x , y , z);

// Will return 1 4 6 6

```

- **Destructuring Default Values**

Example:

```
const [p, q , r] = [8 , 9];

r will be undefined

using default values

const [p=1, q=1 , r=1] = [8,9];

r will be 1 , but p and q will be assigned to 8 and 9

```

# Object Destructuring

- use curly braces {} to destructure objects
  Ex:

```
const objectx = {
    name: 'TestName',
    location: 'Address',
    categories: ['a', 'b' , 'c'],
    openingHours: {
        thu: {
            open: 12,
            close: 15,
        },
        fri: {
            open: 8,
            close:11,
        }
    }

}

# Destructuring elements of object

const {name , categories, openingHours} = objectx;

# If we want to rename the object properties (variables)

const {name: testname, categories: ourcategories, openingHours: ourHours } = objectx;
```

- Destructuring objects by changing variable name and using default values

Ex:

```
const {name: testname = [], categories: ourCategories=[] };
```

- **If variables of object already exist outside of the object, we need to use parenthesis () to destructure**

Example:

```
let a = 100;
let b = 200;

# We also have an object with properties a & b:

const obj = {a:12, b:15};

Using standard destructuring,
{a,b} = obj;
OR
const {a,b}=obj;
Will return with an error because variables are already defined.

Wrapping in parenthesis solves the problem
Solution:
({a,b}) = obj;
```

### **Destructuring Nested Objects**

If we have a nested object such as openingHours

```
const objectx = {
    name: 'TestName',
    location: 'Address',
    categories: ['a', 'b' , 'c'],
    openingHours: {
        thu: {
            open: 12,
            close: 15,
        },
        fri: {
            open: 8,
            close:11,
        }
    }

}
```

```
const {name,openingHours} = objectx;
openingHours will hold the openingHours object from objectx

# If we wanted to assign the nested variables of the fri object inside the openingHours object:
const {fri:{open, close} } = openingHours;
```

**_Destructuring nested objects within functions_**

- We can destructure an object directly when it is passed as a parameter
- function (object) => console.log(object) ;
- Using array destructuring, we can write it as
- function ( { objprop1, objprop2 } ) => console.log(objprop1, objprop2);

```
Ex, if we have an array called obj :
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

And we have a function that accepts obj as a parameter:
const testfn = (objectx) => {
  console.log(objectx);
};
testfn(obj); # Will return our obj

We can destructure the object directly to use the properties of the object in our function

const testfn = ({ name, openingHours: { thu, fri } }) => {
  console.log(name, thu, fri);
};

testfn(obj);
```

# Spread Operator (...)

```
const origArray = [1,2,3];

const spreadArray = [9 , 10 , ...origArray]

...origArray adds the first array to the new array
```

- console.log(origArray) will print out [1,2,3]
- console.log(...origArray) will print out 1 2 3 (individual elements)
- **Spread operator Works on all iterables - arrays, strings, maps, sets, NOT objects**
- **_Update: Since 2018, spread also works on objects_**
- **_Spread operator is useful in building arrays and passing values to a function, not useful for template literals_**

## **Spread (...) on strings**

```
const str = "Chinmay";
const letters = [...str]

# letters wil contain C , h , i , n , m , a , y
```

## **Spread important illustration**

```
const testarray = [1, 2, 3, 4, 5, 6];
const [a, b, c] = testarray;

console.log(a,b,c);
a will be 1 , b will be 2, c will be 3

If we write same but with the brackets []

const testarray = [1, 2, 3, 4, 5, 6];

const [a, b, c] = [testarray] ;

console.log(a,b,c);
a will contain the entire testarray 1-6 and b and c will be undefined
```

**Using _prompt_ to get an array with multiple responses**

```
const ingredients =
[ prompt("Ingredient 1?"),
prompt("Ingredient 2?"),
prompt("Ingredient 3?"),
 ] ;
```

## Spread on Objects (ES2018)

```
const newRestaurant = {...restaurant, founder:'Guiseppe'};

Copies all the properties and values of objects to the new object newRestaurant
```

# Rest Pattern

- Does the opposite of the spread operator
- Spread : unpack an array , Rest : pack an array
- Spread is on Right HS ... , while Rest is on Left HS ...
- **Rest must be the last element of an expression/statement.**
- We cannot use _const [x,y,...restexample , z];_ only _[x,y, ...restexample ]_ is valid

**_Rest Example_**

```
const [a , b , ...restexample] = [1 , 2 , 3 , 4 ,5];

restexample will store the remaining values not assigned to variables during deconstructing the array.
console.log(restexample) will return [3,4,5]

```

**_Rest and Spread combined example_**

```
# Initial object:
const obj = { name:'Chinmay',
menu: ['a', 'b', 'c', 'd', 'e']
} ;

# Destructuring array within the object

const [x , y , ...restex] = [ ...obj.menu ] ;
// Above will assign 'a' to x , 'b' to y , 'c','d','e' to restex

If we used the syntax
const [x , y , ...restex] = [ obj.menu ];
// Above will assign the entire obj.menu array to x, y and restex will be undefined.


```

## **Rest / Spread operator and Functions**

- We can use the rest operator to accept several parameters in a function
- We can write the rest operator within the parameters for our function and this will pack all of the params provided while calling the function!
- if our f'n is :

```
const sumNums = function (...nums) { console.log(nums); };
sumNums(1,2,3,4,5);
```

- 1,2,3,4,5 will get packed into the array nums

**Example:**

```
We have a function that will accept any amount of numbers as an argument
const sumfn = (...numbers) => {console.log(numbers); }

We can call this as sumfn(1,2,3) or sumfn(1,5,1,3,5,5,103) and the parameters will be stored to the numbers variable

To sum all of the numbers using the function , we can write sumfn as :

const sumfn = (...numbers) => {
  let sum = 0;
  for (let i=0; i < numbers.length ; i++) {
    sum += numbers[i];
  }
}
```

- **Spread** : used where we would write values separated by commas
- **Rest** : used where we would write variables separated by commmas

# && and ||

### ||

- **console.log(3 || 'Chinmay' );** returns 3 , both values Truthy
- **console.log('' || 'Chinmay');** returns 'Chinmay' , '' is a falsy value
- **console.log(true || 0);** returns true because true is Truthy
- **console.log(undefined || null);** returns undefined , both values Falsy

**Important use case:**

```
const guests = numGuests ? numGuests : 10 ;

#Above statement will set guests to numGuests if numGuests exists or 10 if numGuests does not exist.

We can use the || operator's falsy truthy logic to make the above statement shorter:

const guests = numGuests || 10;

# if numGuests does not exist, it will be a Falsy value and return 10 instead.

NOTE: 0 is a falsy value, so if the number of guests is 0, our solution will not work.
```

### &&

- **console.log(0 && 'Chinmay')** # returns 0 because since 0 is falsy, the execution stops and the first value is returned
- **console.log(7 && 'Chinmay')** # returns 'Chinmay' since both values are Truthy and the entire statement is executed and the last value is returned
- **console.log('Hello' && 23 && null && 'chinmay')** # will return null because the execution halts at null since it is falsy and the entire execution will evaluate to false anyway
  <br/>
  <br/>

## **?? Nullish Coalescing Operator**

- The nullish operator includes scope for '' and 0
- Will not consider '' or 0 to be falsy values

```
const numGuests = 0;

const guests = numGuests || 10;
#Guests will be 10 because 0 is considered Falsy by ||

const guests = numGuests ?? 10;
#Guests will be equal to numGuests which is equal to 0 because the nullish coalescing operator does not consider 0 or '' to be falsy values
```

**Usage of &&**

- If we had two numbers, a = 1 and b = 5 and we wanted to print if a is smaller than b without an if/else Statement :

<br/>
Example:

```
let a = 1;
let b = 5;

a < b && console.log('A is smaller than B');

&& operator only evaluates the second condition if the first one is True

```
