<h1 style="text-align:center;"> Numbers </h1>

- All numbers in JS are floating point numbers

<code> console.log(23 === 23.0); # true </br>
console.log(0.1 + 0.2); # 0.30000004 </code>

- Above will return True.
- Uses a base 2 system instead of base 10 - so not the most accurate for Math

- </b> Trick for number conversion </b> </br>
  <code>console.log(+'23'); # converets 23 to a number because JS sees the + sign </code>
  \
  </br>

<h3 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b> Number.parseInt() </b> </h3>

- parseInt() will parse the int out of a string such as '30px'
  <code>Number.parseInt('30px'); returns 30 </br>
  Number.parseInt('30px' , 10) ; returns 30, more accurate </code>
  </br>

</br>

<h3 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b> Number.parseFloat() </b> </h3>

- parseInt() will parse the int out of a string such as '2.5rem'
  <code>Number.parseFloat('2.5rem'); returns 2.5 </br>
  Number.parseFloat('2.5rem' , 10) ; returns 2.5, more accurate </code>

</br>

<h3 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b> Number.isNaN() & Number.isFinite() </b> </h3>

</br>

- Checks to see Not a Number - returns Boolean
- Better way to check if we have a number is to use Number.isFinite()
- Number.isFinite() returns TRUE for Numbers, FALSE for Non-numbers

```
console.log(Number.isFinite(20)) ; # returns True

console.log(Number.isFinite('20')); # returns False
```

</br>

<h3 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b> Math & Rounding </b> </h3>

- Square Roots

```
Math.sqrt(25) ;
OR
console.log(25 ** (1/2));
```

- Math.max() - returns the max value from provided args
- Does not do type conversion so if one of the elements is a string it will fail and return NaN
- Math.min() works the same way

```
console.log(Math.max(1,5,100,34));
```

- Math.PI - returns PI </br>
  <code>console.log(Math.PI); </code>
  </br>

Math.random() - generates random float between 0 and 1

```
Generating a random number between a min and a max

const rangeNum = (min,max) => Math.trunc(Math.random() * (max-min) +1 ) + min;

Explanation:
Math.trunc(Math.random()) gives a number between 0-1.
0 - 1 multipled by (max - min) gives us a range 0 ... (max - min)
Adding min to both sides gives us a range of min .... max
```

### Rounding Integers

- Math.trunc() removes the decimal aspect of any number
- Math.round() rounds the number to the nearest integer
- Math.ceil() rounds UP
- Math.floor() rounds DOWN
- All of these methods do type conversion

#### Rounding Decimals - .toFixed()

_Note: .toFixed() converts the decimal to a String_

```
console.log((2.7).toFixed(0)); # rounds 2.7 to 0 decimals - 3

console.log((2.7).toFixed(3)); # rounds 2.7 to 3 decimals - 2.700

Can use the + trick to convert result into a Number
console.log(+(2.7).toFixed(0));

```

</br>

<h3 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b> % - Remainder Operator</b> </h3>

- Returns the remainder of a division operation between 2 integers

```
console.log(5%2); # returns 1
```

</br>

<h3 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b> BigInt - ES2020</b> </h3>

- BigInt is one of the primitive data types introduced in ES2020
- Trick to log biggest safe int in JS- console.log(Number.MAX_SAFE_INTEGER);
- However, we can use new BigInt to store infinitely big numbers in a safe way
- We can write huge numbers as <b> 9991881273178n </b>

<b>Big Int Notation: </b> </br>
<code>console.log(12341431q41n); </code> </br>
<code>console.log(BigInt(12341431q41)); </code>

```
console.log(10n/3n) ; returns 3n - the closest big int integer

Normally,
console.log(10/3) ; will return 3.3333...
```

<hr>

</br>
<h1 style="text-align:center;"> Dates </h1>
</br>

<p style="font-size:17px;">There are several ways to create dates in JS : </p>

<ul style="font-size:16px;">
<li>Beginning of UNIX time - Jan 1, 1970 </li>
</ul>

```
1. new Date()
const now = new Date() ;
console.log(now); - Returns the current Date and Time

2. Parsing Date from a Date String # not best practice
console.log(new Date('July 25 2021 12:04:43'));
Accepts various formats such as new Date('December 25, 2021');

Can also pass
new Date(2037, 10 , 19, 15, 23, 5);
Returns Thu Nov 19 2037 15:23:05

```

```
Date Methods()
const now = new Date() ;
getFullYear() returns the year from a date variable
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()

new.toISOString() will return a formatted stringf such as 2037-11-19T23:00:12.000Z

To get current timestamp use -
Date.now()

console.log(Date.now());

```

<b> Date Operations </b>

```
Calculating difference between 2 dates in days:

const daysDifference = (date1 , date2) => (date2 - date1 ) / (1000 * 60 * 60 * 24) ;

(date2- date1) will return an answer in Milliseconds


```

</br>

<h3 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b> Internationalizing Dates</b> </h3>
</br>

<ul style="font-size:16px;">
 <li><span style="font-family:consolas;font-size:17px;">Intl.DateTimeFormat('lang-country').format(now) </span> will return the current date and time formatted according to the language and country params</li>
 </br>
 <li>Intl.DateTimeFormat()also accepts a second param which is an options object </li>
</br>
<li> We can get the language for the param args dynamically by pulling from the browser using <span style="font-family:consolas;"> navigator.language; </span>
</ul>

```
const corrDate = new Intl.DateTimeFormat('en-US').format(now);

const options = {hour: 'numeric' , weekday: 'long' , day: 'short', };

const customDate = new Intl.DateTimeFormat('en-SG' , options).format(now);

# Pulling language from the browser

const langDynamic = navigator.language; #returns 'en-GB' , etc.

const customDate = new Intl.DateTimeFormat(langDynamic , options).format(now);


```

</br>

<h3 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b> Internationalizing Numbers</b> </h3>
</br>

<ul style="font-size:16px;">
 <li><span style="font-family:consolas;font-size:17px;">Intl.NumberFormat('lang-country').format(num) </span> will return the current number formatted according to the language and country params</li>
 </br>
 <li>Intl.DateTimeFormat()also accepts a second param which is an options object </li>
</br>
<li> We can get the language for the param args dynamically by pulling from the browser using <span style="font-family:consolas;"> navigator.language; </span>
</ul>

</br>

```
const num = 3884764.23

console.log('US:', new Intl.NumberFormat('en-us').format(num));

Returns 3,884,764.23

Ex Options:
const options = {style:'currency',unit:'celcius',currenncy:'EUR',};
```

</br>

<h3 style="text-align:center;font-size:20px;color:skyblue;font-family:consolas"><b> Timers!</b> </h3>
</br>

<h3 style="font-size:18px;color:skyblue;font-family:consolas"><b> setTimeout()</b> </h3>

<ul style="font-size:16px;">
 <li><span style="font-family:consolas;font-size:17px;">setTimeout() </span> accepts a callback function and the time in MS for it to execute as the 2 args</li>
 </br>
 <li>This is a use case of asynchronous JS</li>
</br>
<li> After the callback f'n and the timeout interval, we can specify parameters to pass to the callback f'n as the 3rd and beyond params to setTimeout()</li> </br>
<li>setTimeout(callback, interval, param1, param2, param3, etc..);
</ul>

<code style="font-size:17px;">setTimeout(()=>console.log('Hello'), 3000) </code>

```
setTimeout((ingred1, ingred2)=>console.log(`I love ${ingred1} and ${ingred2}`) , 5000 , 'olives' , 'mozzarella');

After 5 seconds, the console will return:
I love olives and mozzarella

```

- We can clear the timer using clearTimeout(timername)

<h3 style="font-size:18px;color:skyblue;font-family:consolas"><b> setInterval()</b> </h3>
</br>
<ul style="font-size:16px;">
<li>Runs a function on an interval every x seconds </li>
 <li><span style="font-family:consolas;font-size:17px;">setInterval() </span> accepts a callback function and the time in MS for it to execute as the 2 args</li>
 </br>
 <li>This is a use case of asynchronous JS</li>
</br>
<li> After the callback f'n and the timeout interval, we can specify parameters to pass to the callback f'n as the 3rd and beyond params to setInterval()</li> </br>
<li>setInterval(callback, interval, param1, param2, param3, etc..);<li>
<li> We can stop the setInterval() timer by using clearInterval() </li>
</ul>

```
Logging the date to the console every second

setInterval(() => {const now = new Date();
console.log(now);}  , 1000 )

Stopping the timer:

clearInterval(timername);

```
