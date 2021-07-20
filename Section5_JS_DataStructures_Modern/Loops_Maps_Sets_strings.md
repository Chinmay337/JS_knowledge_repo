- [For Of Loop](#for-of-loop)
- [Object Literals ES6](#object-literals-es6)
- [Optional Chaining](#optional-chaining)
- [Looping over OBJECTS](#looping-over-objects)
- [Sets](#sets)
    - [**Transforming an array into an array of unique elements**](#transforming-an-array-into-an-array-of-unique-elements)
- [Maps](#maps)
  - [Maps Iteration](#maps-iteration)
- [Strings](#strings)
  - [Replacing Part of Strings](#replacing-part-of-strings)

# For Of Loop

**_Syntax_**

```
for (const item of array) console.log(item);
```

- **for (x of array) {console.log(x); }**
- Also supports continue and break functionality
- **Array.entries() method**
- Creates an array with index and element in the array.
- Each item of the array is transformed into a new array with index and original element

Example

```
const menu = ['Peppers','Onions','Tomatoes','Garlic'];

for (const x of menu) console.log(x); Will return menu items

# Entries()

Every item in the menu will now turn into an array such as [0, Peppers ] , [1, Onions]
Looping through menu.entries() using x, in every loop x will be [0, Peppers], [1, Onions], etc.
We can destructure the array assigned to x using const [i,k] = x;

for (const x of menu.entries() ) {
    const [i , k] = x;
    console.log(`Item num ${i} is {$k} `);
}

```

# Object Literals ES6

- When we write an object in code using {}, it is called an Object Literal

Previously if we had to write a function method to an object, we would have to write it as :

```
const es6obj = {
    name: 'Chinmay',
    funcOld : function(){} ,
 }
```

- Now we can write it directly:

```
const es6obj = {
    name: 'Chinmay',
    funcOld(){} ,
 }
```

# Optional Chaining

If we try to reference an object property that does not exist, we get errors in our code.

A solution for this is optional chaining - adding a ? after the property that might not exist

Example-

```
Imagine we have a restaurant object with openingHours for Tuesday and Friday

console.log(restaurant.openingHours.mon.open)

Returns an error because mon does not exist on the object

Using Optional Chaining:

console.log(restaurant.openingHours.mon?.open);

Returns undefined because mon does not exist.

```

**We can combine Optional Chaining and Nullish Coalescing**

- Optional chaining adds a ?. in front of the property/method and returns **undefined** if it does not exist
- Nullish coalescing accepts 0 and "" as Truthy values but will execute the right hand side of the expression if the lhs is undefined/null

Ex-

```
# We can use optional chaining on methods to check if they exist
console.log( restaurant.order?.('pizza') ?? 'Method does not exist' );

If the function method order() does not exist in restaurant , then the console.log will print 'Method does not exist'

```

**Simple Example Optional Chaining**

```
If we have an array with 1 object in it:

const testarray = [ { name : 'Chin' , age : 25 }  ] ;

We can use optional chaining to check if the array has a first element, if it has a first element then to print the name property of the first element, if not- print 'Array is Empty'

console.log(testarray[0]?.name ?? 'Array is Empty');

```

# Looping over OBJECTS

- **Object.keys(ourobject) returns an array of the keys of provided ourobject**
- We can use a for .. of loop to loop over the Object.keys(obj) array to essentially indirectly loop over our object
- **Object.values(ourobject) returns an array of the values of provided ourobject**
- **Object.entries(object) returns an array where each key-value of the object is stored as an array element within the array**

Ex-

```
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: ['Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski']
    } ;

const playerIndexes = Object.entries(game.players);

# playerIndexes will contain an array composed of 11 elements which are all arrays containing the index of the value and the value itself.
playerIndexes : [ [0, 'Pavard' ] , ... , [11,'Lewandowski'] ]

for (player of playerIndexes) { console.log(player) }
# Above for of loop would print the index and player one by one

#using deconstruction:
for ( [key,value] of playerIndexes ) {
    console.log(`${value} is player number ${index}`) ;
}
```

# Sets

- Introduced in ES6.
- A set of unique values
- **setname.size gives the length of the set, not length**
- **setname.has('setelement') returns a boolean if the set includes the element or not**
- Similar to the array.includes('element') method

To delete or add an element from the set

- **ordersSet.add('element');**
- **ordersSet.delete('element');**

```
const ordersSet = new Set (['Pasta','Pizza','Risotto','Pizza','Pasta',])

Sets can contain any type of element and are iterable

console.log(ordersSet) ;

Returns {'Pasta','Pizza','Risotto'}

console.log(new Set('Chin'));

will return a set of elements of the string {'C','h','i','n'}

```

**_Note: There is no way to retrieve elements from a set. Since all elements are unique and unordered, no need to retrieve items from a set._**

```
Looping over set:
for (setitem of set) console.log(setitem);
```

<br/>

### **Transforming an array into an array of unique elements**

<br/>

```
If we had an array such as-
const array1 = ['Pasta','Pasta','Ravioli','Pizza','Pizza'];

And we wanted to transform it into a set of unique values-
const set1 = new Set(array1);

# This will return a set of unique values {'Pasta','Ravioli','Pizza'}

We can use the spread operator to unpack the set and assign it to an array

const unique_array = [ ...new Set(array1) ] ;

Thus we transformed our array into an array of unique elements using Set notation and the spread operator

```

- Using set.size to get the number of unique letters in a string:

```
To get the number of unique letters in 'Susquehanna'

console.log(new Set('Susquehanna').size );
```

# Maps

- Entries are stored in key-value pairs.
- In Maps, the **keys** can have any **data type**. Compared to Objects, where the key can only be a **string**

- Add entries to a map using the **mapname.set(key,value)** method
- Read values from a map using the **mapname.get(key)** method

Ex-

```
const testMap = new Map();
testMap.set('name', 'Classico Italiano');
testMap.set(1, 'Firenze Italy');

Calling the set method returns the updated map

We can also chain the set method on Maps-

testMap.set('categories', [1,2,3]).set('open',11).set('close',12);
```

- **mapname.has(key)** checks if the key is present and returns boolean
- **mapname.delete(key)** deletes entry for the map that matches the key
- **mapname.size** returns the length of the map
- **mapname.clear()** clears all contents of the map

```
We can also set arrays or objects to be the keys of a map

const testmap = new Map();
testmap.set([1,2] , 'Sample Value');

If we use the get on the map to get our value
testmap.get([1,2]);

Above will return undefined. Even though the value of the array is the same, they are different arrays. We can make this work by assigning the array to a variable and using the variable in the set and get operations

```

## Maps Iteration

- **mapname.set(key,value)** is not the fastest way to add elements to a map
- We can pass in an array into the new Map() function to pass in multiple key - value pairs

```
const testMap = new Map ( [
    ['firstkey' , 'firstvalue'],
    [2, 'secondvalue'],
    [true , 'Correct'],
 ] )
```

The

> **Object.entries(objectname)**

function also returns an array of arrays, so we can pass this directly into the new Map() function to get a map of our object

```
const objectMap = new Map ( Object.entries(objectname) );
```

**Converting Map back into an Array**

```
Given map named testMap, we can use

const newarray = [...testMap];

Converts map back into array
```

# Strings

- **string.indexOf('a')** returns the index of the first occurence of 'a' in the string
- **string.lastIndexOf('a')** returns the index of the last occurence of 'a' in the string
- **string.slice(4)** will return the string beginning from index 4 - first 4 characters will be ommitted
- **string.slice(beg, end)** - returns the characters from beg- end. The length of the string will be end - beg.

```
const stringname = "Chinmay Bhelke";

stringname.slice(0, stringname.indexOf(' '));
Will return Chinmay

stringname.slice(0, -1);
Will return Chinmay Bhelk (last char will be cutoff)

#To get the last character of a string use-
stringname.slice(-1);
```

- **stringname.toLowerCase()**; changes string to lower
- **stringname.toUpperCase()**; changes string to upper case

```
Converting "cHinMaY" to have first letter uppercase and rem lower-

const stringname = "cHinMAy";

const correctname = stringname[0].toUpperCase() + stringname.slice(1).toLowerCase() ;
```

- **stringname.trim()** removes whitespace and newline \n

</br>

## Replacing Part of Strings

- **stringname.replace('orig' , 'new' );**
- Replaces the first argument with the second argument (only the first occurence)
- **stringname.replaceAll('orig','new');** replaces ALL occurences of first arg with 2nd arg

```
const priceGBP = '200.12#';

If we wanted to turn above string into 200,12$

const priceUSD = priceGBP.replace('.',',').replace('#','$');
```

**_Three string expressions that return Boolean_**

- stringname.includes('str');
- stringname.startsWith('a');
- stringname.endsWith('a');

- **stringname.split('+');** splits the string into an array witrh elements dividing on the '+'
  Ex-

```
const stringname = "chin+may+god+pog";
console.log( stringname.split('+'));

Result is an array ["chin" , "may", "god" , "pog"]
```

- array.join('-'); Combines the elements of an array into a string joined by the argument

```
const arrayx = ["chin" , "may", "god" , "pog"];
const joinstring = arrayx.join('-');
```

- **stringname.padStart(25, '+')**; will turn the string into 25 chars long by adding the + to the beginning of the String
- **stringname.padEnd(30, '-')**; will turn the string into 30 chars long by adding the - to the end of the string

</br>

**Shortcut for converting a number to a String**

```
We can add an empty string to a number to convert it to a string
const stringtrick = number + '';

```

**stringname.repeat() function**

```
const message = "planes delayed";
console.log(message.repeat(3));

Will repeat the message 3 times
```
