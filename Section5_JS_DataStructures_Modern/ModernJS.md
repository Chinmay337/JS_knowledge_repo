# Data Structures, Modern Operators, Strings

- [Data Structures, Modern Operators, Strings](#data-structures-modern-operators-strings)
- [Array Destructuring](#array-destructuring)
- [Object Destructuring](#object-destructuring)
    - [**Destructuring Nested Objects**](#destructuring-nested-objects)
- [Spread Operator (...)](#spread-operator-)
  - [**Spread (...) on strings**](#spread--on-strings)
  - [Spread on Objects (ES2018)](#spread-on-objects-es2018)
- [Rest Pattern](#rest-pattern)
  - [**Rest / Spread operator and Functions**](#rest--spread-operator-and-functions)
- [&& and ||](#-and-)

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
