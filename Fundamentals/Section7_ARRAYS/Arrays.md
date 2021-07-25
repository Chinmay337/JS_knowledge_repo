<h1 style="text-align:center;"> Arrays </h1>

<p style="text-align:center;font-size:20px;color:skyblue;font-family:consolas;"> <strong> Array.slice() </strong> </p>

<ul>
<li><strong>arr.slice(-2)</strong>: will return the last 2 items of an array </li>
<li><strong>arr.slice(1)</strong>: will return the items of an array beginning from index 1 (including index 1) </li>
<li><strong>arr.slice(1,4)</strong>: will return the array beginning from index 1 (included) up until index 4 (not included) </li>
<li><strong>arr.slice(1,-2)</strong>: will return the array beginning from index 1 and excluding the last 2 items </li>
</ul>

</br>

<p> Array.slice() does not change the original array. </p>

<div style="font-family:consolas; background-color:black;padding:5px;">
<p style="font-size:15px;">const arr = [1,2,3,4,5];</p>

<strong>arr.slice(2); </strong>returns the array beginning from index 2

const arrSliced = arr.slice(2);

arrSliced will contain 3 , 4 ,5

<strong>arr.slice(2,4);</strong> returns the array beginning from index 2 and upto index 4 (index 4 will not be included)
Length of new array will also be arg2 - arg1 , 4 - 2 = 2

const arrSliced = arr.slice(2,4);

arrSliced will contain 3, 4

arr.slice(-2) will get last 2 items of an array
arr.slice(-1) will get last item of an array

</div>

</br>
<hr>
<p style="text-align:center;font-size:20px;color:skyblue;font-family:consolas;"> <strong> Array.splice() </strong> </p>

<p> Array.splice() mutates the original array and elsewise works exactly the same as array.slice() </p>

</br>

<p style="text-align:center;font-size:20px;color:skyblue;font-family:consolas;"> <strong> Array.reverse() </strong> </p>

<p> - Array.reverse() returns the reversed array </br>
- This mutates the original array</p>
  
<div style="font-family:consolas; background-color:black;padding:5px;">
const origarray = ['a','x','y','z'];

origarray.reverse();

Now origarray will hold :
['z','y','x','a']

</div>
</br>
<p style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"> <strong> Array.concat() </strong> </p>
<p style="font-size:15px;"> - <strong>Array.concat()</strong> is used to combine 2 arrays </br>
- Usage: </br>  <code>array1.concat(array2)</code></br>
- We can also use the spread operator to combine 2 arrays without mutating them:
  </br><code>arr3 = [...arr1 , ...arr2];
  </code>
  </p>
</br>
<h2 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"> Looping over Arrays using: forEach() </h2>
</br>

- Different from looping over arrays using a for..of loop.

- The forEach method requires a callback function - it is a **higher order function**.

**Usage:** </br>
<code>
const array = [200, 500, 900 , 1000]; </br>
array.forEach(function(x) {console.log(x)})
</code>

</br>

- We can access the index of the array element being looped by **specifying the 2nd parameter in the callback function** we provide to the forEach function
- We cannot use break or continue in the forEach() loop as we can in the for...of loop.

Ex: </br>

```
const array = [200, 500, 900 , 1000];

array.forEach(function(element , index , array) {
    console.log(`${element} is at index ${index}`);
})
```

<h2 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"> forEach() - Maps and Sets </h2>

- forEach() can also be used with maps and Sets

Ex-

```
const mapx = new Map( [
  [ 'USD' , 'US Dollar'],
  ['EUR', 'Euro'] ,
  ['GBP', 'Pound'],
  ] ) ;

mapx.forEach(function(value, key , map) {
  console.log(value,key,map);
});
```

<h2 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"> insertAdjacentHTML() </h2>

- Method we can use to manipulate DOM elements to insert HTML
- Accepts 4 arguments as strings - beforebegin , afterbegin , beforeend , or afterend

Ex-

```
containerSample = document.querySelector('.class');

htmltoadd = `<div>'Hello World' </div>`

containerSample.insertAdjacentHTML('afterbegin' , htmltoadd);

This will add the HTML element specified after the beginning element of selected container element
```

<h1 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"> Map, Filter, Reduce ! </h1>

<p style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b>Map() </b></p>
<ul style="font-size:15px;">
<li>Map returns a new array containing the results of applying an operation on all original array elements </li>
<li>Unlike forEach, the Map() method creates a new array </li>
<li> The value of the return statement in the map callback function is assigned to the elements of the original array</li>
<li> The map() function also has access to <b>(element, index, array)</b> as parameters to the callback function </li>
</ul>
<code>
const prices = [200, 500, 800, 1000]; </br>
const eurToUsd = 1.1; </br>
</br>
const mapConvert = prices.map(function(convert) {</br>
return eurToUsd * convert ; }) ;</br>
</br>
# As an arrow function- </br>
const mapConvert = prices.map(convert => eurToUsd * convert; );
</br>
console.log(mapConvert); </br># should return the transformed array

</code>
</br>
</br>
<hr>
<p style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b>Filter() </b></p>
<ul style="font-size:15px;">
<li>Filter returns a new array containing the array elements that passed a specific test condition </li>
<li>We define the condition as a <b>boolean statement in the return </b>of the callback function
 </li>
<li> </li>
</ul>
<code>
const prices = [200, -500, -800, 1000]; </br>
const positiveNums = prices.filter((price) => return price > 0 );
</code>
</br>
</br>

```
We define the condition as a boolean statement in the return of the callback function

const prices = [200, -500, -800, 1000];

To get the positive prices-

const positivePrices = prices.filter(function(price) {
return price > 0;
})

```

<hr>
</br>
<p style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b>Reduce() </b></p>
<ul style="font-size:15px;">
<li>Reduce reduces all array elements down to one single value (ex: adding all elements together) </li>
<li>The reduce() function has different parameter orders for the callback function. <b>The first param is called the accumulator parameter.</b>  </li>
<li>After the first param, the normal params are applied for the callback f'n- which are (arrayelement, index, array) </li>
<li>So all of the params for the callback function are<b> (accumulator, element, index, array) </b></li>
</br>
<li>The reduce function accepts 2 params- the callback function and the initial value for the accumulator variable </li>
<li><b> reducefn.reduce(function(a,e) {return a + e} , 0 );  </b> </li>
<li>Above, we initialized the acccumulator variable to 0. The function will loop through the elements e of the array and return the total sum of elements. </li>
</ul>

</br>
<code>
const prices = [200, 500, 800, 1000]; </br>
</br>
const totalPrice = prices.reduce( (accumulator , element) => accumulator + element ) , 0); </br>
</br>
totalPrice will be 2500
</code>
</br>
</br>

<p style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b>join() </b></p>
<ul>
<li>array.join() combines the elements of an array and accepts the delimiter as an arg </li>
</ul>

<code>
const array = ['Sam','Pepperino','God']; </br>
const arrjoin = array.join(''); </br>
</br>
The new array will hold a single element ['SamPepperinoGod'];

</code>
</br>
</br>

<H2> <b> Chaining methods </b> </h2>

- We can map filter, map, reduce to one another
- Reduce() needs to be the last method since it returns a single value, whereas map and filter return arrays

Ex-

```
const prices = [200, 500, 800, 1000 , 2500 , -500 , -200];

const eurToUsd = 1,1;

We can chain all the methods to remove negative array elements , convert to USD , and then sum the elements and return the sum-

const sumPositive = prices.filter(price => price > 0)
                  .map(price => price * eurToUsd )
                  .reduce((acc , e) => acc + e, 0 );

console.log(sumPositive); will return the sum of array converted to USD without the negative numbers!

```

</br>
<H2 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"> <b> Find Method </b> </h2>

- We can retrieve an element from the array by specifying a condition
- **array.find() - accepts a callback function and we define the find condition in the return block**
- find() only returns one element , filter() returns the entire array that matches the condition

<code>
const array = [100,400,500,1000,2000,5000]; </br>
</br>
const firstVal = array.find(val=> val > 1500) ;
</br>
firstVal has 2000 in it, find() returns the first value that matches the condition
</code>
</br>
</br>
</br>
</br>
<div style="font-size:17px;border:2px solid white;padding:3rem;"> 
The default behavior for a <b>button onClick event</b> is to reload the page. </br>
To prevent this from happening, we can add an event parameter to the callback function added to the buttonClick and add the preventDefault() method.

<code>
buttonSample.addEventListener('click', function(e) {e.preventDefault(); })
</code>
</div>
</br>
</br>

<H2 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"> <b> findIndex() Method </b> </h2>
<div style="font-size:15px;">
<ul>
<li>Loops over the array elements and returns the index for the specified condition</li>
<li>The condition is defined in the return condition of the callback function for findIndex()</li>
<li>The findIndex callback f'n also has access to the element, index, and array itself</li>

</ul>
</div>
</br>

```
const arrayx = ['Chinmay' , 'Sumedh' , 'Yash'];

const indexNum = arrayx.findIndex((name) => name === 'Chinmay');

console.log(indexNum);

will return 0

```

<H2 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"> <b> some() and every() methods </b> </h2>
</br>

<H3 style="text-align:center;font-size:19px;color:skyblue;font-family:consolas"> <b> Some() </b> </h3>
<ul style="font-size:17px;">
<li>Similar to the array.includes() method, but checks for a condition. </li>
<li>array.some() recieves a callback function where we define a condition in the return, and the method returns a boolean </li>
<li> array.includes() - we define an equality statement in the return such as x === 'Chin'</li>

</ul>

<code>
const arrayx = [1,50,1000,2000]; </br>
arrayx.some((x) => x > 1000 ); </br>
Will return true since we have an element greather than 1000
</code>

</br>
</br>

<H3 style="text-align:center;font-size:19px;color:skyblue;font-family:consolas"> <b> Every() </b> </h3>
<ul style="font-size:17px;">
<li>Every() method recieves a callback function where we define a condition in the return block, and it returns a boolean if every element of the array passes the condition </li>

</ul>

<code>
const arrayx = [1,50,1000,2000]; </br>
arrayx.every((x) => x > 0 ); </br>
Will return true since we have ALL elements greater than 0.
</code>

</br>
</br>

<H2 style="text-align:center;font-size:19px;color:skyblue;font-family:consolas"> <b> flat() and flatMap() array methods</b> </h2>

</br>

<H3 style="text-align:center;font-size:17px;color:skyblue;font-family:consolas"> <b> flat() </b> </h3>
<ul style="font-size:17px;">
<li> Flat removes nested arrays from an array and returns all elements of the array</li>
<li>flat() is simply called by using array.flat() and does not require a callback function </li>
<li> We can provider a number as an argument to flat() that will return a flat array if there are nested arrays within nested arrays, etc.</li>

</ul>

<code>
const arrayx = [ ['a','b','c'] , ['d','e','z']] </br>
const flatArray = arrayx.flat()</br>
console.log(flatArray); </br>
</br>
Above console.log will return an array of ['a','b','c','d','e','z'];
</code>
</br>
</br>

```
flat(2) example -
const arrayx = [ ['a',['b','c']] , [['d','e'],'z']]

Since we have 2 levels of nested arrays,

flat(2) will return the nested array as ['a','b','c','d','e','z'];
```

<H3 style="text-align:center;font-size:17px;color:skyblue;font-family:consolas"> <b> flatMap() </b> </h3>
<ul style="font-size:17px;">
<li>Works similar to the map() function, but in the end returns a flat array of the generated mapped array</li>
<li>flatMap() only works with 1 level of nesting within arrays and is not useful for non-nested arrays</li>

</ul>

</br>

<H2 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"> <b> Array Sorting </b> </h2>

<H3 style="text-align:center;font-size:19px;color:skyblue;font-family:consolas"> <b>sort()  </b> </h3>
<ul style="font-size:17px;">
<li>The sort() method sorts by string logic. </li>
<li>For ex: given an array <b>[20,100,3000,450]</b> sort() will look at the first character in the string and sort it and return us with <b>[100,20,3000,450]</b> </li>
<li>The sort() method can also accept a callback function that accepts 2 params (x,y) that represent two items of the array</li>

</ul>

```
sort() callback function example-

array nums = [-500, 200, 400 , 10, -25];

nums.sort( (a,b) => {
  if (a > b) return 1;
  if ( b > a) return -1;
} );

//Cleaner way to write sort Ascending order f'n:

nums.sort((a,b)=> a - b);

//Descending order sort

nums.sort((a,b)=> b-a);

The logic is same as above. If a > b, a - b will return a positive number which will come later in the array and if a < b, a-b will return a negative number which will come earlier in the array.
The nums array will get mutated to represent an ascending order: [-500. -25, 10, 200, 400]

```

</br>

<p style="border:1px solid white;font-size:17px;padding:2rem;"> Note about usage of <span style="color:orange;"><b>.sort() </b></span></br>
<span style="font-family:consolas;color:yellow;">const accounts = account.sort() </span> </br> </br>^Above statement will also mutate
the underlying account array. In order to use the sort, we should create a copy of the account array. </br>
slice() is a good function to use in scenarios like these. </br>
Solution: </br>
<span style="font-family:consolas;color:yellow;">const accounts = account.slice().sort() ; </span> 
</p>
<b>How to sort an array of objects </b>

```
How to sort an array in ascending/descending order composed of objects

const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];

If we wanted to sort this array by the currFood values we can use the sort as follows:

const sortedDogs = dogs.sort((a,b) => a.currFood - b.currFood);

sort((a,b)) : a and b represent adjacent entries of the array which are objects - to sort and implement the logic we need to reference by using a.property and b.property

```

</br>
<hr>
<h2 style="text-align:center;"> <b>Additional methods of array sorting  </b> </h2>

</br>
<h3 style="text-align:center;font-size:19px;color:skyblue;"> <b>array.fill() </b> </h2>

<ul style="font-size:17px;">
<li>Takes arguments similar to slice() </li>
<li>array.fill(element, start, end) fills the array with an element and can take optional args such as start index(included) and end index (not included)  </li>
<li>fill('a',2) will begin inserting 'a' from the array[2] - including position array[2] upto the last element</li>
<li>fill('a', 2, 6) will begin inserting 'a' from a[2] until a[6]. a[6] will not be mutated. </li>

</ul>

```

To creata new array of size 6 :
const x = new Array(6);

x.fill(1); will mutate our array to contain [1,1,1,1,1,1]

We can specify a second argument for fill() which is the begin parameter.

x.fill(1,3) will start filling 1 from the 3rd index. Array will contain [empty, empty, empty, 1 , 1 , 1]
This will fill from 3rd index ( array[2] onwards, not including ) upto the end of the array.
We can specify a third end position argument.

x.fill(1,3,5) will mutate the original empty array of 6 elements into [empty x 3 , 1, 1, empty]
array[5] not included ; array[3] included

```

<h3 style="text-align:center;font-size:19px;color:skyblue;font-family:consolas"> <b>Array.from() </b> </h2>

</br>

<ul>
<li>This is a function and not a method used on an array, it is used on the Array constructor!</li>
<li>Accepts two parameters- an object and a mapping function - similar to <b>Map()</b></li>
<li>Mainly used to create arrays programmatically  </li>
<li> Also has access to (element, index, array) as any of the callback function params </li>
</ul>

```

const y = Array.from({length: 7} , () => 1) ;

console.log(y)

Console.log will return an array [1,1,1,1,1,1,1] of length 7 filled with 1's

Creating an array of 1-7:

const x = Array.from({length:7} , (elem, i ) => i + 1);

```

<div style="border:1px solid white;padding:2rem;">
<b style="font-size:17px;color:skyblue;">Important use case for Array.from() function </b>

```

We can use document.querySelectorAll() to select multiple elements to work with.

Ex:
document.querySelectorAll('.money') will select all html elements with class of money

However, we cannot create a new array or run methods/functions on selected content of the elements easily because querySelectorAll() selects the entire html element such as the <div> and not the content

If we want to create a new array of all the values from an html element with class '.money':

we can use Array.from() :

1. First argument - create an array of all html values using querySelectorAll('.money')
2. Second argument - map all values to their actual value by using callback and defining the value as the return to the fn

const moneyArray = Array.from(document.querySelectorAll('.money), el => el.value);

Result of moneyArray will be an array of all the values of the elements with class '.money'

Alternate way to create a new array

```

</div>

<hr>
</br>
