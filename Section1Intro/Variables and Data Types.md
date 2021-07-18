## Variable Naming Conventions
~~~
$ and _ are the only valid special characters for variable names. 
_varName = valid 
$varName = valid
--varName = invalid
Numbers are also invalid characters in var names
3varName = invalid
~~~

#### We reserve variable names in all caps for constant values such as PI.
```
Example:
PI = 3.14;
````
# Data Types
## 7 primitive data types
```
1. Number: Floating point numbers. Used for decimals and integers. 
2. String: Sequence of chars. Used for text.
3. Boolean: Logical type that can only be TRUE/FALSE.
4. Undefined: Value taken by a variable that is not yet defined. Empty value. 
    ex: let emptyVal; # typeof(emptyVal); will return undefined
5. Null : Also means empty value. 
6. Symbol (ES6) : Value that is unique and cannot be changed.
7. BigInt (ES2020) : Larger integers than the Number type can hold.
```

#### JS is dynamically typed. This means data types of values are determined automatically when it is stored in a variable. Variables simply store values that have a type. 

### **1. typeof operator**
~~~
let checkTypeVar = true;
console.log(typeof checkTypeVar); #returns True
console.log(typeof true); #returns True

Usage:
typeof <var> ;
~~~




