<link href="style.css" rel="stylesheet";>

<h1 style="text-align:center;"> Object Oriented Programming </h1>

<ul>
<li>How do we design<b> classes? </b>Classes are the blueprint for Objects.</br> 4 fundamental principles for Classes are: </li>
<li><span>Abstraction </span>- ignoring or hiding details that don't matter.  </li>
<li><span>Encapsulation </span>keeping properties and methods private inside the class, so they are not accesible from outside the class. Some methods can be exposed as a public interface </li>
<li><span>Inheritance </span> Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real world relationships. </li>
<li><span>Polymorphism </span> A child class can overwrite a method it inherited from a parent class. </li>
</ul>

<hr>
</br>

<h2> OOP in JS </h2>
 </br>

<ul>
<li> In JS, objects are linked to a Prototype object. A prototype object contains methods that are accessible to all objects linked to that prototype - this mechanism is called <span>Prototypal Inhertiance</span></li>
<li>Whenever we use an array method, this is an example of Prototypal inheritance. </li> </br>
<i>3 ways to create prototypes in JS:</i>
<li>1. Constructor Functions  </li>
<li>2. ES6 Classes- syntactical sugar- behind the scene does same thing as constructor functions </li>
<li>3. Object.create() - most straightforward way of linking an object to prototype object- however 1 and 2 is more common   </li>
</ul>

</br>
<hr>
<hr>
</br>

<div style="border:2px solid white;padding:2rem;"><b>Important Note:</b> To create constructor function and also implement prototype methods using <span>Class.prototype.funcName = function(){}</span> we cannot use ES6 arrow functions, only ES5 </div>
</br>

<h2> Constructor Functions </h2>
</br>

<ul>
<li> We always use new() with the constructor function and it should begin with a capital letter. </li>

```
'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const chin = new Person('Chin',1996);
```

<li> By doing this, a new empty object is created and the <span>this</span> keyword points to the new object created, and the object is linked to the protype. </li>
<li> We can test if our new object is an instance of the Prototype by using: </li>
<code> console.log(chin instanceof Person); // will return True </code>
<li> We should never write method functions inside constructor functions. </li>

</ul>

</br>

<h2> Prototypes </h2>

</br>

<ul>

<li> Instead of defining the function within constructor, we should instead use the <span>Class.prototype method</span> </li>

```
//Setting Methods

Person.prototype.calcAge = function() {
    return 2037 - this.birthYear;
}

//Setting Properties
Person.prototype.species = 'Homo Sapienz';

console.log(chin.calcage());
console.log(chin.species);

The inherited properties from the prototype will not show up when we console.log(chin);

We can check by using -
chin.hasOwnProperty('species');

```

<li>Now, all of the objects created with the Person constructor will have access to the calcAge method </li>
<li> Class.prototype is not the prototype of the Class itself, but only of objects created with the constructor </li>
<li><span>chin.hasOwnProperty('propname');</span> <b><i>Prototype hierarchy</b></i> - JS first looks inside the chin object for the method > then looks in the chin.__prototype__ which is the Person.prototype for the method > then looks for the Object.prototype for the method and finally finds it </li>

```
Accessing protoypes-
console.log(chin.__proto___); //Person prototype

console.log(chin.__proto__.__proto__); //Object Prototype

Accessing array's prototype-

const arr = [1, 3 , 5];
console.log(arr.__proto__); //Array prototype- will list all methods
```

</ul>

</br>
<hr>

<h2> ES6 Classes </h2>

</br>

<ul>

<li> We can declare a class using ES6 syntax such as: </br> </li>

```
class PersonCl {

}

OR

const PersonCl = class {}
```

<li> The class function has an inbuilt constructor method  </li>

```
class PersonCL {
    constructor(firstName, birthYear)
    {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2037-this.birthYear);
    }
}

//Note: no commas between methods in the classs

Whenever we create a new object from the class the constructor is called:

const chin = new PersonCl('chin',1996);
```

<li> The question is- do we use Classes for OOP or the constructor function for OOP? </li>

```
1. Constructor Function

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const chin = new Person('Chin',1996);

2. ES6 Class

class PersonCL {
    constructor(firstName, birthYear)
    {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const chin = new Person('Chin',1996);

```

</ul>

</br>

<h2> Getters & Setters </h2>

</br>
<ul>

<li> </li>
<li> </li>
<li> </li>
</ul>

```
Using get to add a function to an object

const obj = {
    name: 'chin',
    age : 25,
    get sampleFn() {
        return this.age
    }
}

// We use this function by using the dot notation: note we do not have to call it ()

console.log(obj.sampleFn);

// Returns 25

Using set to set methods on an obj

const obj = {
    name: 'chin',
    age : 25,
    get sampleFn() {
        return this.age
    }
    ,
    set sampleFn(elem) {
        this.age = elem;
    }
}

// The set method should only have 1 parameter
//Imp note: we can call the set function by using assigment to the parameter -

obj.sampleFn = 50;

//The above line of code will call the sampleFn with a param of 50

```

</br>

<h3 style="text-align:center;color:skyblue;">Static Methods </h3>
</br>

<ul>

<li>Static methods will not get passed on to instances created with the class constructor </li>
<li>We define this using the static keyword </li>

</ul>

```
Ex of creating static method on a class

class Person {
    constructor (fullName , birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // CalcAge will be added to the .prototype property and can be used by instances of the class

    calcAge() {
        return this.birthYear
    }

    //The fullName() method cannot be accessed by instances created from the class
    static fullName() {
        return this.fullName;
    }
}

ex-
const chin = new Person('chinmay' , 1996);

chin.calcAge(); //valid
chin.fullName(); //invalid - returns error as method is static to the class

Person.fullName(); //valid

```

</br>

<h2> Object.create() </h2>

</br>

<ul>

<li> We can use <span>Object.create(obj)</span> to create an empty object that is linked to a prototype object referenced in the fn param </li>
<li> </li>

</ul>

```
If we have a prototype object:

const PersonProto {
    calcAge() {
        return this.birthYear;
    }
}

We can create an empty object that inherits the properties of the proto such as:

const personObj = Object.create(PersonProto);

```

</br>
<hr>

<h2> Inheritance between Classes ES6 Classes </h2>

```
To create a child class from a parent class we use:

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear); // constructor function of the parent class
        this.course = course; //since course is not an attribute on parent class

    }
}

```

</br>

<h2>Encapsulation </h2>

</br>

<ul>

<li>Encapsulation means keeping some properties private/public within a class </li>
<li> Best practice to define attributes using the <span>_attr</span> notation. </li>
<li>To define public fields, we define the attributes in the class without the this keyword</li>

```
class Account {
    privatesamplefield = 123;
    privArr = [];
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.pin=pin;
    }
}


```

<li>To make private fields, (fields not accessible from the outside) we declare the fields using a # </li>

```
class Account {
    #privateField = 123;
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.pin=pin;
    }
}

ex 2: This will set the value of pin, but console.log acc1.#pin will be inaccessible
class Account {
    #pin;
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin=pin;
    }
}

```

</ul>

</br>

<div style="border:2px solid white;">
ES6 Classes Summary

</br>

<img src="img\DC0AA5656731C25E.png"/>

</div>
