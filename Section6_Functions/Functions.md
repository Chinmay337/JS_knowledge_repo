<H1 style="text-align: center;"> Functions </h1>

- We can assign default values to parameters in a function
- If we want to use the default value in our function, we can pass in undefined as the parameter

<p style="text-align: center;">Ex- </p>

```
const funces6 = ( age = 18, name = 'chinmay') => {
    console.log(age,name);
}

funces6(20,'richard') will override the default params

# trick

funces6(undefined , 'richard') will keep the default param for age as 18
```

</br>
<h2 style="text-align:center;"> Pass by vs Reference</h2>
</br>

- Strings are primitive variables. When we reference string variables, since they are primitive/immutable they are copied and referenced
- Objects are not copied and are actually passed on as a reference to functions using it as parameters. If we pass in an object as a parameter and update the properties of the object, the original object will also be changed.

Ex-

```
const name = "Chinmay" ;
const chin = { age: 25, occupation: 'engineer' }

const passByVsReference = function (stringparam , objparam ) {
    stringparam = "Rajesh" ;
    objparam.age = 900;
}

passByVsRefeREnce(name, chin);

console.log(name); # will return "Chinmay" , even though we passed in name and changed value to Rajesh, since strings are primitive the function was working with a copy of name

console.log(chin.age); # will return 900, because we passed in the object property as a param and updated it, and the function was working with a reference of the object; not a copy
```

- _Passing by Value_ : JS only supports passing by value
- _Passing by Reference_ : JS does not support passing by reference like C++

</br>

- **First Class Functions** - functions are simply VALUES. Means functions are just anothter "type" of object

<div style="border:1px solid white;padding:25px">Functions that recieve other functions as input are called HIGHER ORDER FUNCTIONS.

Functions that are passed as input to othere functions are called CALLBACK FUNCTIONS.

</div>
</br>

<p style="text-align:center;font-size:15px"> <strong>🔥 Array .forEach() method- Running a function on every element of the array</strong></p>
 
Example

```
const arrayx = ['a','b','c'];
const samplefn = (x)=> console.log(x);

arrayx.forEach(samplefn);

OR

['a','b','c'].forEach(samplefn);

```

</br>

<p style="text-align:center;font-size:15px"><strong>🔥 Defining a function that returns another function.</strong> </p>

<p style="text-align:center; font-size:15px"> Example- </p>

```
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name} );
    }
}
//Rewriting using arrow f'n:
const greet = (greeting) => return (name) => console.log(`${greeting} ${name}`);

const fnsample = greet('Hello');
greet('Hello') returns the other function, so fnsample is now assigned to the function that was returned from the greet() function.

We can now use fnsample() as the return function as below:
fnsample('Chinmay');
Will return 'Hello Chinmay'

We can also use the returned function in an alternate way:
greet('Hello')('Chinmay')

# will have the same result
```

</br>
<h2 style="text-align:center;"> Call & Apply Methods : this keyword</h2>
</br>

Important background Example-

```
Suppose we have an object with a function-

const obj = {name: 'Chin',
age: 25,
sampleFn(testname) {
    console.log(`${testname} is ${this.age} years old`);
},
}

We assign the object property f'n to a variable-
const extractFn = obj.sampleFn;

We call the new f'n-
extractFn('andrew');

We get an error due to the this keyword. When we create a copy of the object function, we are assigning the function to the new extractFn object, which does not have the property this.age. Hence, we get the error

const newObj = {name: 'Andresh',
age: 12}

# Using the fn.call() method
extractFn.call(newObj, 'andrew') # Will work and not return an error for the this keyword
```

<ul style="font-size:15px";>
<li style="margin:10px";><strong> fnName.call(objectname , arg1, arg2 , etc.)</strong></li>
<li>the f'n.call() method provides an object for the this keyword and then the remaining normal arguments </li>
<li>In the above example, the call function calls the extractFn and provides an object (newobj) to use with the this keyword </li>
</ul>
</br>
<ul style="font-size:15px";>
<li style="margin:10px";><strong> fnName.apply(objectname , arrayname)</strong></li>
<li>the f'n.apply() method provides an object for the this keyword and then an array of args for the fn </li>
<li>This method is not used to often, because we can just use fn.call() using the spread operator such as <strong>fn.call(obj, ...array)</strong>
</ul>
</br>
<h2 style="text-align:center;"> Bind Keyword</h2>
</br>

```
Suppose we have an object with a function-

const obj = {name: 'Chin',
age: 25,
sampleFn(testname) {
    console.log(`${testname} is ${this.age} years old`);
},
}
We assign the object property f'n to a variable-
const extractFn = obj.sampleFn;

We call the new f'n-
extractFn('andrew');

We get an error due to the this keyword. When we create a copy of the object function, we are assigning the function to the new extractFn object, which does not have the property this.age. Hence, we get the error

We can use the bind keyword to bind the function to a new object that is used with the THIS keyword. The bind keyword creates a new function
Solution-

const bindfn = extractFn.bind(obj); #binds the extractFn to a provided obj. This will now refer to the new obj
bindfn('andrew') will now work.

```

<p style="font-size:15px";><strong>❗ For an event listener, the this keyword points to the event element itself. Such as a button or p, etc. </strong> </p>
</br>
<p><strong> ❗ Note about bind: </strong> We can also use the Bind keyword for partial application. When we want to preset parameters in a function. </p>
Ex-

```
If we have a base function-
const addTax = (rate, value) => value + value * rate;

If we want to pre specify the tax rate as 23% we can bind it to another function:

const addTaxVAT = addTax.bind(null, .23);

Note- Since we do not use the this keyword, we can give the null argument so bind ignores the this keyword assignement to an object

```

<div style="border:1px solid white;"> ❗ If we declare a variable using const within a block, we cannot access it outside the block. If we declare using var , it is accessible outside the block. </div>

</br>
<h2 style="text-align:center;"> Closures! </h2>
</br>

<ul>
<li>We do not explicity call closures, it happens implicitly while doing things.   </li>
</br>
<li><strong>Closure Definition: </strong>A function always has access to the variable environment of the execution context in which it was created, even after the execution context is gone.  </li>
<li>A closure gives a function access to all the variables of its parent function, even after the parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time </li>
<li>A closure makes sure that a function doesn't lose connection to variables that existed at the function's birth place.</li>
<li>A closure is like a backpack that a function carries around wherever it goes. This packpack has all the variables that were present in the environment where the function was created.</li>
</ul>

```
To look at the closure scope, we can-
console.dir(derivedfuncname);

Then look at the Scopes

Closures illustration-

# Declare empty variable-
let f;

# Declare f'n -
const funcClosure = function () {
    const a = 40;

    f = function() {
        console.log(a*2);
    };
};

# In our func, we assign a new function to f. f will have access to the variable a . This is an example of closure
```
