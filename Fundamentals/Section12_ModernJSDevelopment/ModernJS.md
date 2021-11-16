<link href="style.css" rel="stylesheet";>
<h1 style="text-align:center;font-family:calibri;color:white;"> Modern JS Development </h1>
<hr>
<hr>
</br>
<h2>Modules</h2>

</br>

<ul>
<li>In our script.js , we can import modules. No matter the position of the import statements, they are always executed first. All modules are also executed in Strict mode by default </li>

<li>There are 2 types of exports - named exports and default exports. </br> Example of <b>Named exports :</b> </li>

```
Importing modules from same directory
If we have a module called sampModule.js & script.js

First we need to update the index.html script tag to add a type=module attribute
----
index.html:

<script defer src="script.js" type="module";> </script>
----

script.js :

import './sampModule.js';

// If we only wanted to add the addInventory function from sampModule.js

import {addInventory} from './sampModule.js';

// We can also change the names

import {totalCost as tCost, totalQuantity as tQuant} from './sampModule.js';

// Importing everything

import * as SampModule from './sampModule.js';

Then we can reference any values from sampModule.js with using the object notation:
SampModule.addInventory('apple', 10);
----
sampModule.js :

const cost = 100;
const inventory = [];

// We can simply add an export statement behind any expression or variable that we want to export-

export const addInventory = (product, quantity) => {
    inventory.push({product,quantity});
}

const totalCost = 237;
cost totalQuantity = 100;

// We can also export vars together such as

export {totalCost, totalQuantity};
----

```

<li> </b>Default Exports </b></li>

```
We use default exports if we only want to export one thing from a module. We do not need to name it for the export js file.
----
sampModule.js :

const inventory = [];

export default function (product, quantity) {
    inventory.push({product,quantity});
}
----
script.js :

import calculate from './sampModule.js';

calculate('macncheese',20);

// Note: We can name the import anything we want to for default exports and while importing no curly braces is required, but works
----
```

<li><b>Important Note:</b> when we export/import objects from modules, they are not copies but just pointers to the same underlying object. When we import an array from a module and add items to it, items are also added to the array object from the exporting module  </li>
</ul>

</br>

<h3> CommonJS </h3>

<ul>
<li>We can use the CommonJS syntax to import/export modules such as : </li>

```
script.js :

// Exporting
// Notation is export.varName

export.calcCost = function (cost , quantity ) {
    console.log(`${cost} for ${quantity});
}

// Importing

const {calcCost} = require('./sampModule.js');
```

<li>Hopefully ES6 Module Syntax will replace CommonJS module syntax </li>
</ul>

<hr>

<h2> NPM - Node Package Manager </h2>

</br>

<ul>

<li>Does not make too much sense to add JS files as script tags through HTML - we do not want our HTML to load all of the js files </li>

```
We should first initialize npm by running:

npm init

This creates a package.json in the directory

Install modules by running:

npm install modulename
ex: npm install leaflet
```

<li>Initialize npm by cd'ing to the current working directory and running <span>npm init </span> - this creates package.json </li>
<li>Install modules by running <span>npm install modulename</span> or <span>npm i modulename </span> - this adds the module to the package.json file as a dependency. The modules are stored in a <span>node_modules directory</span></li>
<li><b>Lodash</b> - extremely useful module for enhancing JS features - community built JS functions , etc. </li>

```
If we wanted to use the cloneDeep function from Lodash (after running npm init and npm -i lodash-es)

script.js:

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// Use Case of cloneDeep

const origObj = {
    name: 'Chin',
    age: 25
};

// Traditional JS way of cloning an object

const jsCopy = Object.assign({} , origObj);

// Using Lodash-es cloneDeep function

const lodashCopy = cloneDeep(origObj);

// If we update origObj.name = 'Keepo' , both the values will change in the jsCopy and origObj. But using deepClone, only the origObj value will change.

```

<li>We should never include the node_modules folder when committing our project to a code repo ,etc. However, our <span>package.json</span> will have all of the information for the modules and dependencies.</br> So we can simply include the package.json file and then run <span>npm i</span> which will download all of the node_modules for the project </li>

</ul>

</br>
</h3> Bundling with Parcel </h3>

</br>

<ul>

<li><code>npm i parcel --save-dev </code></br><code>npm i parcel@1.12.4 --save-dev</code> <i>// to install particular version</i> </li>
<li> Above dependency is installed locally to the project (not global) so we cannot use parcel by using a cli command sUch as <span>parcel index.html </span></br>Instead, we can use : <code>npx parcel index.html </code></li>
<li>Parcel will create the <b>dist</b> folder which is the folder we will finally upload for the users which contains the bundled code </li>

```
Importing modules using Parcel:

script.js :

// Original

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// Alternate Syntax that Parcel understands

import cloneDeep from 'lodash-es';
```

<li>To create the final code build , we can run <span>npx parcel build index.html</span> </li>

```
We can modify the package.json to include Scripts that will run to build our code

package.json :

"version" : "1.0.0",
...,
...,
"scripts" : {
    "start": "parcel index.html",
    "build": "parcel build index.html"
},

// From the CLI run:

npm run start - will execute start script

npm run build - will execute build script

```

<li> Installing packages globally - <span>npm i parcel -g </span></li>
<li> </li>
</ul>

</br>

<h3>Babel and Polyfilling </h3>
</br>
<ul>
<li>Parcel already uses Babel under the hood to transpile the code </li>
<li>Babel will transpile all our code to ES5 code which is supported in most browsers </li>
<li> Babel only converts ES6 syntax features such as spread operators and ES6 functions to ES5 - but features only available in ES6 such as promises are not transpiled- for this we use <span>Polyfilling</span></li>
<li> <b>Polyfilling</b></li>

```
script.js:

import 'core-js/stable';

// or install through CLI

Doing this will enable ES6 exclusive features in ES5

```

</ul>

</br>
<hr>

<h3> Writing Clean JS - Functional Programming</h3>
</br>
<ul>
<li>Functional Programming - using Pure funcTIons to write software- pure functions are functions without side effects. Does not depend on external variables.  </li>
<li><b>Functional programming best principles:</b> </br>
<ol>
<li>Avoid data mutations </li>
<li>Use built in methods that do not produce side effects </li>
<li>Do data transformations with methods such as <span>.map(), .filter() , .reduce() </span> </li>
</ol></li>
<li> Using <b>Declarative Syntax</b> is also an important aspect of Functional Programming. </br><ol>Declarative Programming Best Principles: 
<li>Use Array and Object Destructuring </li>
<li>Use the Spread Operator ... </li>
<li>Use Template Literals and Ternary Operators </li>
 </ol></li>
<li>Making an object immutable using <span>Object.freeze({});</span></br> </li>

```
'strict mode';

const immutableFn = Object.freeze ({
    name : 'chin',
    age: 25,
});

// Assigning new properties to the object will not work now

immutableFn.god = 'Yes' ;
```

<li>Example of Functional Programming Pure Function </br>

```
const array = ['chin','kappa'];


const modifyArr = function (name) {
    array.push(name);
}

modifyArr('kappachino');

// Not best practice as we have a side effect of modifying the array


// Best practice is to clone the Array and then return the clone

const modifyArr = function (name, array) {
    let funcArray = [...array];
    funcArray.push(name);

    return funcArray;
}

```

</li>
<li> </li>

</ul>
