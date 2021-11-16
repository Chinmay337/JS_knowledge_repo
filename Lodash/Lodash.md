<link href='style.css' rel='stylesheet'/>

<h1> Lodash </h1>

<hr>

<br/>
<br/>

<ul>

<li>Lodash <k>_.pick</k> function  </li>

<br/>

```
import _ from 'lodash'

const profile = {
    name : 'Chin' ,
    age: 25,
    favoriteColor : 'black'
}

_.pick(profile , 'name');

// Returns {'name' : 'Chin'}; as a new object

_.pick(profile , 'name' , 'age');

// Returns {"name": 'Chin' , "age" : 25};



```

<br/>
<li><k>Lodash mapKeys function </k>  </li>

<br/>

```
const colors = [
  {hue: 'green'},
  {hue: 'yellow'},
  {hue: 'blue'},
];

_.mapKeys(colors , 'hue');

// Will create on object such with the value of hue as the key and the object as the value

// new object will be :

{'green': {'hue' : 'green'} ,
 'yellow' : {'hue' : 'yellow'} ,
 'blue' : {'hue': 'blue' }
 }
;

```

<br/>
<li> </li>

<li> </li>

<li> </li>

<li> </li>

</ul>
