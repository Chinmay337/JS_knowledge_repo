<link href="style.css" rel="stylesheet";>

<h1 style="text-align:center;"> Advanced DOM </h1>

<p style="text-align:center;font-size:20px;color:skyblue;font-family:consolas;"> <strong> Selecting, Creating, Deleting Elements </strong> </p>

<ul>
<li>Selecting entire document - <span>document.documentElement;</span></li>
<li><span>document.querySelectorAll()</span> returns a node list, which is kind of similar to an array</li>
<li><span>.insertAdjacentHTML()</span> - important method to insert HTML elements</li>
<li><span>elem.prepend(elem2add) </span>- accepts an argument which is an HTML arg and adds it as the first child element  </li>
</ul>

```
Adding a Cookie message as the first element inside a parent element

cookieMessage = document.createElement('div');
cookieMessage.innerHTML = 'We use cookies for the website. <button class="close-btn">Accept </button>' ;

Selecting the parent element to insert cookieMessage into as the first element
header = document.querySelector('.header');
header.prepend(cookieMessage);

Removing the element
document.querySelector('.close-btn').remove();

```

<ul>
<li><span>elem.before(elem2add)</span> will add the HTML element as a child element before the specified elem from the arg </li>
<li><span>elem.after(elem2add)</span>  will add the HTML element as a child element after the specified elem from the arg</li>

</ul>
</br>

<h2>getElementsByTagName() </h2>

<ul>
<li>Returns an HTML collection of HTML elements specified by tag such as 'button' or 'div'  </li>
<li>A HTML collection is live - if we delete a button from the DOM then it will dynamically update the HTML collection. This behavior does not apply to a NodeList</li>
</ul>

<h2>elem.remove() </h2>

<ul>
<li>We can remove an element by selecting the element and using <span>elem2remove.remove()</span> </li>
</ul>

</br>

<h1 style="text-align:center;"> Styles, Classes, Attributes </h1>

<h2> Styles </h2>
<ul>
<li>We can update the styles of an element by using <span>elem.style.backgroundColor='#37383d'; </span> </li>
<li>Also: <span>elem.style.width='120%'; </span> </li>
<li>We can console.log the entire style by using <span>console.log(getComputedStyle(elem).height); </span> </li>
</br>
<li>For Custom CSS Properties, we can use <span>elem.style.setProperty('custompropname','propvalue');</span>  </li>
</ul>

```
Dynamically updating the height of an element from it's current height

elem.style.height = Number.parseFloat(getComputedStyle(message).height , 10) + 40 + 'px';

Number.parseFloat(num , 10) requires 2 args - the number and the base (10 or 2)

### If we had custom property names such as '---color-primary'

elem.style.setProperty('---color-primary' , 'colorvalue');

```

</br>
<h2> Attributes </h2>
<ul>
<li>We can also access basic HTML attributes by using similar notation:<span>elem.attribute </span> </li>
<li> This does not work for custom attributes</li>
<li><span>elem.getAttribute('customattr');</span> works for custom attributes</li>
<li><span>elem.setAttribute('customattr','Chin');</span> will set custom attributes</li>

</ul>

```
Selecting html attributes of an image element
We have our image element
<img src='chingod.png' alt = 'chingoat' class='logo' customattr='customval' />

In our JS code:

const img = document.querySelector('.logo');
img.alt;
img.src;
img.class;
img.customattr;

All above will work except the last one since it is for a custom attribute

We can use:
img.getAttribute('customattr'); to return the custom attribute

```

</br>
<p> <b> Data Attributes - custom attributes on an HTML element that begin with the string 'data'. </b></p>
<ul>
<li>Special use case for data attributes- must begin with the string 'data' </li>
<li> These data attributes named as 'data-version-number' or 'data-xyz',etc. and are stored in <span>elem.dataset.attrname</span></li>
<li>Example, if we added a 'data-version-number' attribute to our img element, </li>
<li><span>img.dataset.VersionNumber</span> will reference the value assigned to the attribute</li>
<li><span>Note: even though the value is data-version-number, we need to reference it using CAMELCASE in our JS code and OMIT the data part of the name</li>

</ul>

```
Referencing data attributes
We have our image element

<img src='chingod.png' data-version-number='2.0.2' alt = 'chingoat' class='logo' customattr='customval' />

The data-version-number attr can be referenced by using:

img.dataset.versionNumber;

```

<h2> Classes </h2>

<ul>
<li><span>elem.classList,add() </span> </li>
<li><span>elem.classList.remove() </span> </li>
<li><span>elem.classList.toggle() </span> </li>
<li><span>elem.classList.contains() </span> </li>
<li>We provide the classnames as args to the functions (can provide multiple).  </li>
</ul>
</br>
<hr>

<h2> Smooth Scrolling </h2>

<ul>
<li>To get the coordinates of an element, use <span>elem.getBoundingClientRect();</span></li>
<li> <span>window.scrollTo()</span> - global function on the window object</li>
<li><span>elem2.scrollIntoView({behavior:'smooth'}) </span> - newer way to scroll to elem2, simply add an event handler to the first element and add secondelement.scrollIntoView({behavior:'smooth'}) to scroll to the second element</li>
</ul>

```
Getting both coordinates of element and element to scroll to:

If we want to scroll to an element with id of 'section1' after clicking our button with class 'btn-scroll'

First, select button and section to scroll to
buttonScroll = document.querySelector('btn-scroll');
const scrollElem = document.querySelector('#section1');

Then add the event handler f'n to the button

buttonScroll.addEventListener('click', (e) =>
    coordinates1 = scrollElem.getBoundingClientRect();
    coordinates2 = e.getBoundingClientRect();

     //old way
    //Pass in the coordinates to the window.scrollTo() f'n
    window.scrollTo(
        left: coordinates1.left + window.pageXOffset ,
        right: coordinates1.top + window.pageYOffset ,
        behavior: 'smooth', );

    //new way
    scrollElem.scrollIntoView({behavior:'smooth'});

    )

```

<h1 style="text-align:center;"> Events </h1>

<ul>
<li> There are several event listeners such as 'mouseenter' , 'resize' , etc. </li>
</ul>

```
1. Alternate way to add event listener to an element is to specify it as a property on the element.

For ex-
element.onmousenter = () => console.log('Hello World');

2. We can also remove a function from an event handler after execution if it is assigned to a variable.
Ex-
We have an html element divSamp that is a <div>

const fnSamp = () => {console.log('This function will be removed later.');
                       divSamp.removeEventListener('mouseenter', fnSamp); }

divSamp.addEventListener('mouseenter', fnSamp);

Whenever we mouseover divSamp, the console.log will happen once and then the event listener will be removed
```

</br>

<h2>Bubbling & Capturing </h2>

<ul>
<li>Bubbling- when an event executes, it travels from the element to the top of the DOM document. It passes through all of it's parents elements. It is as if these events also happened in the parent elements when they are BUBBLING.  </li>
<li>We can define a function on a p element nested within a div which is also in a div. If we add a click event handler to all 3 elements and reference the function (defined in the p) as the callback, when we click p, the function will get invoked on all 3 elements because of bubbling </li>
<li>If we console.log the e.target and e.currentTarget on all of the 3 elements, the target will also be the element that we clicked (p) but the currentTarget will change as the event bubbles </li>
<li>We can stop the bubbling by using <span>e.stopPropagation()</span>  </li>
<li><span>addEventListener()</span> accepts a third parameter that is a boolean that defines the behavior. When set to TRUE, the event handler will no longer listen for bubbling events, but instead will listen for CAPTURING events. </li>
<li>For ex, if set to TRUE and we have 3 event handlers on nested elements, when we click the p element, the first parent div is executed first since the logic is reversed from bubbling to capturing  </li>
</ul>

```
Good Design Pattern to Scroll to Elements from elem1 to elem2:

Usually we define the element to scroll to in the href of elem1.
The href attribute is like a hyperlink and takes us directly to the specified href by class or id.

Ex:
<p href='#id1'> </p>  OR <div href='.class1'> </div>

We can add an event handler to the elements and read in the element to scroll to by using document.querySelector() and assigning the value of the href tag to it; then using the result of that with a scrollIntoView function.

Reading in the href of an element:
const id = elem1.getAttribute('href');

Then we can select the elem2 to scroll to using the id ;
const elem2 = document.querySelector(id);

Then we finally add the scrollIntoView fn to the callback for elem1
elem2.scrollIntoView({behavior:'smooth'});

```

<h2> Event Delegation - Best Practice  </h2>

<ul>
<li>Step 1. Add event listener to common parent element </li>
<li>Determine what element originated the event using <span>event.target</span> </li>
<li>On the event listener for parent elem, define if condition to check the correct target element. (for ex: we want a <span>scrollIntoView()</span> function only for elements with class 'nav_objects'. ) </li>
<li>If we have 3 nested elements such as a p within a div within a div, when we click the p element, it will be accessible through the e.target method of the callback fn to the topmost parent whom we are adding an event listener to. (we only have 1 event listener on the top parent) </li>
<li> </li>
</ul>

```
Imagine we have a p within a div within a body

We select the body and only add an event listener to the body - that handles all functions for child elements

If we want to add one function to the p element and another fn to the div element, we can use a matching if block in the addEventListener() for the parent element and use if blocks to conditionally add the fn's depending on matching id's or classes for the div or p elements

document.querySelector('.bodyClass').addEventListener('click', (e) => {

    e.preventDefault();
    console.log(e.target);    # if we click on the p child element, e.target will be the p element

    # If the child element has divclass, we want to add a fn to scroll to the href attribute specified in the div

    if (e.target.classList.contains('divClass')) {
        const id = e.target.getAttribute('href');
        const scrollToElem = document.querySelector(id);
        scrollToElem.scrollIntoView({behavior:'smooth'});
    }
})

Using the above strategy, we do not need to select all of the child elements using forEach() and add a function to all of them- we can simply define the function in the parent element and use bubbling to execute the logic whenever someone clicks on the correct target element

```

<h2> Dom Traversing </h2>

<ul>
<li><span>elem.children;</span> returns a HTML collection of all child elements for an element </li>
<li> <span>elem.firstElementChild , elem.lastElementChild </span> returns these respective elements. This can also be updated by using <span>elem.firstElementChild.style.color='white';</span></li>
<li><span>elem.closest('.classname')</span> returns the closest element specified by the classname or id. Can also accept an element as the argument such as <span>elem.closest('h1');</span> </li>
<li>To get all child elements in current element nesting: <span>elem.parentElement.children;</span>   </li>
<li><span>'mouseover' , 'mouseenter'</span> are similar events, whereas mouseenter does NOT bubble, and mouseover bubbles   </li>
<li>   </li>
</ul>

```
The event handler function by default can only accept one parameter which is the event.
ex- addEventListener('mousenter',function(e){};)

Suppose we defined the function outside such as
sampleFn = (num) => console.log(num);

And we want to use the f'n in the event handler such as :

addEventListener('mouseenter' , sampleFn);
Passing in addEventListener('mouseenter' , sampleFn(e)); results in an error as e is not defined

And since by default the event handler only accepts the event parameter we cannot pass nums or any other params

A workaround this is to use the bind keyword , which binds the this keyword to the argument provided using bind(bindto)

ex:
sampleFn.bind(0.5);
using 'this' in the sampleFn will now return 0.5 whenever we use it
for ex-
sampleFn = () => {let nums = this;
console.log(nums); # will return 0.5}

Thus, we can use bind to pass in additional parameters to an event handler callback function such as:

addEventListener('mousenter', sampleFn.bind(1.5));
```

<h2> Scroll event listener </h2>

<ul>
<li>We can add a 'scroll' event listener to the window object that is triggered every time we scroll on the page </li>
<li><span>window.addEventListener('scroll',()=>) </span> </li>
<li><span>console.log(window.scrollY)</span> returns the Y position of the window </li>
<li>Using the scroll event is not good practice and offers bad performance </li>

</ul>

</br>

<hr>
<h2> Intersection Observer API 🤲 </h2>

<ul>

<li>Start by creating a new intersection observer object and passing in a callback fn and options object </li>
<li><span>const observer = new IntersectionObserver(obsCallback, OBSsOptions); </li>
<li>The callback is called every time the observed element is intersecting the root element at the threshold we defined</li>
<li> The callback fn accepts 2 params- entries (array) and the observer. The entries represent the intersection events that are created when the callback f'n is created. These entries have the details of the intersection event </li>
<li>If our threshold is 0.1 = 10%, then it means the function will get triggered when more than 10% of our observed element is within the browser viewport </li>

```
const obsCallback = function(entries, observer) {
    entries.forEach(entry => console.log(entry););
};

const obsOptions = {
root: null,
threshold : 0.1
};

const observer = new IntersectionObserver ( obsCallback , obsOptions) ;

We define observed element in :

observer.observe(section1);

```

<li>If we set the threshold to 0, then the callback will be triggered every time the observed object moves into the viewport or completely out of the viewport </li>
<li>If we set the threshold to 0 and the observed object is not in viewport, then the isIntersecting property of the entries will be false. We can use this to define logic to hide/show classes for an object  </li>
<li> To access the properties of the intersection entries, we need to destructure the entries parameter to get the first entry such as <span>const [entry] = entries;</span> and then reference the properties using <span>entry.isIntersecting; etc.</span>
</ul>

```
Example- we want to change our header's class when it is out of the viewport

1. We select the header
header = document.querySelector('.header');

2. We create the callback f'n and options object

const observerOptions = {root:null, threshold: 0};

const observerFn = (entries) => {
    const [entry] = entries; //assign first entry to entry
    console.log(entry);

    if (!entry.isIntersecting) {header.classList.add('stickyclass');}
    else header.classList.remove('stickyclass');
}

3. Create the intersection API object with the observer element
const observer = new IntersectionObserver(observerFn, observerOptions);

observer.observe(header);

4. rootMargin
We can also specify the rootMargin property in the options object, which will add the specified value to the margin of the observer element and consider to be that many pixels bigger

ex-
const observerOptions = {
    root:null,
    threshold: 0,
    rootMargin: '90px'
}

This value can also be negative and will make the element to be considered smaller than it is
const observerOptions = {
    root:null,
    threshold: 0,
    rootMargin: '-90px'
}


```

<h2> Revealing Elements as we Scroll By </h2>

</br>

<ul>
<li>Illustration on how to remove the hidden classlist for elements as we scroll by them</li>
<li>The html elements can be accessed from the callback <span>entry.target</span> property </li>
<li><span>observerCallback = (entries) => {[const [entry] = entries; console.log(entry.target); </span></br>
Will return the html element such as the div or p</li>

</ul>

```
1- Select html elements to implement this feature to

const allSections = document.querySelectorAll('.section');

2- Define callback f'n and settings

obsOptions = {root:null, threshold:0.15}

obsFn = (entries) => {
    const [entry] = entries; //To get access to the html element and info
    if (!entry.isIntersecting) return; //Guard clause , we only want to remove hidden class when isIntersecting is True

    entry.target.classList.remove('.hiddenClass');

    //Since logic is done, we do not want to keep triggering events so we can unobserve
    observer.unobserve(entry.target);

}

3- Now we want to apply the Intersection API fn to all html elements we selected:
//We had selected all elements to allSections

//Let's declare the intersection observer outside

const intersectionObs = new IntersectionObserver(obsFn, obsOptions);

Then apply observers to every section-

allSections.forEach((section) => {
    intersectionObs.observe(section);
})
```

</br>
<hr>

<h2> Lazy Loading Images </h2>

<ul>

<li>We can select all HTML elements with a particular CSS tag using:  </li>
<li><span>document.querySelectorAll('img[data-src]'); </span> - will select all img elements that have the data-src css class </li>

</ul>

</br>

<h2> Implementing Sliders </h2>

</br>

<ul>

<li> The Css <b>Transform</b> property is used to reposition an element. <span>elem.style.transform = 'translateX(100%)'</span> will move the element to the right by 100% </li>
<li>To implement a slider, we create a div with 3 div elements and set the translateX property to 0 , 100%, 200% on all of them. Elements with 0 will be the ones displayed, elemns with translateX of -100% will be on the left and with 100$ will be on the right </li>
<li> We can add 2 buttons to handle the slider logic. For ex: when we click the right button, it will increment update the translateX property of all the elements by incrementing by 100%. </li>

</ul>

```
If we have 3 divs, we can select them using
divElems = document.querySelectorAll('.divclassname');

Then we can add an event handler to the button that will update the TranslateX property of the divs.

```

<h2> Lifecycle DOM Events </h2>

<ul>
<li> <span>'DOMContentLoaded' </span> is a lifecycle DOM event that completes after the HTML and JS is loaded- does not care about images. We can add the script tag at the end so the JS will be forced load after the HTML is first loaded. </li>
<li> <span>'load' </span> is a lifecycle event that the window fires after all of the HTML, JS, and eXternal resources including images are fully loaded. </li>
<li><span> 'beforeunload'</span> is a lifecycle event that the window fires after the user is about to exit the page. When we close the page, we get a confirmation if the user Wants to leave the page. Cannot be customized  </li>
</ul>

```
Accessing the 'DOMContentLoaded' event-
document.addEventListener('DOMContentLoaded', (e)=> console.log('HTML Parsed and Loaded'));

// will console.log the message once event is completed

Accessing the 'load' event-
window.addEventListener('load', (e)=> console.log('Page Fully Loaded'););

// Will console.log once all externalities and JS+HTML is fully loaded

Adding the leave page confirmation prompt
window.addEventListener('bbeforeunload', (e)=> {
    e.preventDefault();
    console.log(e);
    e.returnValue = 'message';
} ) ;

//Will show the basic confirm exit message when we X out of the page

```

<hr>
</br>

<h2> Efficient Loading of JS Script </h2>

<ul>

<li><span>◀script src="script.js"▶</span>  once JS starts loading, HTML stops loading </li>

<li><span>◀script async src="script.js"▶</span> Script is loaded at same time HTML is parsed. But HTML parsing stops once JS starts executing  </li>

<li> <span>◀script defer src="script.js"▶</span> Script is still loaded asyncronusly, but execution of script waits until HTML is loaded and parsed.    </li>

<li>Async and defer scripts should only be placed in the head , useless to place in body  </li>
</ul>
